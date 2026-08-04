# RC5.68 — correção da desativação de funcionário

## Erro corrigido

O PostgreSQL retornava:

`column reference "funcionario_id" is ambiguous`

Isso ocorria porque a função retornava uma tabela com uma coluna chamada
`funcionario_id`, criando conflito com colunas homônimas usadas internamente.

## Alterações

- função reescrita para retornar `jsonb`;
- todas as referências de tabela receberam aliases explícitos;
- desativação com histórico preservado corrigida;
- desativação com reset corrigida;
- reativação corrigida;
- auditoria mantida;
- PIN Mestre continua obrigatório no reset;
- competência e dados do funcionário continuam isolados por empresa.

A execução do SQL RC5.68 é obrigatória.
