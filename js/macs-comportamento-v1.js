// MACS 1.2: estimativas ordinais, não medições físicas.
export const coeficientes = {
  "casca-pinus": [
    3,
    4,
    4,
    2
  ],
  "carvao-vegetal": [
    1,
    5,
    5,
    1
  ],
  "casca-macadamia": [
    2,
    5,
    4,
    1
  ],
  "esfagno": [
    5,
    2,
    1,
    4
  ],
  "chips-coco": [
    4,
    4,
    3,
    2
  ],
  "fibra-coco": [
    4,
    3,
    2,
    3
  ],
  "casca-arroz-carbonizada": [
    2,
    4,
    4,
    2
  ],
  "terra-vegetal": [
    4,
    1,
    2,
    5
  ],
  "composto-organico": [
    4,
    1,
    2,
    5
  ],
  "brita": [
    1,
    5,
    5,
    1
  ],
  "argila-expandida": [
    2,
    5,
    4,
    1
  ],
  "pedra-pomes": [
    3,
    5,
    4,
    1
  ],
  "perlita": [
    2,
    5,
    4,
    1
  ],
  "vermiculita": [
    5,
    2,
    2,
    4
  ],
  "areia-grossa": [
    2,
    2,
    3,
    3
  ]
};
export function calcularMistura(itens) {
 if (!Array.isArray(itens) || !itens.length) throw new Error("Receita vazia");
 const pares = itens.map(({asset,proporcao}) => {
 const p = typeof proporcao === "number" ? proporcao : Number(String(proporcao).replace(/%$/, ""));
 if (!Object.hasOwn(coeficientes,asset) || !Number.isFinite(p) || p<=0 || p>100) throw new Error("Componente inválido: "+asset);
 return [asset,p];
 });
 if(new Set(pares.map(x=>x[0])).size!==pares.length || Math.abs(pares.reduce((s,x)=>s+x[1],0)-100)>1e-8) throw new Error("Receita duplicada ou total diferente de 100");
 return [0,1,2,3].map(j=>Math.round(pares.reduce((s,[a,p])=>s+coeficientes[a][j]*p/100,0)*100)/100);
}
