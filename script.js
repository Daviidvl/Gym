document.getElementById('formulario-aluno').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value) / 100;
  const sexo = document.getElementById('sexo').value;
  const experiencia = document.getElementById('experiencia').value;
  const dias = parseInt(document.getElementById('dias').value);

  if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);

  const treinos = {
      homem: {
          A: ['Supino reto com barra 4x10-12', 'Supino inclinado com halteres 4x10-12','Crucifixo reto com halteres 4x10-12', 'Paralelas (ou supino fechado) 4x10-12', 'Tríceps testa com barra EZ 4x10-12', 'Corda no pulley (tríceps) 4x10-12'],
          B: ['Puxada frontal (pegada aberta) 4x10-12', 'Remada curvada com barra 4x10-12', 'Remada unilateral com halteres 4x10-12', 'Levantamento terra (leve para técnica) 4x10-12','Rosca direta com barra 4x10-12','Rosca alternada com halteres 4x10-12'],
          C: ['Agachamento livre 4x10-12', 'Leg press 45° 4x10-12', 'Cadeira extensora 4x10-12', 'Cadeira flexora 4x10-12', 'Stiff com barra 4x10-12', 'Elevação plantar sentado (panturrilha) 4x10-12'],
          D: ['Desenvolvimento militar com barra 4x10-12', 'Elevação lateral com halteres 4x10-12', 'Elevação frontal com halteres 4x10-12','Desenvolvimento Arnold 4x10-12','Encolhimento com halteres (trapézio) 4x10-12','Face pull (posterior de ombro) 4x10-12' ],
          E: ['Stiff 4x10-12', 'Cadeira flexora 4x10-12', 'Bulgaro 4x10-12', 'Cadeira adutora 4x10-12'],
      },
      mulher: {
          A: ['Agachamento', 'Leg Press', 'Stiff', 'Passada'],
          B: ['Pulldown', 'Remada Curvada', 'Rosca Alternada'],
          C: ['Supino Inclinado', 'Desenvolvimento', 'Elevação Lateral'],
          D: ['Cardio Leve', 'Step', 'Prancha'],
          E: ['HIIT', 'Abdominais', 'Alongamento'],
      },
  };

  const treinoSelecionado = sexo === 'homem' ? treinos.homem : treinos.mulher;
  const diasTreino = Object.keys(treinoSelecionado).slice(0, dias);

  const botoes = diasTreino
      .map(
          (dia) => `
          <div class="treino-container">
              <button class="btn-treino" data-dia="${dia}">Treino ${dia}</button>
              <div id="treino-${dia}" class="treino-detalhes">
                  <h4>Treino ${dia}:</h4>
                  <ul>${treinoSelecionado[dia].map((exercicio) => `<ul>${exercicio}</ul>`).join('')}</ul>
              </div>
          </div>
      `
      )
      .join('');

  const resultado = `
      <h2>Ficha de Treino de ${nome}</h2>
      <p><strong>IMC:</strong> ${imc}</p>
      <p><strong>Sexo:</strong> ${sexo === 'homem' ? 'Homem' : 'Mulher'}</p>
      <p><strong>Já treinou antes:</strong> ${experiencia === 'sim' ? 'Sim' : 'Não'}</p>
      <p><strong>Dias de treino:</strong> ${dias}</p>
      <div class="treino-botoes">${botoes}</div>
  `;

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = resultado;
  resultadoDiv.style.display = 'block';

  document.querySelectorAll('.btn-treino').forEach((botao) => {
      botao.addEventListener('click', () => {
          const dia = botao.getAttribute('data-dia');
          const detalhes = document.getElementById(`treino-${dia}`);
          if (detalhes.style.display === 'block') {
              detalhes.style.display = 'none';
          } else {
              document.querySelectorAll('.treino-detalhes').forEach((el) => (el.style.display = 'none'));
              detalhes.style.display = 'block';
          }
      });
  });
});

