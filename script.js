document
  .getElementById("formulario-aluno")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value) / 100;
    const sexo = document.getElementById("sexo").value;
    const experiencia = document.getElementById("experiencia").value;
    const dias = parseInt(document.getElementById("dias").value);
    const nivel = document.getElementById("nivel").value;
    const objetivo = document.getElementById("objetivo").value;

    if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    function classificarIMC(imc) {
      if (imc < 18.5) return "Abaixo do peso";
      if (imc < 24.9) return "Peso normal";
      if (imc < 29.9) return "Sobrepeso";
      if (imc < 34.9) return "Obesidade grau 1";
      if (imc < 39.9) return "Obesidade grau 2";
      return "Obesidade grau 3";
    }

    const classificacaoIMC = classificarIMC(imc);

    const treinos = {
      homem: {
        emagrecer: {
          A: ["Corda 3x10 min", "Flexões 4x15", "Abdominais 3x20"],
          B: ["Corrida 5km", "Burpees 4x12", "Prancha 3x1 min"],
          C: [
            "Bicicleta 30 min",
            "Agachamentos com peso 4x12",
            "Elevação lateral 3x15",
          ],
          D: ["HIIT 20 min", "Barra fixa 3x10", "Levantamento terra 4x10"],
          E: ["Natação 30 min", "Boxe 20 min", "Rosca direta 3x15"],
        },
        ganhar_massa: {
          A: [
            "Supino reto 4x10",
            "Supino inclinado 4x10",
            "Tríceps corda 4x12",
          ],
          B: ["Remada curvada 4x10", "Barra fixa 4x8", "Rosca direta 4x12"],
          C: [
            "Agachamento livre 4x10",
            "Leg press 4x12",
            "Cadeira extensora 4x15",
          ],
          D: [
            "Desenvolvimento militar 4x10",
            "Elevação lateral 4x12",
            "Trapézio com halteres 4x15",
          ],
          E: ["Levantamento terra 4x8", "Stiff 4x10", "Flexora 4x12"],
        },
      },
      mulher: {
        emagrecer: {
          A: ["Esteira 30 min", "Abdominais 4x20", "Passadas 3x20"],
          B: [
            "Bicicleta 40 min",
            "Agachamento com peso 3x12",
            "Prancha 3x1 min",
          ],
          C: [
            "HIIT 20 min",
            "Elevação lateral 3x15",
            "Stiff com halteres 3x10",
          ],
          D: ["Corrida 5km", "Corda 10 min", "Boxe 20 min"],
          E: [
            "Pilates 30 min",
            "Abdominais oblíquos 3x15",
            "Cadeira adutora 4x15",
          ],
        },
        ganhar_massa: {
          A: [
            "Agachamento livre 4x10",
            "Leg press 4x12",
            "Passadas com peso 4x12",
          ],
          B: ["Remada curvada 4x12", "Pulldown 4x10", "Bíceps martelo 4x12"],
          C: [
            "Supino inclinado 4x10",
            "Desenvolvimento Arnold 4x12",
            "Elevação lateral 4x15",
          ],
          D: ["Stiff 4x12", "Cadeira extensora 4x15", "Flexora 4x15"],
          E: ["Panturrilha 4x20", "Sumô com halteres 4x12", "Abdominais 3x20"],
        },
      },
    };

    const treinoSelecionado = treinos[sexo][objetivo];
    let diasTreino = [];

    if (dias === 5) diasTreino = ["A", "B", "C", "D", "E"];
    else if (dias === 4) diasTreino = ["A", "B", "C", "D"];
    else if (dias === 3) diasTreino = ["A", "B", "C"];

    const botoes = diasTreino
      .map(
        (dia) => `
            <div class="treino-container">
                <button class="btn-treino" data-dia="${dia}">Treino ${dia}</button>
                <div id="treino-${dia}" class="treino-detalhes">
                    <h4>Treino ${dia}:</h4>
                    <ul>${treinoSelecionado[dia]
                      .map((exercicio) => `<li>${exercicio}</li>`)
                      .join("")}</ul>
                </div>
            </div>
        `
      )
      .join("");

    const resultado = `
        <h2>Ficha de Treino de ${nome}</h2>
        <p><strong>IMC:</strong> ${imc} (${classificacaoIMC})</p>
        <p><strong>Sexo:</strong> ${sexo === "homem" ? "Homem" : "Mulher"}</p>
        <p><strong>Já treinou antes:</strong> ${
          experiencia === "sim" ? "Sim" : "Não"
        }</p>
        <p><strong>Dias de treino:</strong> ${dias}</p>
        <p><strong>Nível:</strong> ${nivel}</p>
        <p><strong>Objetivo:</strong> ${
          objetivo === "emagrecer" ? "Emagrecer" : "Ganhar massa"
        }</p>
        <div class="treino-botoes">${botoes}</div>
    `;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado;
    resultadoDiv.style.display = "block";

    document.querySelectorAll(".btn-treino").forEach((botao) => {
      botao.addEventListener("click", () => {
        const dia = botao.getAttribute("data-dia");
        const detalhes = document.getElementById(`treino-${dia}`);
        if (detalhes.style.display === "block") {
          detalhes.style.display = "none";
        } else {
          document
            .querySelectorAll(".treino-detalhes")
            .forEach((el) => (el.style.display = "none"));
          detalhes.style.display = "block";
        }
      });
    });
  });
