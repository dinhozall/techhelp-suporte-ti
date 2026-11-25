// 1. Lógica do Formulário (só roda se estiver na página Abrir Chamado)
const form = document.getElementById('formChamado');
const mensagemRetorno = document.getElementById('mensagemRetorno');
const assuntoEmail = document.getElementById('assuntoEmail');
const numeroProtocolo = document.getElementById('numeroProtocolo');

if (form) {
    form.addEventListener('submit', function () {
        const nome = document.getElementById('nome').value.trim();
        const urgencia = document.getElementById('urgencia').value;
        const numeroChamado = `#${Math.floor(1000 + Math.random() * 9000)}`;

        assuntoEmail.value = `Novo Chamado ${numeroChamado} - Urgência: ${urgencia}`;
        numeroProtocolo.value = numeroChamado;

        setTimeout(() => {
            mensagemRetorno.classList.remove('oculto', 'erro');
            mensagemRetorno.classList.add('sucesso');
            mensagemRetorno.textContent = `Chamado ${numeroChamado} aberto com sucesso para ${nome} (Urgência: ${urgencia}). Nossa equipe atenderá em breve!`;
            form.reset();
        }, 600);
    });
}

// 2. Lógica do FAQ (abre e fecha as respostas ao clicar na pergunta)
const perguntasFaq = document.querySelectorAll('.faq-pergunta');

perguntasFaq.forEach((botao) => {
    botao.addEventListener('click', () => {
        const resposta = botao.nextElementSibling;
        if (resposta) {
            resposta.classList.toggle('oculto');
        }
    });
});

