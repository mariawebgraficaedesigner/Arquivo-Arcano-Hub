/*
 * O Coração do Arquivo Arcano - Script exclusivo para index.html (Hub Principal)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos da página principal (Hub)
    const caixaBusca = document.getElementById('caixa-busca');
    const botaoBusca = document.getElementById('botao-busca');
    const secaoResultados = document.getElementById('resultados-pesquisa');
    const historicoContainer = document.getElementById('historico-busca');
    const btnGlossario = document.querySelector('.btn-glossario');

    // Funções de Renderização e Busca (Mesmas que o grimorio_app.js usa para consistência)
    const renderizarResultados = (resultados) => {
        secaoResultados.innerHTML = ''; // Limpa os resultados antigos

        if (resultados.length === 0) {
            secaoResultados.innerHTML = `<div class="item-resultado"><p>Nada foi encontrado. Tente refinar sua busca.</p></div>`;
            return;
        }

        resultados.forEach(item => {
            const cardHTML = `
                <div class="item-resultado">
                    <img src="${item.imagemUrl}" alt="Imagem de ${item.titulo}">
                    <h2>
                        <a href="#" target="_blank">${item.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${item.descricao}</p>
                    <p class="tags-meta">Tags: ${item.tags.join(', ')}</p>
                </div>
            `;
            secaoResultados.innerHTML += cardHTML;
        });
    };

    // --- Funcionalidade de Histórico de Busca ---

    const MAX_HISTORICO = 5; // Define o número máximo de itens no histórico

    // Renderiza os botões do histórico na tela
    const renderizarHistorico = () => {
        historicoContainer.innerHTML = '';
        const historico = JSON.parse(localStorage.getItem('historicoBusca')) || [];
        
        if (historico.length > 0) {
            const tituloHistorico = document.createElement('span');
            tituloHistorico.textContent = 'Buscas recentes: ';
            historicoContainer.appendChild(tituloHistorico);
        }

        historico.forEach(termo => {
            const btnTermo = document.createElement('button');
            btnTermo.className = 'btn-historico';
            btnTermo.textContent = termo;
            btnTermo.onclick = () => {
                caixaBusca.value = termo;
                iniciarBusca();
            };
            historicoContainer.appendChild(btnTermo);
        });
    };

    // Adiciona um termo ao histórico no localStorage
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
        renderizarHistorico(); // Atualiza a exibição do histórico
    };

    // Função principal que inicia a busca
    const iniciarBusca = () => {
        const termoBusca = caixaBusca.value.toLowerCase().trim();

        if (!termoBusca) {
            secaoResultados.innerHTML = ''; 
            return;
        }

        const resultadosFiltrados = acervoArcano.filter(item => {
            const termo = termoBusca.replace(/[áãàâéêíóôõúü]/g, (c) => 'aaaaeeiooouu'[c.charCodeAt(0) - 224]); // Simplifica acentos
            
            const noTitulo = item.titulo.toLowerCase().includes(termo);
            const naDescricao = item.descricao.toLowerCase().includes(termo);
            const nasTags = item.tags.some(tag => tag.toLowerCase().includes(termo));
            
            return noTitulo || naDescricao || nasTags;
        });

        renderizarResultados(resultadosFiltrados);
        adicionarAoHistorico(caixaBusca.value); // Salva o termo pesquisado
    };

    // Adiciona os gatilhos para a busca
    // O Hub inicia VAZIO, mas começa a buscar em tempo real assim que se digita.
    
    // Conexão dos botões (FINAL FIX)
    botaoBusca.addEventListener('click', iniciarBusca); 
    caixaBusca.addEventListener('input', iniciarBusca); // Busca em tempo real

    // O botão 'Ver Grimório Completo' é um link HTML, não precisa de JS aqui.

    // Garante que o Hub Principal inicie VAZIO:
    secaoResultados.innerHTML = '';
    renderizarHistorico(); // Exibe o histórico ao carregar a página
});