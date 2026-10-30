#!/usr/bin/env python3
"""Confere nomenclatura padronizada e assets das fichas marcadas com novo layout V4.9."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PADRAO = {
    "placa-tronco": "Placa / tronco",
    "vaso-barro": "Vaso de Barro",
    "vaso-plastico": "Vaso plástico",
    "vaso-plastico-vasado": "Vaso plástico vasado",
    "cesto-madeira": "Cachepô de Madeira",
    "arvore-viva": "Árvore viva",
    "raizes-soltas": "Raízes Soltas",
}
def categoria(nome, asset):
    t = (nome + " " + asset).lower()
    if any(x in t for x in ("raízes livres", "raizes livres", "raízes soltas", "raizes soltas", "suspensa")):
        return "raizes-soltas"
    if "árvore" in t or "arvore-viva" in t: return "arvore-viva"
    if any(x in t for x in ("cesto", "cachepô", "cachepo")): return "cesto-madeira"
    if any(x in t for x in ("placa", "tronco", "ripinha")): return "placa-tronco"
    if "barro" in t: return "vaso-barro"
    if "plástico" in t or "plastico" in t:
        return "vaso-plastico-vasado" if any(x in t for x in ("vasado", "perfurado", "furos")) else "vaso-plastico"
    return None

inventario = json.loads((ROOT / "inventario_layouts_v4_9.json").read_text(encoding="utf-8"))
biblioteca = (ROOT / "js/biblioteca-cultivo-v4.js").read_text(encoding="utf-8")
chaves = set(re.findall(r"^\s*\"([^\"]+)\"\s*:\s*\{", biblioteca, re.M))
erros = []
verificadas = 0
for item in inventario["fichas"]:
    if not item.get("novo_layout"): continue
    arquivo = ROOT / item["arquivo"]
    if not arquivo.is_file():
        erros.append(f"Arquivo ausente: {item['arquivo']}")
        continue
    texto = arquivo.read_text(encoding="utf-8")
    metodos = re.findall(
        r"[\"]?nome[\"]?\s*:\s*\"([^\"]+)\"\s*,\s*[\"]?asset[\"]?\s*:\s*\"([^\"]+)\"",
        texto
    )
    if not metodos:
        erros.append(f"{arquivo.name}: nenhum método de cultivo reconhecido")
    for nome, asset in metodos:
        tipo = categoria(nome, asset)
        if tipo is None or nome != PADRAO[tipo]:
            erros.append(f"{arquivo.name}: nome fora do padrão: {nome!r} (asset {asset})")
        if asset not in chaves:
            erros.append(f"{arquivo.name}: asset não cadastrado na biblioteca: {asset}")
    verificadas += 1
if 'nome: "Cachepô de Madeira"' not in biblioteca:
    erros.append("Biblioteca: nome de cesto-madeira não padronizado")
print(f"Fichas V4.9 verificadas: {verificadas}; inconsistências: {len(erros)}")
for erro in erros: print("FALHA:", erro)
sys.exit(1 if erros else 0)
