#!/usr/bin/env python3
"""Confere sete métodos, pesos e fase sazonal do Catasetum, sem validar cultivo."""
from pathlib import Path
import json,sys
R=Path(__file__).resolve().parents[1]; A=R/'auditoria/macs-1.0'
S=['bulbophyllum-rothschildianum','bulbophyllum-sikkimense','bulbophyllum-miniatum','bulbophyllum-syciobulbon','catasetum-mattosianum']
MET={'placa-tronco','vaso-barro','vaso-plastico','vaso-plastico-vasado','cesto-madeira','arvore-viva','raizes-soltas'}
P={'compatibilidade_raizes':25,'equilibrio_hidrico':25,'aeracao_drenagem':20,'espaco_crescimento':10,'adaptacao_calor':10,'evidencia_documentada':10}
err=[]
for slug in S:
 d=json.loads((A/(slug+'.json')).read_text(encoding='utf-8'))
 comp=d['comparativo_quantitativo_exploratorio']
 if comp['pesos_percentuais']!=P:err.append(slug+': pesos incorretos')
 methods=comp['metodos']
 if {x['asset'] for x in methods}!=MET or len(methods)!=7:err.append(slug+': faltam métodos')
 for m in methods:
  n=m['notas_hipoteticas_0_a_5']
  if set(n)!=set(P) or any(not isinstance(v,(int,float)) or not 0<=v<=5 for v in n.values()):err.append(slug+': notas inválidas');continue
  calc=round(sum(n[k]*P[k] for k in P)/100,2)
  if abs(calc-m['indice_exploratorio_0_a_5'])>0.001:err.append(slug+': índice inconsistente '+m['asset'])
  if m['status']!='HIPOTESE_NAO_VALIDADA':err.append(slug+': pontuação promovida indevidamente')
 if d['status']=='validado':err.append(slug+': validação não autorizada')
 if not d.get('controle_de_incerteza',{}).get('sem_substituicao_automatica_das_estrelas'):err.append(slug+': risco de substituir estrelas')
 if slug=='catasetum-mattosianum':
  saz=d.get('avaliacao_sazonal_exploratoria',{});m=saz.get('metodos',[])
  if len(m)!=7 or {x['asset'] for x in m}!=MET:err.append('Catasetum: sazonalidade incompleta')
  for x in m:
   if not all(k in x for k in ('crescimento_ativo','repouso','apto_sem_condicoes')):err.append('Catasetum: fases incompletas')
print('Fichas verificadas:',len(S),'| métodos gerais:',len(S)*7,'| métodos sazonais:',7,'| erros:',len(err))
for e in err:print('ERRO:',e)
sys.exit(bool(err))
