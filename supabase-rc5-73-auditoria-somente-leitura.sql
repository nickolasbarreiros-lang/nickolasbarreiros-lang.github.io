-- ============================================================
-- PLENITUDE PONTO RC5.73
-- AUDITORIA SQL SOMENTE LEITURA
-- Este arquivo NÃO altera dados nem estrutura.
-- ============================================================

-- 1. Informações gerais do banco.
select
  current_database() as banco,
  current_user as usuario,
  current_setting('TimeZone') as timezone,
  version() as postgres_versao,
  clock_timestamp() as horario_servidor;


-- 2. Tabelas do schema public e status de RLS.
select
  n.nspname as schema,
  c.relname as tabela,
  c.relrowsecurity as rls_habilitado,
  c.relforcerowsecurity as rls_forcado
from pg_class c
join pg_namespace n on n.oid=c.relnamespace
where n.nspname='public'
  and c.relkind='r'
order by c.relname;


-- 3. Políticas RLS instaladas.
select
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
from pg_policies
where schemaname='public'
order by tablename,policyname;


-- 4. Funções públicas, tipo de segurança e argumentos.
select
  p.proname as funcao,
  pg_get_function_identity_arguments(p.oid) as argumentos,
  pg_get_function_result(p.oid) as retorno,
  case when p.prosecdef then 'SECURITY DEFINER' else 'SECURITY INVOKER' end as seguranca,
  l.lanname as linguagem
from pg_proc p
join pg_namespace n on n.oid=p.pronamespace
join pg_language l on l.oid=p.prolang
where n.nspname='public'
order by p.proname,argumentos;


-- 5. Permissões de execução das funções.
select
  routine_name as funcao,
  grantee,
  privilege_type
from information_schema.routine_privileges
where routine_schema='public'
order by routine_name,grantee;


-- 6. Funções SECURITY DEFINER expostas a anon/authenticated.
select
  p.proname as funcao,
  pg_get_function_identity_arguments(p.oid) as argumentos,
  has_function_privilege('anon',p.oid,'EXECUTE') as anon_executa,
  has_function_privilege('authenticated',p.oid,'EXECUTE') as authenticated_executa
from pg_proc p
join pg_namespace n on n.oid=p.pronamespace
where n.nspname='public'
  and p.prosecdef=true
order by p.proname;


-- 7. Triggers instalados.
select
  event_object_table as tabela,
  trigger_name,
  event_manipulation as evento,
  action_timing,
  action_statement
from information_schema.triggers
where trigger_schema='public'
order by tabela,trigger_name;


-- 8. Índices das tabelas principais.
select
  tablename,
  indexname,
  indexdef
from pg_indexes
where schemaname='public'
  and tablename in (
    'funcionarios',
    'marcacoes',
    'jornadas',
    'pendencias_jornada',
    'solicitacoes_ajuste',
    'movimentacoes_jornada',
    'marcacoes_contingencia',
    'fechamentos_mensais',
    'logs_auditoria'
  )
order by tablename,indexname;


-- 9. Quantidade de registros nas tabelas operacionais.
select 'funcionarios' as tabela,count(*) as quantidade from public.funcionarios
union all select 'marcacoes',count(*) from public.marcacoes
union all select 'jornadas',count(*) from public.jornadas
union all select 'pendencias_jornada',count(*) from public.pendencias_jornada
union all select 'solicitacoes_ajuste',count(*) from public.solicitacoes_ajuste
union all select 'movimentacoes_jornada',count(*) from public.movimentacoes_jornada
union all select 'marcacoes_contingencia',count(*) from public.marcacoes_contingencia
union all select 'fechamentos_mensais',count(*) from public.fechamentos_mensais;


-- 10. Funções relacionadas a ponto, pendências, ajustes e fechamento.
select
  p.proname as funcao,
  pg_get_function_identity_arguments(p.oid) as argumentos,
  pg_get_functiondef(p.oid) as definicao
from pg_proc p
join pg_namespace n on n.oid=p.pronamespace
where n.nspname='public'
  and (
    p.proname ilike '%ponto%'
    or p.proname ilike '%pendenc%'
    or p.proname ilike '%ajuste%'
    or p.proname ilike '%competencia%'
    or p.proname ilike '%fechamento%'
    or p.proname ilike '%contingencia%'
  )
order by p.proname;
