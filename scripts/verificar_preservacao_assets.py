#!/usr/bin/env python3
"""Impede remoção ou alteração de assets existentes em PRs."""
import json
import re
import subprocess
import sys
from pathlib import Path

ARQUIVO = 'js/biblioteca-cultivo-v4.js'

def extrair(texto):
    # O Node interpreta o módulo de verdade, inclusive perfis e strings.
    codigo = '''import {readFileSync} from 'node:fs';
const source=readFileSync(0,'utf8');
const url='data:text/javascript;base64,'+Buffer.from(source).toString('base64');
const m=await import(url);
console.log(JSON.stringify({biblioteca:m.bibliotecaCultivoV4,perfis:m.perfisVisuaisCultivoV4}));'''
    p = subprocess.run(['node','--input-type=module','-e',codigo],input=texto,text=True,capture_output=True)
    if p.returncode: raise ValueError('Falha ao analisar biblioteca: '+p.stderr)
    dados=json.loads(p.stdout)
    result={}
    for k,v in dados['biblioteca'].items(): result['biblioteca/'+k]=v
    for k,v in dados['perfis'].items():
        for a,b in v.get('assets',{}).items(): result[f'perfil/{k}/{a}']=b
    return result

def main():
    base=sys.argv[1] if len(sys.argv)>1 else 'HEAD^'
    try:
        anterior=subprocess.check_output(['git','show',f'{base}:{ARQUIVO}'],text=True)
        atual=Path(ARQUIVO).read_text(encoding='utf-8')
        old,new=extrair(anterior),extrair(atual)
    except (OSError,subprocess.CalledProcessError,ValueError) as e:
        print('ERRO ao verificar preservação:',e,file=sys.stderr);return 2
    falhas=[]
    for k,v in old.items():
        if k not in new: falhas.append(f'REMOVIDO: {k}')
        elif v.get('imagem') != new[k].get('imagem'):
            falhas.append(f'IMAGEM ALTERADA: {k}: {v.get("imagem")} -> {new[k].get("imagem")}')
    if falhas:
        print('REPROVADO: assets anteriores removidos ou imagens alteradas:')
        print('\n'.join(falhas));return 1
    print(f'APROVADO: {len(old)} assets anteriores preservados; {len(new)-len(old)} novos.')
    return 0
if __name__=='__main__': sys.exit(main())
