# Auditoria RC5.71 — pendência do funcionário desativado

## Causa encontrada

Os arquivos enviados como versão atual ainda eram RC5.67:

- todas as páginas carregavam `v=1.0.0-rc5.67`;
- o Service Worker usava `plenitude-ponto-rc5-67`;
- `database.js` não possuía `dashboardPendencies()`;
- o painel ainda chamava diretamente:
  - `atualizar_pendencias_jornada_admin()`;
  - `listar_pendencias_jornada_admin()`;
  - `listar_pendencias_retorno_admin()`;
  - `listar_ajustes_admin()`.

Por isso as correções RC5.69/RC5.70 não estavam publicadas no site atual.
A jornada incompleta do funcionário de homologação continuava vindo da consulta
antiga, que não filtrava o funcionário desativado.

## Correção implementada

- nova RPC `dashboard_pendencias_ativas_v3()`;
- somente funcionários com `ativo=true`, `status=ativo` e acesso habilitado;
- painel e Central de pendências usam a mesma função;
- segunda filtragem no navegador pela lista ativa atual;
- competências fechadas e pendências resolvidas são ignoradas;
- solicitações equivalentes não duplicam jornada incompleta;
- versão de todos os recursos alterada para RC5.71;
- cache do Service Worker alterado para RC5.71.
