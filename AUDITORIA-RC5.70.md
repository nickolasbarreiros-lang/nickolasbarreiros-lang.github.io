# RC5.70 — pendências de funcionários inativos

## Causa provável

A função RPC anterior podia continuar sendo servida pelo cache de esquema do
PostgREST ou devolver registros antigos. A tela recebia uma jornada incompleta
do funcionário de homologação mesmo após sua desativação.

## Correção

- criada nova RPC `dashboard_pendencias_ativas_v2()`;
- consulta parte de uma CTE contendo somente funcionários efetivamente ativos;
- exige `ativo = true`, `status = ativo` e acesso ao ponto habilitado;
- painel aplica uma segunda filtragem usando a lista ativa carregada;
- Central de pendências aplica a mesma proteção;
- funcionários desativados permanecem no histórico, mas não geram indicadores.

SQL obrigatório.
