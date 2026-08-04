-- Plenitude Ponto RC5.69
-- Fonte única para pendências administrativas.

begin;

create or replace function public.dashboard_pendencias()
returns table(
  chave text,
  tipo_pendencia text,
  referencia_id uuid,
  funcionario_id uuid,
  funcionario_nome text,
  matricula text,
  data_referencia date,
  marcacao_tipo text,
  titulo text,
  descricao text,
  criado_em timestamptz,
  destino text
)
language plpgsql
security definer
set search_path=public
as $$
declare
  v_empresa_id uuid;
begin
  if not public.usuario_e_admin() then
    raise exception 'Acesso administrativo necessário.';
  end if;

  v_empresa_id:=public.empresa_do_usuario();

  return query

  -- Solicitações de ajuste aguardando decisão.
  select
    'ajuste:'||sa.id::text,
    'ajuste'::text,
    sa.id,
    sa.funcionario_id,
    f.nome,
    f.matricula,
    sa.data_marcacao,
    sa.tipo_marcacao::text,
    'Solicitação de ajuste'::text,
    concat(
      'Marcação ',
      replace(sa.tipo_marcacao::text,'_',' '),
      ' solicitada para ',
      to_char(sa.horario_solicitado,'HH24:MI')
    ),
    sa.criado_em,
    'ajustes.html?status=pendente&fila=1'::text
  from public.solicitacoes_ajuste sa
  join public.funcionarios f
    on f.id=sa.funcionario_id
   and f.empresa_id=sa.empresa_id
  where sa.empresa_id=v_empresa_id
    and sa.status='pendente'
    and f.ativo=true
    and f.status='ativo'
    and coalesce(f.acesso_ponto_ativo,true)=true
    and not exists(
      select 1
      from public.fechamentos_mensais fm
      where fm.empresa_id=sa.empresa_id
        and fm.ano=extract(year from sa.data_marcacao)::integer
        and fm.mes=extract(month from sa.data_marcacao)::integer
        and fm.status='fechado'
    )

  union all

  -- Jornada incompleta sem solicitação de ajuste equivalente.
  select
    'jornada:'||pj.id::text,
    'jornada_incompleta'::text,
    pj.id,
    pj.funcionario_id,
    f.nome,
    f.matricula,
    pj.data_local,
    pj.marcacao_faltante,
    'Jornada incompleta'::text,
    concat(
      'Faltou ',
      replace(pj.marcacao_faltante,'_',' '),
      ' em ',
      to_char(pj.data_local,'DD/MM/YYYY')
    ),
    pj.detectada_em,
    concat(
      'relatorios.html?funcionario=',
      pj.funcionario_id::text,
      '&inicio=',
      pj.data_local::text,
      '&fim=',
      pj.data_local::text
    )
  from public.pendencias_jornada pj
  join public.funcionarios f
    on f.id=pj.funcionario_id
   and f.empresa_id=pj.empresa_id
  where pj.empresa_id=v_empresa_id
    and pj.status='pendente'
    and f.ativo=true
    and f.status='ativo'
    and coalesce(f.acesso_ponto_ativo,true)=true
    and not exists(
      select 1
      from public.solicitacoes_ajuste sa
      where sa.empresa_id=pj.empresa_id
        and sa.funcionario_id=pj.funcionario_id
        and sa.data_marcacao=pj.data_local
        and sa.status='pendente'
    )
    and not exists(
      select 1
      from public.fechamentos_mensais fm
      where fm.empresa_id=pj.empresa_id
        and fm.ano=extract(year from pj.data_local)::integer
        and fm.mes=extract(month from pj.data_local)::integer
        and fm.status='fechado'
    )

  union all

  -- Saída temporária ainda sem retorno.
  select
    'retorno:'||mj.id::text,
    'retorno_temporario'::text,
    mj.id,
    mj.funcionario_id,
    f.nome,
    f.matricula,
    mj.data_local,
    null::text,
    'Retorno temporário pendente'::text,
    concat(
      'Saída iniciada às ',
      to_char(mj.inicio_em at time zone 'America/Sao_Paulo','HH24:MI'),
      ' sem retorno registrado'
    ),
    mj.criado_em,
    'movimentacoes.html?pendentes=1'::text
  from public.movimentacoes_jornada mj
  join public.funcionarios f
    on f.id=mj.funcionario_id
   and f.empresa_id=mj.empresa_id
  where mj.empresa_id=v_empresa_id
    and mj.status='aberta'
    and mj.fim_em is null
    and f.ativo=true
    and f.status='ativo'
    and coalesce(f.acesso_ponto_ativo,true)=true
    and not exists(
      select 1
      from public.fechamentos_mensais fm
      where fm.empresa_id=mj.empresa_id
        and fm.ano=extract(year from mj.data_local)::integer
        and fm.mes=extract(month from mj.data_local)::integer
        and fm.status='fechado'
    )

  order by criado_em asc;
end;
$$;

revoke all on function public.dashboard_pendencias()
from public,anon;

grant execute on function public.dashboard_pendencias()
to authenticated;

commit;

notify pgrst,'reload schema';
