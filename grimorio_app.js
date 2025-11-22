document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o container onde os cards do grimório serão inseridos.
    const grimorioLista = document.getElementById('grimorio-lista');
    // Seleciona a caixa de busca da página do grimório.
    const caixaBuscaGrimorio = document.getElementById('grimorio-busca');

    /**
     * Renderiza os cards de resultado na tela.
     * Esta função é uma cópia da que existe em script.js, adaptada para o grimório.
     * @param {Array<Object>} resultados - Um array de objetos de dados para exibir.
     */
    const renderizarResultados = (resultados) => {
        // Usa map para criar um array de strings HTML e join para uni-las em uma única string.
        // Isso é mais performático do que adicionar ao innerHTML dentro de um loop.
        const cardsHTML = resultados.map(item => `
            <div class="item-resultado">
                <img src="${item.imagemUrl}" alt="Imagem de ${item.titulo}">
                <h2>${item.titulo}</h2>
                <p class="descricao-meta">${item.descricao}</p> 
                <p class="tags-meta">Tags: ${item.tags.join(', ')}</p>
            </div>
        `).join('');

        grimorioLista.innerHTML = cardsHTML;
    };
    
    // --- Funcionalidade de Histórico de Busca (Copiada de script.js) ---
    const MAX_HISTORICO = 5; // Define o número máximo de itens no histórico

    /**
     * Adiciona um termo ao histórico no localStorage.
     * @param {string} termoBusca - O termo a ser adicionado ao histórico.
     */
    const adicionarAoHistorico = (termoBusca) => {
        const termo = termoBusca.trim();
        if (!termo) return; // Não adiciona termos vazios

        let historico = JSON.parse(localStorage.getItem('historicoBusca')) || [];
        // Remove o termo se ele já existir para movê-lo para o início
        historico = historico.filter(item => item.toLowerCase() !== termo.toLowerCase());
        // Adiciona o novo termo no início do array
        historico.unshift(termo);

        // Limita o tamanho do histórico
        if (historico.length > MAX_HISTORICO) {
            historico.pop();
        }

        localStorage.setItem('historicoBusca', JSON.stringify(historico));
    };

    /**
     * Filtra os dados do grimório com base no termo de busca e renderiza os resultados.
     */
    const filtrarGrimorio = () => {
        const termoBusca = caixaBuscaGrimorio.value.toLowerCase().trim();

        // Se a busca estiver vazia, mostra todos os itens novamente.
        if (!termoBusca) {
            renderizarResultados(acervoArcano);
            return;
        }

        const resultadosFiltrados = acervoArcano.filter(item => {
            const noTitulo = item.titulo.toLowerCase().includes(termoBusca);
            const naDescricao = item.descricao.toLowerCase().includes(termoBusca);
            const nasTags = item.tags.some(tag => tag.toLowerCase().includes(termoBusca));
            return noTitulo || naDescricao || nasTags;
        });

        renderizarResultados(resultadosFiltrados);
        adicionarAoHistorico(termoBusca); // Salva o termo pesquisado no histórico compartilhado
    };

    // Chama a função imediatamente ao carregar a página, passando todos os 'dados'.
    renderizarResultados(acervoArcano);

    // Adiciona um gatilho para filtrar o grimório em tempo real enquanto o usuário digita.
    caixaBuscaGrimorio.addEventListener('input', filtrarGrimorio);
});