function experiencia(anos) {
        if (anosEstudo >= 0 && anosEstudo <= 1) {
          console.log("Inicante");
        } else if (anosEstudo >= 1 && anosEstudo <= 3) {
          console.log("Indermediário");
        } else if (anosEstudo >= 3 && anosEstudo <= 6) {
          console.log("Avançado");
        } else if (anosEstudo >= 7) {
          console.log("Jedi Master");
        }
      }
      var anosEstudo = 1;
      experiencia(anosEstudo);
      // De 0-1 ano: Iniciante
      // De 1-3 anos: Intermediário
      // De 3-6 anos: Avançado
      // De 7 acima: Jedi Master
