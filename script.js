class Quiz {

    // Construtor do Quiz
    // @param {string} idResultado 
    // @param {string} idFormulario
    

    constructor(questions){
        this.questions = questions
        this.elements = {
            questionText = document.getElementById("")
            answerText = document.getElementById("")
            resultText = document.getElementById("")
        }

        // this.formulario = document.getElementById(idFormulario)
        // this.resultado = document.getElementById(idResultado)
        // this.ferramentas = ['Martelo', 'Chave de Fenda', 'Alicate', 'Serrote', 'Trena']
        // this.pontos = {}

        // this.resetarPontos();
        // this.formulario.addEventListener('submit', (evento) => this.calcularResultado(evento))

    }


    // function resetarPontos = () => {
    //     this.ferramentas.forEach((ferramenta) => (this.pontos[ferramenta] = 0))
    // };
    
    // function calcularResultado = (evento) =>{
    //  this.resetarPontos();
    // 
    // }
    // 
}


this.scores[type]++; 


const questions = [
    {
      question: "Como você costuma resolver problemas?",
      answers: [
        { text: "Vou direto ao ponto e resolvo logo.", type: "Martelo" },
        { text: "Analiso bem antes de agir.", type: "Chave de fenda" },
        { text: "Me viro com o que tenho em mãos.", type: "Alicate" },
        { text: "Vou cortando obstáculos aos poucos.", type: "Serrote" },
        { text: "Planejo cada passo antes de começar.", type: "Trena" }
      ]
    },
    {
      question: "Em um grupo, você é mais:",
      answers: [
        { text: "O que toma a frente.", type: "Martelo" },
        { text: "O que resolve os detalhes técnicos.", type: "Chave de fenda" },
        { text: "O que ajuda em várias frentes.", type: "Alicate" },
        { text: "O que vai eliminando os problemas um a um.", type: "Serrote" },
        { text: "O que organiza tudo.", type: "Trena" }
      ]
    },
    {
      question: "Como você reage a mudanças?",
      answers: [
        { text: "Respondo com firmeza.", type: "Martelo" },
        { text: "Me ajusto com cuidado.", type: "Chave de fenda" },
        { text: "Improviso com o que tenho.", type: "Alicate" },
        { text: "Vou superando, mesmo que devagar.", type: "Serrote" },
        { text: "Reavalio o plano e me adapto.", type: "Trena" }
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
        { text: "Resolver rápido, mesmo que com força.", type: "Martelo" },
        { text: "Resolver bem, mesmo que leve tempo.", type: "Chave de fenda" },
        { text: "Resolver de forma criativa.", type: "Alicate" },
        { text: "Resolver passo a passo, com paciência.", type: "Serrote" },
        { text: "Resolver com estratégia e controle.", type: "Trena" }
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
        { text: "Saber que fiz rápido e deu certo.", type: "Martelo" },
        { text: "Ver que tudo saiu nos mínimos detalhes.", type: "Chave de fenda" },
        { text: "Saber que me adaptei bem ao desafio.", type: "Alicate" },
        { text: "Ver que não desisti e terminei.", type: "Serrote" },
        { text: "Ver que segui o plano certinho.", type: "Trena" }
      ]
    },
    {
      question: "Qual dessas frases mais parece com você?",
      answers: [
        { text: "Não tem tempo ruim.", type: "Martelo" },
        { text: "Cada coisa no seu lugar.", type: "Chave de fenda" },
        { text: "Deixa comigo, eu dou um jeito.", type: "Alicate" },
        { text: "Um passo de cada vez.", type: "Serrote" },
        { text: "Vamos com calma, mas com direção.", type: "Trena" }
      ]
    },
    {
      question: "Você se considera mais:",
      answers: [
        { text: "Direto e objetivo.", type: "Martelo" },
        { text: "Atento e meticuloso.", type: "Chave de fenda" },
        { text: "Esperto e improvisador.", type: "Alicate" },
        { text: "Paciente e constante.", type: "Serrote" },
        { text: "Organizado e metódico.", type: "Trena" }
      ]
    },
    {
      question: "Se fosse resolver um desafio em equipe, você:",
      answers: [
        { text: "Assume a liderança.", type: "Martelo" },
        { text: "Fica responsável pelas partes técnicas.", type: "Chave de fenda" },
        { text: "Ajuda onde for preciso.", type: "Alicate" },
        { text: "Fica até o final mesmo quando é difícil.", type: "Serrote" },
        { text: "Organiza quem faz o quê e o cronograma.", type: "Trena" }
      ]
    }
  ];



  // let currentQuestion = 0
// const score = {
//   "Martelo": 0,
//   "Chave de fenda": 0,
//   "Alicate": 0,
//   "Serrote": 0,
//   "Trena": 0
// }

// const questionText = document.getElementById("")
// const answersText = document.getElementById("")
// const resultText = document.getElementById("")
// const startBtn = document.getElementById("")

// function showQuestion(){
//     const q = questions[currentQuestion]
//     questionText = q.question
// }