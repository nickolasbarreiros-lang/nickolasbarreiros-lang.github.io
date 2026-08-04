-- RC5.72 — correção definitiva do painel para funcionários inativos
-- Execute no SQL Editor do Supabase.
--
-- Esta função NÃO apaga histórico. Ela apenas remove pendências abertas
-- de jornada de funcionários que já estão inativos, pois essas ocorrências
-- não devem continuar exigindo ação operacional do administrador.

begin;

update public.pendencias_jornada pj
set status='resolvida',
    resolvida_em=coalesce(pj.resolvida_em,now())
from public.funcionarios f
where f.id=pj.funcionario_id
  and pj.status='pendente'
  and (
    f.ativo is not true
    or lower(coalesce(f.status::text,'ativo')) <> 'ativo'
  );

commit;

notify pgrst,'reload schema';
