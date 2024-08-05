const formularioContato = document.querySelector('.contato form');

formularioContato.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || telefone === '' || mensagem === '') {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    // Enviar dados para o servidor (exemplo usando fetch API)
    fetch('https://example.com/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.sucesso) {
                alert('Mensagem enviada com sucesso!');
                formularioContato.reset();
            } else {
                alert('Erro ao enviar mensagem.');
            }
        })
        .catch(error => {
            console.error(error);
            alert('Erro inesperado.');
        });
});
