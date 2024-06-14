const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "QUAL ATIVIDADE ILEGAL VOCÊ PROVAVELMENTE DE ENVOLVERIA?",
        alternativas: [
            {
                texto: "Contrabando de drogas",
                afirmacao: "Alfred Ballí Treviño"
            },
            {
                texto: "Tráfico de drgogas",
                afirmacao: "Pablo Escobar"
            },
            {
                 texto: "Falsificação de Dinheiro",
                afirmacao: "Pablo Escobar"
            },
            {
                 texto: "Sequestro",
                afirmacao: "Lázaro barbosa"
            }
            
        ]
    },
    {
        enunciado: "PRA ONDE VOCÊ IRA SE TIVESSE QUE FUGIR?",
        alternativas: [
            {
                texto: "Floresta",
                afirmacao: "Lázaro barbosa"
            },
            {
                texto: "Praia",
                afirmacao: "Alfred Ballí Treviño"
            },
            {
               texto: "Outro país",
                afirmacao: "Pablo Escobar"
            },
            {
                texto: "Interior de uma cidade",
                afirmacao: "Lázaro barbosa"  
            }
        ]
    },
    {
        enunciado: "Se você fosse escolher um objeto qual seria? ",
        alternativas: [
            {
                texto: "Faca",
                afirmacao: "Lázaro barbosa"
            },
            {
                texto: "Arma",
                afirmacao: " Pablo Escobar "
            },
            {
                texto: "Espada",
                afirmacao: "Zoro" 
            },
            {
                texto: "Luva com lâminas afiadas",
                afirmacao: "Freddy Krueger "
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
