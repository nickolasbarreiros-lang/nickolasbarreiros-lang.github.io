#!/usr/bin/env python3
from pathlib import Path
import json,re,sys
R=Path(__file__).resolve().parents[1]
slugs=['bulbophyllum-rothschildianum','bulbophyllum-sikkimense','bulbophyllum-miniatum','bulbophyllum-syciobulbon','catasetum-mattosianum']
nomes={'placa-tronco':'Placa / tronco','vaso-barro':'Vaso de Barro','vaso-plastico':'Vaso plástico','vaso-plastico-vasado':'Vaso plástico vasado','cesto-madeira':'Cachepô de Madeira','arvore-viva':'Árvore viva','raizes-soltas':'Raízes Soltas'}
errors=[]
for slug in slugs:
 p=R/'dados/orquideas'/f'{slug}.js';a=R/'auditoria/macs-1.0'/f'{slug}.json'
 if not p.exists() or not a.exists():errors.append(slug+': arquivo ausente');continue
 s=p.read_text();j=json.loads(a.read_text());start=s.index('formasCultivo:');end=s.index('substratoVisual:',start);methods=s[start:end]
 pairs=re.findall(r'"nome": "([^"]+)",\s*"asset": "([^"]+)"',methods)
 if len(pairs)!=4:errors.append(slug+': esperados 4 métodos')
 for name,asset in pairs:
  if nomes.get(asset)!=name:errors.append(slug+': nome/asset incoerentes: '+name+' / '+asset)
 sec=s[s.index('substratoVisual:'):s.index('    substrato:',s.index('substratoVisual:'))]
 m=re.search(r'"perfil":\s*\[([\s\S]*?)\]',sec)
 if not m:errors.append(slug+': sem perfil');continue
 labels=json.loads('['+m.group(1)+']')
 if len(labels)!=6 or any(len(t)>21 for t in labels):errors.append(slug+': etiquetas fora do padrão')
 comp=j['substrato']['composicao']
 if sum(x['percentual'] for x in comp)!=100:errors.append(slug+': receita != 100%')
 if any(x['asset']=='pedra-pomes' for x in comp):errors.append(slug+': pedra-pomes')
 if j['status']=='validado':errors.append(slug+': validação indevida')
 if j['produtores_brasileiros']['consultados']!=len(j['produtores_brasileiros']['registros']):errors.append(slug+': contagem incorreta')
 if len(j['avaliacao_montagens']['comparacao_qualitativa'])!=7:errors.append(slug+': métodos não comparados')
print('Fichas verificadas:',len(slugs),'| erros:',len(errors))
for e in errors:print('ERRO',e)
sys.exit(bool(errors))
