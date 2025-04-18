class Quiz {
    constructor(perguntas) {
      this.perguntas = perguntas;
      this.indiceAtual = 0;
      this.pontuacao = {
        Martelo: 0,
        "Chave de fenda": 0,
        Alicate: 0,
        Serrote: 0,
        Trena: 0
      };
  
      this.textoPergunta = document.getElementById("questionText");
      this.areaRespostas = document.getElementById("answers");
      this.resultadoFinal = document.getElementById("result");
      this.botaoInicio = document.getElementById("startBtn");
  
      this.botaoInicio.addEventListener("click", this.mostrarPergunta.bind(this));
    }



}