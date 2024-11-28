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
    document.getElementById("result").innerText = `A compatibilidade entre vocês é: ${normalizedCompatibility}%!`;
  }
  