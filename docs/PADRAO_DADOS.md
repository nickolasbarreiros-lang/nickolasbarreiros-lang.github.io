# Padrão de dados atualmente compatível

Cada módulo individual deve exportar um objeto com os campos abaixo:

```javascript
export const nomeDaVariavel = {
    id: "slug-unico",
    nome: "Nome científico",
    genero: "Gênero",
    tipo: "Espécie botânica ou híbrido",
    dificuldade: "",
    caracteristicas: [],
    fotos: [],
    descricao: "",
    origem: "",
    regiao: "",
    habitat: "",
    clima: "",
    iluminacao: "",
    floracao: "",
    adubacao: "",
    rega: "",
    suporte: "",
    substrato: "",
    dica: "",
    mesesFloracao: [],
    avaliacoes: {
        cultivo: 0,
        floracao: 0,
        perfume: 0,
        luminosidade: 0,
        agua: 0,
        raridade: 0
    }
};
```

A estrutura não deve ser convertida para objetos aninhados enquanto a interface atual depender dos campos simples.
