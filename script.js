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
                afirmacao: "Cuidado com a Polícia Federal"
            },
            {
                texto: "Tráfico de drgogas",
                afirmacao: "Adora um pod né?"
            },
            {
                 texto: "Falsificação de Dinheiro",
                afirmacao: "Oa minino tá com o pacote dentro da mala..."
            },
            {
                 texto: "Sequestro",
                afirmacao: "Se você escolher essa opção ligue para o 190"
            }
            
        ]
    },
    {
        enunciado: "PRA ONDE VOCÊ IRA SE TIVESSE QUE FUGIR?",
        alternativas: [
            {
                texto: "Floresta",
                afirmacao: "Pega o repelente"
            },
            {
                texto: "Praia",
                afirmacao: "Pé na areia,caipirinha, água de coco a cervejinha"
            },
            {
               texto: "Outro país",
                afirmacao: "Não esquece o passaporte"
            },
            {
                texto: "Interior de uma cidade",
                afirmacao: "Vai virar boiadeiro (a)"  
            }
        ]
    },
    {
        enunciado: "Se você fosse escolher um objeto qual seria? ",
        alternativas: [
            {
                texto: "Faca",
                afirmacao: "Espero que use só na cozinha"
            },
            {
                texto: "Arma",
                afirmacao: " Tá jogando muito FREE FIRE "
            },
            {
                texto: "Espada",
                afirmacao: "Quer ser o Zoro é? " 
            },
            {
                texto: "Luva com lâminas afiadas",
                afirmacao: "Acabou a criatividade "
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
