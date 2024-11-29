function calculateCompatibility() {
    // Obter os nomes do usuário
    const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, "");
    const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, "");
  
    if (!name1 || !name2) {
      document.getElementById("result").innerText = "Por favor, insira ambos os nomes.";
      return;
    }
  
    // Combinar os nomes e calcular as frequências das letras
    const combined = name1 + name2;
    const counts = {};
    for (const letter of combined) {
      counts[letter] = (counts[letter] || 0) + 1;
    }
  
    // Transformar as frequências em uma sequência numérica
    let numbers = Object.values(counts);
  
    // Somar os números extremos repetidamente
    while (numbers.length > 2) {
      const newNumbers = [];
      let i = 0, j = numbers.length - 1;
      while (i <= j) {
        newNumbers.push((numbers[i++] || 0) + (numbers[j--] || 0));
      }
      numbers = newNumbers;
    }
  
    // Número final da compatibilidade
    const compatibility = parseInt(numbers.join(""));
  
    // Garantir que o número fique entre 0 e 100
    const normalizedCompatibility = compatibility % 101;
  
    // Mostrar o resultado
    document.getElementById("result").innerText = `${normalizedCompatibility}`;
  }
  






function alterarGenero(botao) {
    const bloco = botao.closest('.bloco');
    const imagemGenero = bloco.querySelector('.genero-imagem');
    const botaoGenero = bloco.querySelector('.botao-genero');
    const input = bloco.querySelector('.name-input'); 

    // Alternar entre masculino e feminino
    if (botaoGenero.classList.contains('genero-fe')) {
        botaoGenero.classList.replace('genero-fe', 'genero-ma');
        imagemGenero.src = 'assets/img/male.png';
    } else {
        botaoGenero.classList.replace('genero-ma', 'genero-fe');
        imagemGenero.src = 'assets/img/female.png';
    }

    // Atualizar imagem automaticamente após mudar gênero
    atualizarImagem(bloco);
}

function atualizarImagem(bloco) {
    const input = bloco.querySelector('.name-input');
    const imagemPrincipal = bloco.querySelector('.imagem-principal');
    const botaoGenero = bloco.querySelector('.botao-genero');

    // Array de imagens para cada gênero
    const imagensMulher = [
        'assets/img/estatua-mulher1.png',
        'assets/img/estatua-mulher2.png',
        'assets/img/estatua-mulher3.png',
        'assets/img/estatua-mulher4.png',
    ];

    const imagensHomem = [
        'assets/img/estatua-homem1.png',
        'assets/img/estatua-homem2.png',
        'assets/img/estatua-homem3.png',
        'assets/img/estatua-homem4.png',
    ];

    // Determinar o conjunto de imagens com base no gênero atual
    const generoAtual = botaoGenero.classList.contains('genero-fe') ? 'feminino' : 'masculino';
    const imagens = generoAtual === 'feminino' ? imagensMulher : imagensHomem;

    // Alterar a imagem principal com base no texto
    const texto = input.value.trim().toLowerCase();
    const index = texto.length % imagens.length; // Seleciona uma imagem baseada no comprimento do texto
    imagemPrincipal.src = imagens[index];
}

// Adicionar evento para atualizar a imagem ao sair do campo de texto
document.querySelectorAll('.name-input').forEach((input) => {
    input.addEventListener('blur', function () {
        const bloco = input.closest('.bloco');
        atualizarImagem(bloco);
    });
});
