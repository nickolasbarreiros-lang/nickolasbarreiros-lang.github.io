from pathlib import Path
import json,sys
root=Path(__file__).resolve().parents[1]
folder=root/'auditoria/macs-1.0'
sources=json.loads((folder/'fontes_verificadas_lote_5.json').read_text())['fontes']
byid={s['id']:s for s in sources}
errors=[]
for p in sorted(folder.glob('*-rastreabilidade.json')):
    r=json.loads(p.read_text())
    ids=r['fontes_verificadas_ids']
    if any(i not in byid for i in ids):errors.append(f'{p.name}: fonte sem cadastro')
    brazil=sum(byid[i]['tipo'].startswith('produtor') and byid[i]['pais']=='Brasil' for i in ids)
    if brazil!=r['produtores_brasileiros_com_recomendacao_documentada']:errors.append(f'{p.name}: contagem brasileira divergente')
    if r['status']=='validado' and brazil<25:errors.append(f'{p.name}: validação indevida: apenas {brazil} produtores brasileiros com evidência')
print(f'{len(list(folder.glob("*-rastreabilidade.json")))} espécies; {len(errors)} inconsistências; todas permanecem preliminares')
for e in errors:print('ERRO:',e)
sys.exit(bool(errors))
