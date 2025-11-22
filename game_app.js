document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos da página do jogo.
    const botaoCombate = document.getElementById('btn-iniciar-combate');
    const logCombate = document.getElementById('log-combate');

    /**
     * Simula a rolagem de um dado de 20 lados.
     * @returns {number} Um número inteiro entre 1 e 20.
     */
    function rolarD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    /**
     * Inicia uma rodada de combate, rola o D20 e atualiza o log com o resultado.
     */
    function iniciarCombate() {
        const rolagem = rolarD20();
        
        let resultado = `>> ⚔️ Desafio Tático Iniciado! Rolando D20... Resultado: <strong>${rolagem}</strong>.<br>`;

        if (rolagem === 1) {
            resultado += `<span class="log-falha">[🔥 1 (FALHA CRÍTICA)]</span> Sua arma falha. A Poção explode. O perigo aumenta! (Regra da Pág. 31)`;
        } else if (rolagem === 20) {
            resultado += `<span class="log-sucesso-critico">[✨ 20 (SUCESSO CRÍTICO)]</span> O destino sorri! A Fera é neutralizada. Vitória imediata! (Regra da Pág. 31)`;
        } else if (rolagem >= 12) {
             resultado += `[✅ SUCESSO]: Sua estratégia foi eficaz. Objetivo alcançado com êxito.`;
        } else {
             resultado += `[❌ FRACASSO]: A fera é mais astuta. Ação falhada.`;
        }
        
        logCombate.innerHTML += `<div class="log-entry">${resultado}</div>`;
        logCombate.scrollTop = logCombate.scrollHeight; // Mantém o scroll no final
    }

    // Adiciona o gatilho de evento ao botão, seguindo as boas práticas.
    botaoCombate.addEventListener('click', iniciarCombate);
});