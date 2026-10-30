#!/usr/bin/env python3
"""Verifica integridade de fontes, escopo de evidência e contagem honesta."""
from pathlib import Path
import json,sys
R=Path(__file__).resolve().parents[1];A=R/'auditoria/macs-1.0';errs=[];total=0
for p in sorted(A.glob('*.json')):
 d=json.loads(p.read_text(encoding='utf-8'))
 if not isinstance(d,dict) or not {'especie','arquivo','substrato','status'}<=set(d):continue
 total+=1;es=d['especie'];seen=set()
 for entry in d.get('fontes_verificadas_adicionais_2026_10_30',[]):
  if not entry.get('url','').startswith('https://'):errs.append(f'{es}: URL inválida')
  if entry.get('alcance') not in {'especie','especie_sem_variedade','especie_botanica','genero'}:errs.append(f'{es}: alcance inválido')
  if entry['url'] in seen:errs.append(f'{es}: fonte duplicada')
  seen.add(entry['url'])
  if entry.get('conta_para_25_produtores_br') is not False:errs.append(f'{es}: contagem sem auditoria independente')
 if d['status']=='validado' and d.get('confianca_macs')=='preliminar':errs.append(f'{es}: validado mas confiança preliminar')
print(f'Fichas: {total}; inconsistências de evidência: {len(errs)}')
for e in errs:print('ERRO:',e)
sys.exit(bool(errs))
