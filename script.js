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
          A: [
            "Supino reto: 4x12",
            "Supino inclinado com Halteres: 4x12-10",
            "Crucifixo maquina: 4x12-10",
            "Triceps corda: 4x12-10",
            "20 minutos de corrida moderada"
          ],
          B: [
            "Agachamento livre: 4x12-15",
            "Passada: 4x12 cada perna",
            "Elevação pélvica: 4x20",
            "Panturrilha no degrau: 4x15",
            "20 minutos de bike",
            ],
          C: [
            "Barra fixa: 4x até a falha",
            "Remada curvada: 4x10-12",
            "Pulldown na polia: 4x12",
            "Rosca direta com barra: 4x10-12",
            "Rosca martelo: 4x12"
          ],
          D: [
            "Kettlebell swing: 4x15",
            "Prancha dinâmica (trazer joelhos ao peito): 3 séries de 30s",
            "Flexão de braços: 4x10-12",
            "Corrida em sprint (100 metros): 6 repetições"
            ],
          E: [
            "Abdominais variados (prancha, bicicleta, infra): 4 séries",
            "Burpees: 3x15",
            "Burpees: 3x15",
            "HIIT na bicicleta ergométrica: 20 minutos"
          ],
        },
        ganhar_massa: {
          A: [
            "Supino reto com barra: 4x10-12",
            "Supino inclinado com halteres: 4x10-12",
            "Supino sentado maquina: 4x12",
            "Crucifixo maquina: 4x12-10",
            "Tríceps no pulley: 4x12",
            "Tríceps testa: 4x10-12",
          ],
          B: [
            "Remada alta: 4x10-12",
            "Remada curvada: 4x10-12",
            "Remada unilateral 4x10-12",
            "Pulldown na polia: 4x12",
            "Rosca direta com barra: 4x10-12",
            "Rosca martelo: 4x12"
          ],
          C: [
            "Panturrilha sentado: 4x10-12",
            "Agachamento livre: 4x8-10",
            "Leg press 45°: 4x10-12",
            "Cadeira extensora: 4x10-12",
            "Passada: 4 x Até a falha",
          ],
          D: [
            "Desenvolvimento com halteres: 4x10-12",
            "Elevação lateral: 4x12-15",
            "Elevação frontal: 4x12",
            "Encolhimento com halteres: 4x15-20",
            "Face pull: 4x12",
          ],
          E: [
            "Panturrilha em pé: 4x15",
            "Stiff com halteres: 4x10-12",
            "Cadeira Flexora: 4x10-12",
            "Bulgaro: 4x10-12",
            "Cadeira adutora: 4x10-12",
            ],
        },
      },
      mulher: {
        emagrecer: {
          A: [
            "Agachamento sumô: 4x12",
            "Passada: 3x12 cada perna",
            "Elevação pélvica com peso: 4x20",
            "Glúteo na polia: 3x12 cada perna",
            "HIIT (corrida intervalada): 15 minutos"
            ],
          B: [
            "Supino reto com halteres: 4x10-12",
            "Pulldown: 4x10-12",
            "Rosca martelo: 4x12",
            "Tríceps no pulley: 4x12",
            "20 minutos de esteira em inclinação",
          ],
          C: [
            "Prancha isométrica: 3 séries de 30s",
            "Agachamento com salto: 3x15",
            "Burpees: 3x12",
            "Corrida moderada: 15 minutos",
          ],
          D: [
            "Agachamento livre: 4x10-12",
            "Leg press: 4x12",
            "Stiff com halteres: 4x12",
            "Adutor e abdutor: 4x15",
            "10 minutos de HIIT"
          ],
          E: [
            "Abdominais (bicicleta, prancha, infra): 4 séries",
            "Jump squats: 3x12",
            "Passada com peso: 3x12",
            "25 minutos de corrida leve"
          ],
        },
        ganhar_massa: {
          A: [  
            "Agachamento livre: 4x10",
            "Passada com halteres: 4x12 cada perna",
            "Elevação pélvica com barra: 4x15-20",
            "Glúteo na polia: 4x12 cada perna",
            "Panturrilha: 4x12",
          ],
          B: [
            "Supino inclinado com halteres: 4x10-12",
            "Desenvolvimento com halteres: 4x10-12",
            "Pulldown na polia: 4x10-12",
            "Rosca direta com halteres: 4x12",
            "Tríceps no pulley: 4x12",
            ],
          C: [
            "Agachamento sumô: 4x10",
            "Leg press 45°: 4x12",
            "Extensora: 4x12-15",
            "Stiff com barra: 4x12",
            "Elevação pélvica: 4x20",
          ],
          D: [
            "Remada curvada: 4x12",
            "Elevação lateral: 4x12-15",
            "Barra fixa: 4x até a falha",
            "Face pull: 4x12",
            "Rosca martelo: 4x12",
            ],
          E: [
            "Cadeira adutora: 4x15",
            "Agachamento frontal: 4x10-12",
            "Stiff com halteres: 4x12",
            "15 minutos de HIIT na esteira",
            ],
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
