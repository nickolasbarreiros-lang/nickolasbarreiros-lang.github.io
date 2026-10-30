#!/usr/bin/env python3
import json,sys
from pathlib import Path
r=Path(__file__).resolve().parents[1]
folder=r/'auditoria/macs-1.0/adendos'
files=sorted(folder.glob('*.json'))
errors=[]
if len(files)<2: errors.append('Esperados dois registros JSON')
for p in files:
 d=json.loads(p.read_text(encoding='utf-8'))
 for key in ('especie','fontes','implicacoes','arquitetura_rizoma','regime_sazonal','status'):
  if not d.get(key): errors.append(f'{p.name}: campo ausente {key}')
 if d.get('status')=='validado':errors.append(f'{p.name}: adendo parcial não pode ser validado')
 for f in d.get('fontes',[]):
  if not all(f.get(k) for k in ('instituicao','url','alcance','evidencia')):errors.append(f'{p.name}: fonte incompleta')
print(f'Adendos conferidos: {len(files)}; erros: {len(errors)}')
for e in errors:print('ERRO:',e)
sys.exit(bool(errors))
