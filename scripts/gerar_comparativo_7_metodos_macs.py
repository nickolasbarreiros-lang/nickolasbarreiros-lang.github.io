#!/usr/bin/env python3
"""Comparação exploratória, NÃO validada, dos sete métodos MACS 1.0."""
import json
from pathlib import Path
R=Path(__file__).resolve().parents[1]; A=R/'auditoria/macs-1.0'
MET=['placa-tronco','vaso-barro','vaso-plastico','vaso-plastico-vasado','cesto-madeira','arvore-viva','raizes-soltas']
NOMES=['Placa / tronco','Vaso de Barro','Vaso plástico','Vaso plástico vasado','Cachepô de Madeira','Árvore viva','Raízes Soltas']
PESOS={'compatibilidade_raizes':25,'equilibrio_hidrico':25,'aeracao_drenagem':20,'espaco_crescimento':10,'adaptacao_calor':10,'evidencia_documentada':10}
# Julgamentos conservadores de comportamento dos recipientes, NÃO medições de cultivo.
BASE={
 'placa-tronco':[4,2,5,5,2,1], 'vaso-barro':[3,3,4,3,3,1],
 'vaso-plastico':[3,5,2,2,3,1], 'vaso-plastico-vasado':[4,4,4,3,4,1],
 'cesto-madeira':[5,3,5,5,3,1], 'arvore-viva':[4,2,5,5,2,1],
 'raizes-soltas':[2,1,5,5,1,0]}
# Ajustes explícitos conforme hábito; pontos são hipóteses e não notas empíricas.
ADJ={
 'bulbophyllum-rothschildianum':{'placa-tronco':[0,0,0,0,0,1],'vaso-plastico':[0,0,0,0,0,1],'cesto-madeira':[0,0,0,0,0,1]},
 'bulbophyllum-sikkimense':{'vaso-plastico-vasado':[0,0,0,0,0,1],'cesto-madeira':[0,0,0,0,0,1]},
 'bulbophyllum-miniatum':{'placa-tronco':[0,0,0,0,0,1],'cesto-madeira':[0,0,0,0,0,1]},
 'bulbophyllum-syciobulbon':{'placa-tronco':[1,0,0,0,0,0],'vaso-plastico':[-1,0,0,-1,0,0],'cesto-madeira':[0,0,0,0,0,0]},
 'catasetum-mattosianum':{'placa-tronco':[0,-1,0,0,-1,1],'vaso-plastico':[1,0,0,0,0,1],'vaso-plastico-vasado':[0,0,0,0,0,1],'cesto-madeira':[0,-1,0,0,0,1]}}
RISCO={'placa-tronco':'Desidratação acelerada em calor e vento; regas frequentes obrigatórias.', 'vaso-barro':'Secagem mais rápida nas paredes; monitorar no calor.', 'vaso-plastico':'Encharcamento se a mistura for fina ou compactar.', 'vaso-plastico-vasado':'Secagem desigual em sol e vento; dimensionar regas.', 'cesto-madeira':'Secagem rápida em calor e vento; exige irrigação ajustada.', 'arvore-viva':'Água e luminosidade pouco controláveis; risco de desidratação.', 'raizes-soltas':'Risco elevado de desidratação, especialmente em clima quente.'}
for slug in ADJ:
 p=A/(slug+'.json'); d=json.loads(p.read_text(encoding='utf-8'))
 registros=[]
 for m,n in zip(MET,NOMES):
  valores=[max(0,min(5,a+b)) for a,b in zip(BASE[m],ADJ[slug].get(m,[0]*6))]
  notas=dict(zip(PESOS,valores))
  total=round(sum(notas[k]*w for k,w in PESOS.items())/100,2)
  risco=RISCO[m]
  if slug=='catasetum-mattosianum':risco+=' Exige manejo distinto no crescimento e no repouso; não é pontuação sazonal completa.'
  registros.append({'asset':m,'nome':n,'notas_hipoteticas_0_a_5':notas,'indice_exploratorio_0_a_5':total,'alerta':risco,'status':'HIPOTESE_NAO_VALIDADA'})
 d['comparativo_quantitativo_exploratorio']={'modelo':'MACS 1.0 - simulação de recipientes','status':'HIPOTESE_NAO_VALIDADA','pesos_percentuais':PESOS,'premissas':'Notas são julgamento de engenharia de cultivo por recipiente e hábito do gênero; não são observações da espécie nem resultados de ensaios. Não alteram estrelas da ficha.','ambiente':'clima quente de baixa altitude; irrigação manual ou controlada','metodos':registros,'limitacoes':['Ausência de 25 produtores brasileiros documentados por espécie','Morfologia radicular específica ainda insuficiente','Sem teste controlado das misturas e sem medição da secagem','Não substituir avaliação do risco sazonal e veto por dados empíricos']}
 d['ultima_revisao']='2026-10-30'
 p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print(d['especie'], ' | ', ', '.join(f'{r["asset"]}: {r["indice_exploratorio_0_a_5"]}' for r in registros))
