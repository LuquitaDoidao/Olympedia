let generoAtual = 'feminino'; // Variável para rastrear o gênero atual (padrão: feminino)

// Função para alternar o gênero
function alterarGenero() {
    const botaoGenero = document.getElementById('botao-genero');
    const imagemGenero = document.getElementById('genero-imagem');

    // Alternar entre masculino e feminino
    if (botaoGenero.classList.contains('genero-fe')) {
        botaoGenero.classList.replace('genero-fe', 'genero-ma');
        imagemGenero.src = 'assets/img/male.png';
        generoAtual = 'masculino';
    } else {
        botaoGenero.classList.replace('genero-ma', 'genero-fe');
        imagemGenero.src = 'assets/img/female.png';
        generoAtual = 'feminino';
    }
}

// Função para alterar a imagem principal com base no texto do input
function atualizarImagem() {
    const input = document.getElementById('name2');
    const imagemPrincipal = document.getElementById('imagem-principal');

    // Array de imagens para cada gênero
    const imagensMulher = [
        'assets/img/estatua-mulher1.png',
        'assets/img/estatua-mulher2.png',
        'assets/img/estatua-mulher3.png',
        'assets/img/estatua-mulher4.png'
    ];

    const imagensHomem = [
        'assets/img/estatua-homem1.png',
        'assets/img/estatua-homem2.png',
        'assets/img/estatua-homem3.png',
        'assets/img/estatua-homem4.png'
    ];

    // Determinar qual conjunto de imagens usar com base no gênero atual
    const imagens = generoAtual === 'feminino' ? imagensMulher : imagensHomem;

    // Alterar a imagem principal com base no texto (simulação simples)
    const texto = input.value.trim().toLowerCase();
    const index = texto.length % imagens.length; // Seleciona uma imagem baseada no comprimento do texto
    imagemPrincipal.src = imagens[index];
}

// Adicionar evento para atualizar a imagem enquanto o usuário digita
document.getElementById('name2').addEventListener('input', atualizarImagem);
