const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual atividade ilegal em que você provavelmente se envolviria?",
        alternativas: [
            {
                texto: "Contrabando de cigarros!",
            },
            {
                texto: "Tráfico de drogas",
            }
            {
                texto: "Falsificação de dinheiro"
            }
            {
                texto: "Sequestro"
            }
        ]
    },
    {
        enunciado: " Pra onde você iria se tivesse que fugir? ",
        alternativas: [
            {
                texto: "Floresta",
            },
            {
                texto: "Praia",
            }
            {
                texto: "Outro país"
            }
            {
                texto: "Interior de uma cidade"
            }
        ]
    },
    {
        enunciado: "Se você fosse escolher um objeto qual seria?",
        alternativas: [
            {
                texto: "Faca",
            },
            {
                texto: "Arma",
            }
            {
                texto: "Espada"
            }
            {
                texto: "Luva com lâminas afiadas"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
