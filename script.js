// 1. Validação do Formulário de Chamado
const form = document.getElementById('formChamado');
const mensagemRetorno = document.getElementById('mensagemRetorno');

if (form) {
    form.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Impede a página de recarregar

        const nome = document.getElementById('nome').value.trim();
        const setor = document.getElementById('setor').value.trim();
        const urgencia = document.getElementById('urgencia').value;
        const descricao = document.getElementById('descricao').value.trim();

        mensagemRetorno.classList.remove('oculto', 'sucesso', 'erro');

        if (!nome || !setor || !urgencia || !descricao) {
            mensagemRetorno.classList.add('erro');
            mensagemRetorno.textContent = 'Por favor, preencha todos os campos antes de enviar.';
            return;
        }

        // Gera um número de protocolo aleatório
        const protocolo = Math.floor(1000 + Math.random() * 9000);

        mensagemRetorno.classList.add('sucesso');
        mensagemRetorno.innerHTML = `Chamado <strong>#${protocolo}</strong> aberto com sucesso para <strong>${nome}</strong> (Urgência: ${urgencia}). Nossa equipe atenderá em breve!`;
        
        form.reset(); // Limpa os campos
    });
}

// 2. Interação de Clique no FAQ (Acordeão)
const perguntas = document.querySelectorAll('.faq-pergunta');

perguntas.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const resposta = botao.nextElementSibling;
        resposta.classList.toggle('oculto');
    });
});
