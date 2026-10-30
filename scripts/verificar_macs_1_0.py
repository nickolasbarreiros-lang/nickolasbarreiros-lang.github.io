#!/usr/bin/env python3
"""MACS 1.0: confere fichas e impede validações sem evidência."""
import json, re, sys
from pathlib import Path
R=Path(__file__).resolve().parents[1]
A=R/'auditoria/macs-1.0'
nomes={'placa-tronco':'Placa / tronco','vaso-barro':'Vaso de Barro','vaso-plastico':'Vaso plástico','vaso-plastico-vasado':'Vaso plástico vasado','cesto-madeira':'Cachepô de Madeira','arvore-viva':'Árvore viva','raizes-soltas':'Raízes Soltas'}
pesos={'compatibilidade_raizes','equilibrio_hidrico','aeracao_drenagem','espaco_crescimento','adaptacao_calor','evidencia_documentada'}
falhas=[];total=0
for arquivo in sorted(A.glob('*.json')):
 try: d=json.loads(arquivo.read_text(encoding='utf-8'))
 except (OSError,ValueError) as e: falhas.append(f'{arquivo.name}: JSON inválido: {e}');continue
 # Outros JSON da pasta são documentos auxiliares, não fichas.
 if not isinstance(d,dict) or not all(k in d for k in ('especie','arquivo','status','substrato')):continue
 total+=1;esp=d['especie'];ficha=R/d['arquivo']
 if not ficha.is_file():falhas.append(f'{esp}: arquivo de ficha ausente');continue
 texto=ficha.read_text(encoding='utf-8')
 if 'formasCultivo:' not in texto or 'substratoVisual:' not in texto:
  falhas.append(f'{esp}: layout V4.9 incompleto');continue
 bloco=texto.split('formasCultivo:',1)[1].split('substratoVisual:',1)[0]
 pares=re.findall(r'"nome": "([^"]+)",\s*"asset": "([^"]+)"',bloco)
 if len(pares)!=4:falhas.append(f'{esp}: número de opções visuais diferente de 4')
 for nome,asset in pares:
  if nomes.get(asset)!=nome:falhas.append(f'{esp}: asset ou nome inválido: {nome} / {asset}')
 sv=texto.split('substratoVisual:',1)[1].split('    substrato:',1)[0]
 m=re.search(r'"perfil":\s*(\[[^\]]+\])',sv,re.S)
 if not m:falhas.append(f'{esp}: sem perfil radicular')
 else:
  try:
   etiquetas=json.loads(m.group(1))
   if len(etiquetas)!=6 or any(len(t)>21 for t in etiquetas):falhas.append(f'{esp}: etiquetas fora do padrão')
  except ValueError:falhas.append(f'{esp}: etiquetas inválidas')
 sub=d.get('substrato',{});comp=sub.get('composicao',[])
 if not comp or sum(x.get('percentual',0) for x in comp)!=100:falhas.append(f'{esp}: composição != 100%')
 if 'pedra-pomes' in str(comp).lower():falhas.append(f'{esp}: pedra-pomes proibida')
 br=d.get('produtores_brasileiros',{});regs=br.get('registros',[])
 if br.get('consultados')!=len(regs):falhas.append(f'{esp}: contagem de fontes divergente')
 if len(set(x.get('nome','').casefold() for x in regs))!=len(regs):falhas.append(f'{esp}: produtores duplicados')
 if d['status']=='validado':
  if len(regs)<25:falhas.append(f'{esp}: menos de 25 produtores documentados')
  if not d.get('fontes_botanicas'):falhas.append(f'{esp}: faltam fontes botânicas')
  if not d.get('perfil_radicular_hidrico'):falhas.append(f'{esp}: perfil técnico ausente')
  av=d.get('avaliacao_montagens',{})
  if not isinstance(av,dict) or set(av)!=set(nomes):falhas.append(f'{esp}: não pontuou sete métodos')
  else:
   for metodo,notas in av.items():
    if set(notas.get('notas',{}))!=pesos:falhas.append(f'{esp}: notas incompletas: {metodo}')
  if not sub.get('justificativa'):falhas.append(f'{esp}: falta justificativa')
 print(f'{esp}: {d["status"]} | produtores brasileiros: {len(regs)}')
if not total:falhas.append('Nenhum registro de ficha encontrado')
print(f'Registros: {total} | erros: {len(falhas)}')
for e in falhas:print('ERRO:',e)
sys.exit(bool(falhas))
