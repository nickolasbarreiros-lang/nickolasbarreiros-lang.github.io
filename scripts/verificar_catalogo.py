#!/usr/bin/env python3
"""Auditoria de catálogo: python scripts/verificar_catalogo.py [--atualizar]"""
from pathlib import Path
import re,json,sys,argparse
ROOT=Path(__file__).resolve().parents[1]
DIR=ROOT/'dados/orquideas'
INDEX=DIR/'index.js'
MANIFEST=ROOT/'catalogo-manifesto.json'
def main():
 p=argparse.ArgumentParser();p.add_argument('--atualizar',action='store_true',help='Atualiza o manifesto APÓS confirmar novas fichas e índice');args=p.parse_args()
 if not INDEX.exists():sys.exit('ERRO: index.js não encontrado')
 s=INDEX.read_text(encoding='utf-8')
 pairs=re.findall(r'import\s*\{\s*([\w$]+)\s*\}\s*from\s*["\']\./([^"\']+)["\']',s)
 imports=[file for _,file in pairs]
 section=s.split('export const orquideas = [',1)
 if len(section)!=2:sys.exit('ERRO: array orquideas não encontrado')
 array=section[1].split('];',1)[0]
 members=re.findall(r'\b[A-Za-z_$][\w$]*\b',re.sub(r'//[^\n]*','',array))
 vars=[v for v,_ in pairs]
 disk=sorted(p.name for p in DIR.glob('*.js') if p.name!='index.js')
 issues=[]
 for name,values in [('importações',imports),('variáveis importadas',vars),('itens no array',members)]:
  dup=sorted({x for x in values if values.count(x)>1})
  if dup:issues.append(f'{name} duplicadas: {dup}')
 missing=sorted(set(imports)-set(disk));unlisted=sorted(set(disk)-set(imports))
 if missing:issues.append('Arquivos importados AUSENTES: '+', '.join(missing))
 if unlisted:issues.append('Arquivos sem importação: '+', '.join(unlisted))
 if set(vars)!=set(members):issues.append('Diferença entre variáveis importadas e array: '+str(sorted(set(vars)^set(members))))
 for var,file in pairs:
  f=DIR/file
  if f.exists():
   content=f.read_text(encoding='utf-8')
   if not re.search(r'export\s+(?:const|let|var)\s+'+re.escape(var)+r'\b',content):issues.append(f'Exportação não encontrada: {file} => {var}')
 if MANIFEST.exists():
  m=json.loads(MANIFEST.read_text(encoding='utf-8'))
  if not args.atualizar:
   if len(imports)!=m['quantidade_esperada']:issues.append(f'CONTAGEM ALTERADA: índice={len(imports)}, esperado={m["quantidade_esperada"]}')
   if set(imports)!=set(m['arquivos_esperados']):issues.append('ÍNDICE DIFERE DO MANIFESTO: ausentes='+str(sorted(set(m['arquivos_esperados'])-set(imports)))+'; novos='+str(sorted(set(imports)-set(m['arquivos_esperados']))))
 else:issues.append('Manifesto ausente')
 print(f'Fichas no índice: {len(imports)} | Arquivos de ficha no disco: {len(disk)} | Itens do array: {len(members)}')
 if issues:
  for issue in issues:print('FALHA:',issue)
  print('REPROVADO: não publique até corrigir.');return 1
 if args.atualizar:
  m={'schema':1,'catalogo':'Orquidário Digital','quantidade_esperada':len(imports),'arquivos_esperados':sorted(imports),'observacao':'Atualizado pelo verificador; faça commit junto com nova ficha e index.js.'}
  MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
  print('Manifesto atualizado e validado.')
 print('APROVADO: índice, arquivos, exportações e manifesto coerentes.');return 0
if __name__=='__main__':sys.exit(main())
