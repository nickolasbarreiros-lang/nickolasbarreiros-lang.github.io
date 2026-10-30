#!/usr/bin/env python3
"""Compara projeto atual com ZIP de referência e empacota somente arquivos alterados.
Uso: python scripts/empacotar_desde_zip.py PACOTE_ANTERIOR.zip NOVO_DIFERENCIAL.zip
Apenas diferenças em arquivos presentes no projeto são incluídas; remoções vão ao manifesto.
"""
from pathlib import Path, PurePosixPath
import argparse,hashlib,json,sys,zipfile
ROOT=Path(__file__).resolve().parents[1]
IGNORE={'.git','__pycache__','.venv','node_modules'}
def ignorar(nome):
 p=PurePosixPath(nome)
 return (not p.parts or p.is_absolute() or '..' in p.parts or
  any(x in IGNORE or x.startswith('.env') for x in p.parts) or
  any(s in p.name.lower() for s in ('credential','secret','token')) or
  p.suffix.lower() in ('.key','.pem','.p12'))
def digest(data):return hashlib.sha256(data).hexdigest()
def main():
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('referencia',type=Path)
 parser.add_argument('saida',type=Path)
 args=parser.parse_args()
 if args.referencia.resolve()==args.saida.resolve():parser.error('A saída não pode substituir a referência')
 if not args.referencia.is_file():parser.error('ZIP de referência não encontrado')
 with zipfile.ZipFile(args.referencia) as z:
  itens={i.filename:i for i in z.infolist() if not i.is_dir() and not ignorar(i.filename)}
  # ZIPs antigos podem ter uma única pasta-raiz contendo o projeto.
  nomes=list(itens)
  pasta=nomes[0].split('/')[0]+'/' if nomes and all('/' in x and x.startswith(nomes[0].split('/')[0]+'/') for x in nomes) else ''
  anteriores={}
  for nome,i in itens.items():
   relativo=nome[len(pasta):] if pasta else nome
   if relativo and not ignorar(relativo):anteriores[relativo]=digest(z.read(i))
 atuais={}
 for p in ROOT.rglob('*'):
  if not p.is_file():continue
  rel=p.relative_to(ROOT).as_posix()
  if ignorar(rel) or p.resolve() in (args.referencia.resolve(),args.saida.resolve()):continue
  atuais[rel]=p
 alterados=sorted(k for k,p in atuais.items() if k not in anteriores or digest(p.read_bytes())!=anteriores[k])
 removidos=sorted(set(anteriores)-set(atuais))
 args.saida.parent.mkdir(parents=True,exist_ok=True)
 with zipfile.ZipFile(args.saida,'w',zipfile.ZIP_DEFLATED) as z:
  for nome in alterados:z.write(atuais[nome],nome)
  z.writestr('ALTERACOES_MANIFESTO.json',json.dumps({
   'referencia':args.referencia.name,'arquivos_incluidos':alterados,
   'removidos_somente_para_revisao':removidos,
   'aviso':'Nenhuma exclusão é aplicada automaticamente.'
  },ensure_ascii=False,indent=2))
 print(f'Incluídos: {len(alterados)} | removidos informados: {len(removidos)} | ZIP: {args.saida}')
 return 0
if __name__=='__main__':sys.exit(main())
