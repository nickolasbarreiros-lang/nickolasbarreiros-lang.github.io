#!/usr/bin/env python3
"""Cria ZIP só com arquivos novos/modificados entre dois commits Git.
Uso: python scripts/empacotar_alteracoes.py BASE HEAD [CAMINHO.zip]
Nunca inclui credenciais nem diretório .git; remoções são listadas, não executadas.
"""
from pathlib import Path
import subprocess,sys,zipfile,json
R=Path(__file__).resolve().parents[1]
base=sys.argv[1] if len(sys.argv)>1 else 'HEAD^'
head=sys.argv[2] if len(sys.argv)>2 else 'HEAD'
saida=Path(sys.argv[3]).resolve() if len(sys.argv)>3 else R/'Orquidario_Alteracoes.zip'
def git(*args):
 return subprocess.check_output(['git',*args],cwd=R,text=True)
try:
 linhas=git('diff','--name-status','--no-renames',base,head).splitlines()
except subprocess.CalledProcessError as e:
 print('Não foi possível comparar os commits:',e,file=sys.stderr);sys.exit(2)
alterados=[];removidos=[];ignorados=[]
for linha in linhas:
 status,_,nome=linha.partition('\t')
 nome=nome.replace('\\','/')
 p=Path(nome)
 if (not p.parts or p.is_absolute() or '..' in p.parts or p.parts[0] in ('.git','.env') or any(part.startswith('.env') for part in p.parts) or any(s in nome.lower() for s in ('secret','credential','token'))):
  ignorados.append(nome);continue
 if status.startswith('D'):removidos.append(nome);continue
 if not (R/p).is_file():ignorados.append(nome);continue
 alterados.append(nome)
saida.parent.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(saida,'w',zipfile.ZIP_DEFLATED) as z:
 for nome in alterados:z.write(R/nome,nome)
 z.writestr('ALTERACOES_MANIFESTO.json',json.dumps({'base':base,'head':head,'arquivos_incluidos':alterados,'arquivos_removidos_manual':removidos,'ignorados':ignorados},ensure_ascii=False,indent=2))
print(f'ZIP: {saida} | alterados: {len(alterados)} | removidos (somente relatório): {len(removidos)}')
