document.addEventListener("DOMContentLoaded", function () {
  class Quiz {
    constructor(perguntas) {
      this.perguntas = perguntas;
      this.indice = 0;
      this.respostas = [];

      this.container = document.getElementById("quiz-area");
      this.resultadoEl = document.getElementById("result");
      this.botao = document.getElementById("startBtn");

      this.container.className = "quiz-wrapper";

      this.botao.addEventListener("click", () => this.mostrarPergunta());
    }

    mostrarPergunta() {
      this.resultadoEl.innerHTML = "";
      this.botao.style.display = "none";
      this.container.innerHTML = "";

      const atual = this.perguntas[this.indice];

      const perguntaEl = document.createElement("p");
      perguntaEl.textContent = `${this.indice + 1}. ${atual.question}`;
      perguntaEl.className = "quiz-question";
      this.container.appendChild(perguntaEl);

      atual.answers.forEach((resposta) => {
        const botao = document.createElement("button");
        botao.textContent = resposta.text;
        botao.className = "quiz-answer-btn";
        botao.onclick = () => this.selecionar(resposta.type);
        this.container.appendChild(botao);
      });
    }

    selecionar(tipo) {
      this.respostas.push(tipo);
      this.indice++;

      if (this.indice < this.perguntas.length) {
        this.mostrarPergunta();
      } else {
        this.mostrarResultado();
      }
    }

    mostrarResultado() {
      this.container.innerHTML = "";
      this.resultadoEl.innerHTML = "";

      const contagem = {};

      this.respostas.forEach((tipo) => {
        contagem[tipo] = (contagem[tipo] || 0) + 1;
      });

      let maisEscolhido = "";
      let maior = 0;

      for (let tipo in contagem) {
        if (contagem[tipo] > maior) {
          maior = contagem[tipo];
          maisEscolhido = tipo;
        }
      }

      const mensagens = {
        Martelo: "Você é forte, direto e resolve no impacto.",
        "Chave de fenda": "Você é preciso, técnico e detalhista.",
        Alicate: "Você é versátil e resolve qualquer parada.",
        Serrote: "Você é paciente, persistente e eficiente.",
        Trena: "Você é planejador, estratégico e organizado."
      };

      const imagens = {
        Martelo: "../../assets/ferramentas/martelo.png",
        "Chave de fenda": "../../assets/ferramentas/chave-de-fenda.png",
        Alicate: "../../assets/ferramentas/alicate.png",
        Serrote: "../../assets/ferramentas/serrote.png",
        Trena: "../../assets/ferramentas/trena.png"
      };

      this.resultadoEl.className = "quiz-result";
      this.resultadoEl.innerHTML = `
        <strong>${maisEscolhido}</strong><br>
        ${mensagens[maisEscolhido]}
      `;

      const img = document.createElement("img");
      img.src = imagens[maisEscolhido];
      img.alt = maisEscolhido;
      this.resultadoEl.appendChild(img);

      const botaoRefazer = document.createElement("button");
      botaoRefazer.textContent = "Refazer Quiz";
      botaoRefazer.className = "quiz-refazer-btn";

      botaoRefazer.onclick = () => {
        this.indice = 0;
        this.respostas = [];
        this.resultadoEl.innerHTML = "";
        this.container.innerHTML = "";

        // Reexibe botão de iniciar e centraliza scroll
        this.botao.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      this.resultadoEl.appendChild(botaoRefazer);
    }
  }

  const perguntas = [
    {
      question: "Como você costuma resolver problemas?",
      answers: [
        { text: "Vou direto ao ponto.", type: "Martelo" },
        { text: "Analiso antes de agir.", type: "Chave de fenda" },
        { text: "Improviso com o que tenho.", type: "Alicate" },
        { text: "Resolvo com paciência.", type: "Serrote" },
        { text: "Planejo tudo antes.", type: "Trena" }
      ]
    },
    {
      question: "Você prefere trabalhar como:",
      answers: [
        { text: "Líder.", type: "Martelo" },
        { text: "Especialista técnico.", type: "Chave de fenda" },
        { text: "Ajudante geral.", type: "Alicate" },
        { text: "Resolutor paciente.", type: "Serrote" },
        { text: "Organizador de processos.", type: "Trena" }
      ]
    },
    {
      question: "Como você reage a mudanças?",
      answers: [
        { text: "Respondo com firmeza.", type: "Martelo" },
        { text: "Me ajusto com cuidado.", type: "Chave de fenda" },
        { text: "Improviso com o que tenho.", type: "Alicate" },
        { text: "Vou superando aos poucos.", type: "Serrote" },
        { text: "Reavalio e mudo o plano.", type: "Trena" }
      ]
    },
    {
      question: "O que mais valorizam em você?",
      answers: [
        { text: "Determinação.", type: "Martelo" },
        { text: "Precisão.", type: "Chave de fenda" },
        { text: "Flexibilidade.", type: "Alicate" },
        { text: "Persistência.", type: "Serrote" },
        { text: "Organização.", type: "Trena" }
      ]
    },
    {
      question: "Você prefere:",
      answers: [
        { text: "Resolver rápido e com força.", type: "Martelo" },
        { text: "Resolver com perfeição técnica.", type: "Chave de fenda" },
        { text: "Resolver com criatividade.", type: "Alicate" },
        { text: "Resolver passo a passo.", type: "Serrote" },
        { text: "Resolver com estratégia.", type: "Trena" }
      ]
    },
    {
      question: "Qual dessas qualidades você mais admira?",
      answers: [
        { text: "Firmeza.", type: "Martelo" },
        { text: "Exatidão.", type: "Chave de fenda" },
        { text: "Versatilidade.", type: "Alicate" },
        { text: "Persistência.", type: "Serrote" },
        { text: "Planejamento.", type: "Trena" }
      ]
    },
    {
      question: "O que te deixa mais satisfeito após uma tarefa?",
      answers: [
        { text: "Terminar rápido e bem.", type: "Martelo" },
        { text: "Fazer tudo nos mínimos detalhes.", type: "Chave de fenda" },
        { text: "Resolver mesmo sem ter tudo à mão.", type: "Alicate" },
        { text: "Terminar apesar das dificuldades.", type: "Serrote" },
        { text: "Seguir o plano certinho.", type: "Trena" }
      ]
    },
    {
      question: "Qual dessas frases mais combina com você?",
      answers: [
        { text: "Não tem tempo ruim.", type: "Martelo" },
        { text: "Cada coisa no seu lugar.", type: "Chave de fenda" },
        { text: "Deixa comigo que eu resolvo.", type: "Alicate" },
        { text: "Um passo de cada vez.", type: "Serrote" },
        { text: "Tudo tem seu momento.", type: "Trena" }
      ]
    },
    {
      question: "Você se considera mais:",
      answers: [
        { text: "Direto e objetivo.", type: "Martelo" },
        { text: "Detalhista e técnico.", type: "Chave de fenda" },
        { text: "Esperto e improvisador.", type: "Alicate" },
        { text: "Paciente e constante.", type: "Serrote" },
        { text: "Organizado e lógico.", type: "Trena" }
      ]
    },
    {
      question: "Se fosse resolver um desafio em equipe, você:",
      answers: [
        { text: "Assume a liderança.", type: "Martelo" },
        { text: "Fica com a parte técnica.", type: "Chave de fenda" },
        { text: "Ajuda no que for preciso.", type: "Alicate" },
        { text: "Fica até o fim sem desistir.", type: "Serrote" },
        { text: "Organiza os passos da equipe.", type: "Trena" }
      ]
    }
  ];

  new Quiz(perguntas);
});
