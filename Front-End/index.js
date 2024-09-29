const form = document.getElementById('formulario');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
        nome: formData.get('name'),
        email: formData.get('email'),
        telefone: formData.get('phone')
    };

    try {
        const response = await fetch('http://localhost:8080/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const message = await response.text();
            showMessage('Dados enviados com sucesso: ' + message, 'certo.png');
        } else {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        } 
    } catch (error) {
        showMessage('Erro: ' + error.message, 'errado.png');
    }
});

function showMessage(text, image) {
    // Oculta o formulário
    form.classList.add('hidden');

    // Define a mensagem
    messageDiv.innerHTML = `<p>${text}</p>`;

    // Cria e adiciona a imagem
    const img = document.createElement('img');
    img.src = `assets/${image}`; // Define o caminho da imagem
    img.alt = image.includes('certo') ? 'Sucesso' : 'Erro'; // Define texto alternativo
    img.style.display = 'block'; // Garante que a imagem seja exibida como bloco
    img.style.marginTop = '10px'; // Adiciona margem em cima da imagem
    img.style.margin = "0 auto";
    img.classList.add('cssanimation');
    img.classList.add('danceBottom');

    // Limpa o messageDiv antes de adicionar nova mensagem e imagem
    //messageDiv.innerHTML = ''; // Limpa qualquer conteúdo anterior
    messageDiv.appendChild(img); // Adiciona a imagem

    // Exibe a mensagem
    messageDiv.style.display = 'block'; // Garante que a mensagem seja visível

    // Aguarda 6 segundos antes de reiniciar o formulário
    setTimeout(() => {
        form.reset();
        messageDiv.innerHTML = ''; // Limpa a mensagem e a imagem
        messageDiv.style.display = 'none'; // Oculta a mensagem
        form.classList.remove('hidden'); // Mostra o formulário novamente
    }, 4000);
}
