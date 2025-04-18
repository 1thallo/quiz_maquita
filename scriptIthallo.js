class Quiz {

    @param {string} idResultado 
    @param {string} idFormulario
    
    @

    constructor(idFormulario, idResultado){
        this.formulario = document.getElementById(idFormulario)
        this.resultado = document.getElementById(idResultado)
        this.ferramentas = ['Martelo', 'Chave de Fenda', 'Alicate', 'Serrote', 'Trena']
        this.pontos = {}

        this.resetarPontos();
        this.formulario.addEventListener('submit', (evento) => this.calcularResultado(evento))

    }


    resetarPontos = () => {
        this.ferramentas.forEach((ferramenta) => (this.pontos[ferramenta] = 0))
    }
    
    calcularResultado = (evento) =>{
        this.resetarPontos();
    
        const perguntas = this.formulario.querySelectorAll('.question')

        for (let pergunta in perguntas){
            const selecionado = pergunta.querySelector('input[type = radio]: checked')

            if(selecionado){
                this.pontos[selecionado.value] ++;
            } else{
                this.resultado.textContent = 'Por favor, responda todas as perguntas'
            return;
            }
        }

        const ferramentaVencedora = this.ferramentaVencedora()
        this.mostrarResultado (ferramentaVencedora)
    }

    // tem que retornar a ferramenta vencedora aqui
        @returns {string}
    ferramentaVencedora = () => {
        let maiorPontuacao = 0;
        let ferramentaVencedora = ''

        for (let ferramenta of this.ferramentas){
            if (this.pontos[ferramenta] > maiorPontuacao)
                maiorPontuacao = this.pontos[ferramenta]
                ferramentaVencedora = ferramenta
        }

        return ferramentaVencedora
    }

    mostrarResultado = () => {
        this.resultado.textContent = 
    }


    














}
