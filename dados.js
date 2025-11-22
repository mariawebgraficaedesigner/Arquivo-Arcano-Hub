/**
 * Acervo Arcano: A fonte de dados principal para todo o universo de Vorlag.
 * Cada objeto representa um registro no grimório.
 * 
 * MELHORIA: A variável foi renomeada de 'dados' para 'acervoArcano' para maior clareza semântica.
 * MELHORIA: A propriedade 'link' foi renomeada para 'imagemUrl' para ser mais descritiva.
 * MELHORIA: A propriedade 'tags' foi transformada de uma string para um array de strings,
 *            facilitando a manipulação e a criação de filtros no futuro.
 */
const acervoArcano = [
    // --- Registros com Arte Dedicada ---
    {
        titulo: 'Dragão Vermelho Ancestral',
        descricao: 'Uma força da natureza, suas escamas são duras como diamante e seu sopro incendeia exércitos inteiros.',
        tags: ['criatura', 'dragão', 'fogo', 'escamas', 'monstro'],
        imagemUrl: 'imagens/dragao.jpg'
    },
    {
        titulo: 'Sentinela dos Ossos',
        descricao: 'Um guerreiro antigo que se recusa a descansar. Sua armadura enferrujada ainda protege uma lealdade que transcende a morte.',
        tags: ['criatura', 'morto-vivo', 'esqueleto', 'guerreiro', 'dungeon'],
        imagemUrl: 'imagens/esqueleto.jpg'
    },
    {
        titulo: 'Lobisomem da Lua Negra',
        descricao: 'A fúria Lycan: uma maldição viva que caça sob a luz das estrelas.',
        tags: ['criatura', 'besta', 'lobisomem', 'maldição', 'noite'],
        imagemUrl: 'imagens/lobisomem.jpg'
    },
    {
        titulo: 'Espada Longa Rúnica',
        descricao: 'Uma lâmina de aço frio gravada com runas antigas que brilham com uma luz azul pulsante.',
        tags: ['item mágico', 'arma', 'espada', 'runas', 'combate'],
        imagemUrl: 'imagens/espada.jpg'
    },
    {
        titulo: 'Poção de Cura Maior',
        descricao: 'O Elixir da Vida Ardente: cura imediata com o preço de uma dívida de vitalidade.',
        tags: ['item mágico', 'poção', 'cura', 'alquimia'],
        imagemUrl: 'imagens/pocao.jpg'
    },
    {
        titulo: 'Amuleto do Sangue Real',
        descricao: 'O colar que não aceita medo. Instrumento de poder e dominação, pavimentando o caminho para a tirania.',
        tags: ['item mágico', 'amuleto', 'joia', 'proteção'],
        imagemUrl: 'imagens/amuleto.jpg'
    },
    {
        titulo: 'Ruínas do Pico da Tempestade',
        descricao: 'O castelo desconectado do fluxo do tempo, onde os ecos temporais do último banquete do Rei Valerius persistem.',
        tags: ['lugar', 'cenário', 'castelo', 'ruínas', 'história'],
        imagemUrl: 'imagens/castelo.jpg'
    },
    {
        titulo: 'Floresta do Véu Roxo',
        descricao: 'Um bosque onde a neblina tem cor e vontade própria. Árvores gigantescas escondem segredos arcanos.',
        tags: ['lugar', 'cenário', 'floresta', 'magia', 'natureza'],
        imagemUrl: 'imagens/floresta.jpg'
    },

    // --- Registros com Arte Genérica (Placeholder) ---
    {
        titulo: 'Kraken, o Terror Abissal',
        descricao: 'Adormecido nas profundezas onde a luz não ousa tocar. Seus tentáculos podem arrastar reinos inteiros.',
        tags: ['criatura', 'mar', 'abissal', 'colossal'],
        imagemUrl: 'https://pollinations.ai/p/kraken%20sky%20kraken?width=600&height=400'
    },
    {
        titulo: 'Golem de Obsidiana',
        descricao: 'Um servo sem alma, nascido da fúria de um vulcão e animado por runas proibidas.',
        tags: ['criatura', 'construto', 'elemental', 'terra', 'magia negra'],
        imagemUrl: 'https://pollinations.ai/p/Golem%20sky%20Golem?width=600&height=400'
    },
    {
        titulo: 'Orbe da Profecia',
        descricao: 'Dentro deste cristal, futuros possíveis dançam como fumaça, cobrando um alto preço da sanidade do usuário.',
        tags: ['item mágico', 'orbe', 'adivinhação', 'futuro'],
        imagemUrl: 'https://pollinations.ai/p/Orbe%20sky%20Orbe?width=600&height=400'
    }
];