document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos
  const botaoGenero = document.getElementById('botao-genero'); // Botão do gênero
  const imagemGenero = document.getElementById('genero-imagem'); // Imagem dentro do botão

  // Adicionando o evento de clique no botão
  botaoGenero.addEventListener('click', (event) => {
      event.preventDefault(); // Evita comportamento padrão do botão

      if (botaoGenero.classList.contains('genero-fe')) {
          // Se a classe atual for "genero-fe", troca para "genero-ma" e muda a imagem
          botaoGenero.classList.replace('genero-fe', 'genero-ma');
          imagemGenero.src = 'assets/img/male.png';
      } else {
          // Caso contrário, troca para "genero-fe" e volta a imagem
          botaoGenero.classList.replace('genero-ma', 'genero-fe');
          imagemGenero.src = 'assets/img/female.png';
      }
  });
});