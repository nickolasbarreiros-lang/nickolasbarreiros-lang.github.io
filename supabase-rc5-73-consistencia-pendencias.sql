-- ============================================================
-- PLENITUDE PONTO RC5.73
-- DIAGNÓSTICO DE CONSISTÊNCIA DAS PENDÊNCIAS
-- SOMENTE LEITURA: não altera nenhum registro.
-- ============================================================

-- 1. Todas as pendências de jornada com o estado real do funcionário.
select
  pj.id as pendencia_id,
  pj.data_local,
  pj.marcacao_faltante,
  pj.status as status_pendencia,
  pj.detectada_em,
  f.id as funcionario_id,
  f.nome,
  f.matricula,
  f.ativo,
  f.status as status_funcionario,
  f.acesso_ponto_ativo,
  case
    when f.ativo is not true then 'NÃO DEVE APARECER: funcionário inativo'
    when lower(coalesce(f.status::text,'ativo'))<>'ativo'
      then 'NÃO DEVE APARECER: status do funcionário não ativo'
    when coalesce(f.acesso_ponto_ativo,true) is not true
      then 'NÃO DEVE APARECER: acesso ao ponto desabilitado'
    when pj.status<>'pendente'
      then 'NÃO DEVE APARECER: pendência não está aberta'
    else 'PODE APARECER'
  end as avaliacao
from public.pendencias_jornada pj
join public.funcionarios f on f.id=pj.funcionario_id
order by pj.status,pj.data_local desc,f.nome;


-- 2. Pendências abertas de funcionários inativos.
select
  pj.id,
  f.nome,
  f.matricula,
  f.ativo,
  f.status as status_funcionario,
  pj.data_local,
  pj.marcacao_faltante,
  pj.status
from public.pendencias_jornada pj
join public.funcionarios f on f.id=pj.funcionario_id
where pj.status='pendente'
  and (
    f.ativo is not true
    or lower(coalesce(f.status::text,'ativo'))<>'ativo'
    or coalesce(f.acesso_ponto_ativo,true) is not true
  )
order by pj.data_local desc;


-- 3. Pendências em competências fechadas.
select
  pj.id,
  f.nome,
  pj.data_local,
  pj.marcacao_faltante,
  fm.status as status_competencia
from public.pendencias_jornada pj
join public.funcionarios f on f.id=pj.funcionario_id
join public.fechamentos_mensais fm
  on fm.empresa_id=pj.empresa_id
 and fm.ano=extract(year from pj.data_local)::integer
 and fm.mes=extract(month from pj.data_local)::integer
where pj.status='pendente'
  and fm.status='fechado'
order by pj.data_local desc;


-- 4. Jornada incompleta que já possui solicitação equivalente.
select
  pj.id as pendencia_id,
  f.nome,
  pj.data_local,
  pj.marcacao_faltante,
  sa.id as solicitacao_id,
  sa.status as status_solicitacao
from public.pendencias_jornada pj
join public.funcionarios f on f.id=pj.funcionario_id
join public.solicitacoes_ajuste sa
  on sa.empresa_id=pj.empresa_id
 and sa.funcionario_id=pj.funcionario_id
 and sa.data_marcacao=pj.data_local
where pj.status='pendente'
  and sa.status='pendente'
order by pj.data_local desc;


-- 5. Solicitações pendentes de funcionários inativos.
select
  sa.id,
  f.nome,
  f.matricula,
  f.ativo,
  f.status as status_funcionario,
  sa.data_marcacao,
  sa.tipo_marcacao,
  sa.status
from public.solicitacoes_ajuste sa
join public.funcionarios f on f.id=sa.funcionario_id
where sa.status='pendente'
  and (
    f.ativo is not true
    or lower(coalesce(f.status::text,'ativo'))<>'ativo'
    or coalesce(f.acesso_ponto_ativo,true) is not true
  )
order by sa.data_marcacao desc;


-- 6. Retornos temporários pendentes de funcionários inativos.
select
  mj.id,
  f.nome,
  f.matricula,
  f.ativo,
  f.status as status_funcionario,
  mj.data_local,
  mj.inicio_em,
  mj.fim_em,
  mj.status
from public.movimentacoes_jornada mj
join public.funcionarios f on f.id=mj.funcionario_id
where mj.status='aberta'
  and mj.fim_em is null
  and (
    f.ativo is not true
    or lower(coalesce(f.status::text,'ativo'))<>'ativo'
    or coalesce(f.acesso_ponto_ativo,true) is not true
  )
order by mj.data_local desc;


-- 7. Resumo operacional que deveria alimentar o painel.
select
  f.id,
  f.nome,
  f.matricula,
  count(distinct pj.id) filter(where pj.status='pendente') as jornadas_pendentes,
  count(distinct sa.id) filter(where sa.status='pendente') as ajustes_pendentes,
  count(distinct mj.id) filter(
    where mj.status='aberta' and mj.fim_em is null
  ) as retornos_pendentes
from public.funcionarios f
left join public.pendencias_jornada pj on pj.funcionario_id=f.id
left join public.solicitacoes_ajuste sa on sa.funcionario_id=f.id
left join public.movimentacoes_jornada mj on mj.funcionario_id=f.id
where f.ativo is true
  and lower(coalesce(f.status::text,'ativo'))='ativo'
  and coalesce(f.acesso_ponto_ativo,true) is true
group by f.id,f.nome,f.matricula
order by f.nome;
