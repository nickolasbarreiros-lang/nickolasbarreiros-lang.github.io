#!/usr/bin/env python3
"""Confere integridade do registro de layouts, sem alterar fichas ou inferir ausência."""
import json, pathlib, sys
root = pathlib.Path(__file__).resolve().parent
reg = json.loads((root / 'inventario_layouts_v4_9.json').read_text(encoding='utf-8'))
errors=[]
for f in reg['fichas']:
    p=root/f['arquivo']
    if not p.is_file(): errors.append('Arquivo não encontrado: '+str(p))
    a,b=f['layout_cultivo_ideal'],f['layout_substrato_ideal']
    if f['novo_layout'] is True and (a is not True or b is not True):
        errors.append('Marcação inconsistente: '+f['arquivo'])
print('Fichas no registro:',len(reg['fichas']))
print('Ambos layouts marcados:',sum(f['novo_layout'] is True for f in reg['fichas']))
print('Não verificadas:',sum(f['novo_layout'] is None for f in reg['fichas']))
for e in errors: print('ERRO:',e)
sys.exit(1 if errors else 0)
