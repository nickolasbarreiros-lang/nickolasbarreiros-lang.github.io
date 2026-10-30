#!/usr/bin/env python3
"""Auditoria MACS 1.0. Bloqueia validação sem evidências; não altera fichas."""
from pathlib import Path
import json,sys
ROOT=Path(__file__).resolve().parents[1]
PASTA=ROOT/'auditoria/macs-1.0'
ARQUIVOS=sorted(PASTA.glob('*.json'))
PESOS={'compatibilidade_raizes':25,'equilibrio_hidrico':25,'aeracao_drenagem':20,'espaco_crescimento':10,'adaptacao_calor':10,'evidencia_documentada':10}
TIPOS={'placa-tronco','vaso-barro','vaso-plastico','vaso-plastico-vasado','cesto-madeira','arvore-viva','raizes-soltas'}
FALHAS=[]
if sum(PESOS.values())!=100:FALHAS.append('Pesos nao somam 100')
for arq in ARQUIVOS:
 d=json.loads(arq.read_text(encoding='utf-8'))
 especie=d.get('especie',arq.stem)
 if not (ROOT/d['arquivo']).is_file():FALHAS.append(f'{especie}: arquivo inexistente')
 registros=d['produtores_brasileiros']['registros']
 consultados=d['produtores_brasileiros']['consultados']
 if consultados!=len(registros):FALHAS.append(f'{especie}: numero de produtores nao corresponde aos registros')
 if d['status']=='validado':
  if consultados<25:FALHAS.append(f'{especie}: menos de 25 produtores pesquisados')
  if not d['fontes_botanicas']:FALHAS.append(f'{especie}: sem fontes botanicas')
  for reg in registros:
   if not reg.get('nome') or not reg.get('resultado') or not reg.get('url_ou_referencia'):
    FALHAS.append(f'{especie}: registro de pesquisa incompleto')
  if any(v is None for v in d['perfil_radicular_hidrico'].values()):FALHAS.append(f'{especie}: perfil incompleto')
  if set(d['avaliacao_montagens'])!=TIPOS:FALHAS.append(f'{especie}: faltam metodos de cultivo')
  else:
   for tipo,avaliacao in d['avaliacao_montagens'].items():
    if set(avaliacao.get('notas',{}))!=set(PESOS):FALHAS.append(f'{especie}: notas incompletas para {tipo}')
  comp=d['substrato']['composicao']
  if sum(x.get('percentual',0) for x in comp)!=100:FALHAS.append(f'{especie}: mistura nao soma 100%')
  if any('pedra-pomes' in str(x).lower() for x in comp):FALHAS.append(f'{especie}: pedra-pomes proibida')
  if not d['substrato']['justificativa']:FALHAS.append(f'{especie}: falta justificativa do substrato')
 print(f'{especie}: {d["status"]} | produtores {consultados} | confianca {d["confianca"]}')
print(f'Registros: {len(ARQUIVOS)}; falhas estruturais: {len(FALHAS)}')
for e in FALHAS:print('FALHA:',e)
sys.exit(bool(FALHAS))
