#!/usr/bin/env python3
"""Reconcilia fotos de cultivo ideal no repositório ATUAL, sem sobrescrever a biblioteca.
Uso: python scripts/corrigir_fotos_cultivo.py
     python scripts/verificar_fotos_cultivo.py
Revise `git diff` e faça commit apenas depois de ver APROVADO.
"""
from pathlib import Path
import json, re, subprocess, sys
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
from verificar_fotos_cultivo import biblioteca, asset_principal, main as verificar
LIB=ROOT/'js/biblioteca-cultivo-v4.js'
FICHAS=ROOT/'dados/orquideas'
MAN=ROOT/'cultivo-ideal-manifesto.json'
# Somente correções conhecidas, com caminhos candidatos confirmados por convenção.
ESPECIFICOS={
 'acianthera-auriculata': ('acianthera-auriculata-placa','imagens/cultivo-v4/acianthera-auriculata-placa.webp'),
 'bifrenaria-verboonenii': ('bifrenaria-verboonenii-vaso-barro','imagens/cultivo-v4/especies/bifrenaria-verboonenii/vaso-barro.webp'),
 'pinalia-elata': ('pinalia-elata-vaso-vasado','imagens/cultivo-v4/especies/pinalia-elata/vaso-vasado.webp'),
}

def principal_corrigir(texto, atual, novo):
    pos=re.search(r'formasCultivo\s*:\s*\{',texto)
    if not pos: return texto,False
    met=re.search(r'metodos\s*:\s*\[',texto[pos.end():])
    if not met: return texto,False
    inicio=pos.end()+met.end()
    obj=re.search(r'\{[^{}]*\}',texto[inicio:],re.S)
    if not obj: return texto,False
    ini=inicio+obj.start();fim=inicio+obj.end()
    novoobj,n=re.subn(r'(\basset\s*:\s*["\'])'+re.escape(atual)+r'(["\'])',lambda m:m.group(1)+novo+m.group(2),texto[ini:fim],count=1)
    if n: return texto[:ini]+novoobj+texto[fim:],True
    return texto,False

def main():
    if not LIB.is_file() or not MAN.is_file():
        print('FALHA: biblioteca ou manifesto ausente');return 1
    texto=LIB.read_text(encoding='utf8'); registros=biblioteca(texto)
    faltantes=[]; mudancas=[]
    for slug,(chave,caminho) in ESPECIFICOS.items():
        ficha=FICHAS/(slug+'.js')
        if not ficha.is_file():
            faltantes.append(f'{slug}: ficha ausente');continue
        # Não criar entradas para arquivos que não existem de fato.
        if chave not in registros:
            if not (ROOT/caminho).is_file():
                faltantes.append(f'{slug}: imagem não localizada em {caminho}; cadastro NÃO inventado')
                continue
            # Adiciona chave ao primeiro objeto exportado, preservando todo o restante.
            match=re.search(r'export const bibliotecaCultivoV4\s*=\s*\{',texto)
            if not match:
                faltantes.append('Objeto bibliotecaCultivoV4 ausente');continue
            item='\n  '+json.dumps(chave,ensure_ascii=False)+': { nome: '+json.dumps(slug.replace('-',' ').title(),ensure_ascii=False)+', imagem: '+json.dumps(caminho,ensure_ascii=False)+' },'
            texto=texto[:match.end()]+item+texto[match.end():]
            registros[chave]=caminho;mudancas.append('Biblioteca: '+chave)
        else:
            if not (ROOT/registros[chave]).is_file():
                faltantes.append(f'{slug}: imagem cadastrada mas arquivo ausente: {registros[chave]}');continue
        if slug=='acianthera-auriculata':
            original=ficha.read_text(encoding='utf8'); principal=asset_principal(original)
            if principal!='acianthera-auriculata-placa':
                atualizado,ok=principal_corrigir(original,principal or 'placa-tronco',chave)
                if ok: ficha.write_text(atualizado,encoding='utf8');mudancas.append('Ficha: '+slug)
                else: faltantes.append(f'{slug}: não foi possível alterar o asset principal (encontrado: {principal})')
    if texto!=LIB.read_text(encoding='utf8'): LIB.write_text(texto,encoding='utf8')
    # Atualização do manifesto é feita somente depois de confirmar que cada arquivo existe.
    manifesto=json.loads(MAN.read_text(encoding='utf8'))
    fotos=manifesto.setdefault('fotos',{})
    registros=biblioteca(texto)
    for ficha in sorted(FICHAS.glob('*.js')):
        if ficha.name=='index.js':continue
        slug=ficha.stem; conteudo=ficha.read_text(encoding='utf8')
        chaves=set(re.findall(r'\basset\s*:\s*["\']('+re.escape(slug)+r'[^"\']*)["\']',conteudo))
        principal=asset_principal(conteudo)
        if principal and principal.startswith(slug):chaves.add(principal)
        validas=[(a,registros[a]) for a in sorted(chaves) if a in registros and (ROOT/registros[a]).is_file()]
        if slug not in fotos and validas:
            preferida=next(((a,p) for a,p in validas if a==principal),validas[0])
            fotos[slug]={'asset':preferida[0],'arquivo':preferida[1]};mudancas.append('Manifesto: '+slug)
    manifesto['fotos']=dict(sorted(fotos.items()))
    MAN.write_text(json.dumps(manifesto,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    for m in mudancas:print('CORRIGIDO:',m)
    for m in faltantes:print('PENDENTE:',m)
    print('\nConferência final:')
    codigo=verificar()
    return 1 if faltantes or codigo else 0
if __name__=='__main__':sys.exit(main())
