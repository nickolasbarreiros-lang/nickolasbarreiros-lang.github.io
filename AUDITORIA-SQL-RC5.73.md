# Auditoria SQL e estrutural — Plenitude Ponto RC5.73

## Escopo

A auditoria foi executada sobre a RC5.72 consolidada, derivada dos arquivos
reais enviados pelo usuário.

Foram examinados:

- 48 arquivos SQL de migração;
- 88 nomes de funções SQL;
- 42 RPCs chamadas pelo JavaScript;
- 24 módulos JavaScript;
- 20 páginas HTML;
- Service Worker, cache e versões dos recursos.

## Resultado executivo

O sistema está funcional, mas o banco ainda é mantido como um histórico longo
de migrações, sem uma versão-base consolidada. Isso torna a ordem de execução
dos arquivos SQL parte crítica do funcionamento.

Não foi encontrado erro de sintaxe JavaScript.

### Prioridade alta — histórico SQL fragmentado

Foram encontrados 14 nomes de funções redefinidos em dois ou mais arquivos.
Alguns exemplos:

- `registrar_ponto_com_pin`: 5 definições;
- `registrar_ponto_dispositivo`: 5 definições;
- `_calcular_banco_horas_json`: 7 definições;
- `listar_ajustes_admin`: 3 definições;
- `listar_pendencias_jornada_admin`: 2 definições;
- `horario_oficial_sistema`: 2 definições.

No PostgreSQL, a versão ativa é a última definição executada. Portanto,
executar um SQL antigo depois de um SQL novo pode restaurar silenciosamente um
bug já corrigido.

**Recomendação:** criar futuramente um `supabase-schema-v1.sql` consolidado para
instalações novas e manter as migrações apenas como histórico.

### Prioridade alta — pendências ainda possuem fontes legadas

Mesmo após a proteção da RC5.72, o frontend ainda contém adaptadores para:

- `listar_ajustes_admin`;
- `listar_pendencias_jornada_admin`;
- `listar_pendencias_retorno_admin`;
- `atualizar_pendencias_jornada_admin`.

O painel da RC5.72 filtra os resultados pela lista de funcionários ativos, o
que resolveu o caso do funcionário de homologação. Porém, a arquitetura ainda
não possui uma única RPC operacional consolidada instalada em todos os bancos.

**Recomendação:** na próxima refatoração, criar uma única RPC de resumo
operacional e remover gradualmente as consultas legadas do dashboard.

### Prioridade alta — funções antigas sem filtro de funcionário ativo

As versões históricas encontradas de:

- `listar_pendencias_jornada_admin`;
- `listar_pendencias_retorno_admin`;
- `listar_ajustes_admin`;

não possuem, em todas as versões, filtro explícito de `funcionarios.ativo`.

Isso explica por que uma pendência armazenada antes da desativação continuava
sendo retornada ao painel.

A RC5.72 possui uma proteção adicional no JavaScript e um SQL que resolve
pendências abertas de funcionários inativos.

### Prioridade média — competência fechada

As funções legadas de pendências não aplicam de forma uniforme o filtro de
competência fechada. Uma ocorrência antiga pode permanecer operacional mesmo
depois de o mês estar fechado, dependendo da função chamada.

### Prioridade média — funções `SECURITY DEFINER` acessíveis ao perfil `anon`

Existem funções de funcionário e contingência acessíveis ao perfil anônimo.
Isso é necessário para o login por matrícula/PIN, mas cada função precisa
validar internamente:

- token da sessão do funcionário;
- empresa;
- dispositivo autorizado quando aplicável;
- funcionário ativo;
- expiração da sessão.

A análise estática marcou essas funções para revisão. Isso não significa
automaticamente que exista uma vulnerabilidade; várias delas fazem validação
por token dentro do corpo da função.

### Prioridade média — leituras diretas de tabelas

Alguns módulos administrativos leem tabelas diretamente pelo cliente Supabase,
por exemplo `funcionarios`, `marcacoes` e `jornadas`. A segurança dessas leituras
depende integralmente das políticas RLS instaladas no banco real.

O roteiro de diagnóstico verifica:

- RLS habilitado;
- políticas existentes;
- grants por função;
- funções `SECURITY DEFINER`;
- permissões para `anon` e `authenticated`.

## Fluxo das pendências

```text
Marcações do dia
    ↓
atualizar_pendencias_jornada_admin()
    ↓
pendencias_jornada
    ↓
listar_pendencias_jornada_admin()
    ↓
database.js
    ↓
renderSmartDashboard()
    ↓
Card Pendências + Notificações
```

As solicitações de ajuste seguem outro fluxo:

```text
solicitacoes_ajuste
    ↓
listar_ajustes_admin()
    ↓
Página Ajustes
```

Esse desenho explica a divergência histórica entre painel e página Ajustes.

## Implementações incluídas na RC5.73

A RC5.73 adiciona documentação e ferramentas de diagnóstico, sem apagar nem
alterar dados automaticamente:

- `AUDITORIA-SQL-RC5.73.md`;
- `supabase-rc5-73-auditoria-somente-leitura.sql`;
- `supabase-rc5-73-consistencia-pendencias.sql`;
- `MAPA-RPCS-RC5.73.csv`;
- `INVENTARIO-FUNCOES-RC5.73.json`.

## Próxima etapa recomendada

Após executar os dois scripts de diagnóstico e guardar os resultados:

1. consolidar uma RPC operacional única;
2. retirar as RPCs legadas do dashboard;
3. criar uma baseline SQL para instalação limpa;
4. revisar as funções anônimas uma por uma;
5. testar RLS com usuário administrador, funcionário e sessão anônima;
6. validar fechamento, reabertura e pendências em competências históricas.
