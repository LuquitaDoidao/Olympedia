function animarTitulo(elementoId, idiomas, maxCiclos) {
    const titulo = document.getElementById(elementoId); // O elemento que terá a animação

    let ciclos = 0;
    let indice = 0;

    // Função para mudar o texto gradualmente
    function mudarTitulo() {
        if (indice < idiomas.length) {
            titulo.textContent = idiomas[indice].lingua;
            setTimeout(() => {
                indice++;
                mudarTitulo();
            }, idiomas[indice].duracao);
        } else {
            ciclos++;
            if (ciclos < maxCiclos) {
                indice = 0; // Reinicia o ciclo
                mudarTitulo(); // Começa o próximo ciclo
            } else {
                titulo.textContent = idiomas[idiomas.length - 1].lingua; // Fixa no último idioma (Português)
            }
        }
    }
    mudarTitulo(); // Inicia a animação
}
