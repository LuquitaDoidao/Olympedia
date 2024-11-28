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



  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('name2');
    const imagem = document.getElementById('imagem-principal');

    // Lista de imagens disponíveis
    const imagensDisponiveis = [
        'assets/img/estatua-homem1.png',
        'assets/img/estatua-homem2.png',
        'assets/img/estatua-homem3.png',
        'assets/img/estatua-homem4.png',
        'assets/img/estatua-mulher1.png',
        'assets/img/estatua-mulher2.png',
        'assets/img/estatua-mulher3.png',
        'assets/img/estatua-mulher4.png'
    ];

    let timer; // Variável para armazenar o temporizador

    input.addEventListener('input', () => {
        clearTimeout(timer); // Reseta o temporizador sempre que o usuário digita
        timer = setTimeout(() => {
            const valor = input.value.trim();

            if (valor.length > 0) {
                // Escolhe uma imagem aleatória da lista
                const novaImagem = imagensDisponiveis[Math.floor(Math.random() * imagensDisponiveis.length)];
                imagem.src = novaImagem;
            } else {
                // Volta para a imagem padrão se o campo estiver vazio
                imagem.src = 'assets/img/estatua-indefinida.png';
            }
        }, 500); // Espera 500ms após o último caractere digitado
    });
});


  