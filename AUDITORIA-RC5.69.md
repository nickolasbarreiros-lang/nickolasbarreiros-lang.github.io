# RC5.69 — centralização das pendências

Criada a função SQL `dashboard_pendencias()` como fonte única para:

- card Pendências do painel;
- badge do menu;
- notificações administrativas;
- Central de pendências.

A função reúne:

- solicitações de ajuste;
- jornadas incompletas;
- retornos temporários abertos.

São ignorados automaticamente:

- funcionários inativos;
- funcionários desativados;
- funcionários sem acesso ao ponto;
- pendências resolvidas;
- competências fechadas;
- jornada incompleta que já possui solicitação equivalente.

A antiga tela Solicitações de ajuste foi transformada em Central de pendências.
