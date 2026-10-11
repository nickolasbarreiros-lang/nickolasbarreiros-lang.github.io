#!/usr/bin/env python3
"""Audita imagens personalizadas de cultivo ideal. Sem dependências externas.
Uso: python scripts/verificar_fotos_cultivo.py
     python scripts/verificar_fotos_cultivo.py --atualizar  # após cadastrar nova imagem
"""
import argparse, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / 'cultivo-ideal-manifesto.json'
BIBLIOTECA = ROOT / 'js/biblioteca-cultivo-v4.js'
FICHAS = ROOT / 'dados/orquideas'
IMAGENS = ROOT / 'imagens/cultivo-v4'

def biblioteca(texto):
    # Cada item com 'imagem' no objeto da biblioteca (não inclui perfis genéricos).
    bloco = texto.split('export const bibliotecaCultivoV4 =', 1)
    if len(bloco) != 2: raise ValueError('bibliotecaCultivoV4 não encontrada')
    bloco = bloco[1].split('export const perfisVisuaisCultivoV4', 1)[0]
    return dict(re.findall(r'["\']([^"\'\n]+)["\']\s*:\s*\{[^{}]*?\bimagem\s*:\s*["\']([^"\']+)', bloco, re.S))

def asset_principal(texto):
    # Exige uma forma de cultivo explicitamente recomendada, não uma ocorrência incidental.
    match = re.search(r'formasCultivo\s*:\s*\{', texto)
    if not match: return None
    trecho = texto[match.end():]
    lista = re.search(r'metodos\s*:\s*\[', trecho)
    if not lista: return None
    obj = re.search(r'\{[^{}]*\}', trecho[lista.end():], re.S)
    if not obj: return None
    m = re.search(r'\basset\s*:\s*["\']([^"\']+)', obj.group())
    return m.group(1) if m else None

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--atualizar', action='store_true', help='Registra novas fotos personalizadas válidas; não apaga registros antigos')
    args = p.parse_args()
    erros = []
    for arquivo in (MANIFEST, BIBLIOTECA):
        if not arquivo.is_file(): erros.append('Arquivo obrigatório ausente: '+str(arquivo.relative_to(ROOT)))
    if not FICHAS.is_dir(): erros.append('Pasta de fichas ausente: dados/orquideas')
    if erros:
        for e in erros: print('FALHA:',e)
        return 1
    try:
        m = json.loads(MANIFEST.read_text(encoding='utf-8'))
        lib = biblioteca(BIBLIOTECA.read_text(encoding='utf-8'))
    except (ValueError, OSError) as e:
        print('FALHA: erro de leitura:',e); return 1
    fotos = m.get('fotos',{})
    if not isinstance(fotos,dict): print('FALHA: manifesto inválido'); return 1
    candidatas = {}
    fichas = sorted(FICHAS.glob('*.js'))
    for ficha in fichas:
        if ficha.name=='index.js': continue
        slug=ficha.stem
        texto=ficha.read_text(encoding='utf-8')
        principal=asset_principal(texto)
        # Chaves personalizadas seguem o slug da espécie; imagens genéricas não entram no manifesto.
        especificos=set(re.findall(r'\basset\s*:\s*["\']('+re.escape(slug)+r'[^"\']*)["\']',texto))
        if principal and principal.startswith(slug): especificos.add(principal)
        for asset in especificos:
            if asset not in lib:
                erros.append(f'{slug}: asset personalizado "{asset}" não cadastrado na biblioteca')
            else:
                if principal == asset: candidatas[slug]={'asset':asset,'arquivo':lib[asset]}
                elif slug not in candidatas: candidatas[slug]={'asset':asset,'arquivo':lib[asset]}
    # Registro é obrigatório; nunca perder uma imagem antiga ao atualizar.
    for slug,registro in fotos.items():
        asset=registro.get('asset'); caminho=registro.get('arquivo','')
        if slug not in {f.stem for f in fichas}:
            erros.append(f'{slug}: ficha ausente (imagem personalizada ainda registrada)'); continue
        if asset not in lib: erros.append(f'{slug}: chave "{asset}" ausente da biblioteca')
        elif lib[asset] != caminho: erros.append(f'{slug}: caminho diferente: manifesto={caminho}; biblioteca={lib[asset]}')
        principal=asset_principal((FICHAS/(slug+'.js')).read_text(encoding='utf-8'))
        if principal != asset: erros.append(f'{slug}: a forma recomendada usa "{principal}", mas deveria usar "{asset}" (fallback genérico)')
        if not caminho.startswith('imagens/cultivo-v4/') or '..' in Path(caminho).parts:
            erros.append(f'{slug}: caminho de imagem inválido: {caminho}'); continue
        arq=ROOT/caminho
        if not arq.is_file(): erros.append(f'{slug}: FOTO AUSENTE na pasta: {caminho}')
        elif arq.stat().st_size==0: erros.append(f'{slug}: FOTO VAZIA: {caminho}')
        elif arq.suffix.lower() not in ('.webp','.jpg','.jpeg','.png','.avif'): erros.append(f'{slug}: formato de imagem não reconhecido: {caminho}')
    novas={slug:reg for slug,reg in candidatas.items() if slug not in fotos}
    if novas and not args.atualizar:
        erros.append('FOTOS PERSONALIZADAS NÃO REGISTRADAS no manifesto: '+', '.join(sorted(novas)))
    # Mesmo no modo atualizar, não permitir que foto nova inexistente seja registrada.
    for slug,reg in novas.items():
        if reg['arquivo'] != lib.get(reg['asset']): erros.append(f'{slug}: referência inconsistente')
        if not (ROOT/reg['arquivo']).is_file(): erros.append(f'{slug}: foto nova não existe: {reg["arquivo"]}')
    print(f'Fichas examinadas: {len(fichas)-int((FICHAS/"index.js").exists())} | Fotos personalizadas registradas: {len(fotos)} | Novas detectadas: {len(novas)}')
    if erros:
        for e in erros: print('FALHA:',e)
        print('REPROVADO: corrija antes de publicar.'); return 1
    if args.atualizar and novas:
        fotos.update(novas)
        m['fotos']=dict(sorted(fotos.items()))
        MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
        print('Manifesto atualizado: '+', '.join(sorted(novas)))
    print('APROVADO: referências, fichas, manifesto e imagens personalizadas coerentes.'); return 0

if __name__=='__main__': sys.exit(main())
