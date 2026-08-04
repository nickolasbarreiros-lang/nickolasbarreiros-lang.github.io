# Auditoria RC5.72

## Causa confirmada
O ZIP recebido ainda é RC5.67. A função `renderSmartDashboard()` buscava
`listar_pendencias_jornada_admin()` e colocava o resultado diretamente nas
notificações, sem cruzar `funcionario_id` com `activeEmployees`.

A página Ajustes, por outro lado, consulta apenas solicitações de ajuste.
Por isso ela mostrava 0 enquanto o painel mostrava a jornada incompleta do
TESTE HOMOLOGAÇÃO.

## Correção
O painel agora cria um conjunto de IDs dos funcionários ativos e filtra,
antes de contar/exibir:
- ajustes pendentes;
- jornadas incompletas;
- retornos temporários pendentes.

Também acompanha SQL para resolver pendências operacionais abertas de
funcionários já inativos, sem apagar marcações ou histórico.
