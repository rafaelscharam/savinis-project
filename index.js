//importações do projeto
const prompt = require('prompt-sync')();//cria uma variavel "prompt" e importa o modulo de sincronia com o teclado quando solicitado.


//Inicio
function rodaAplicacao() {// cria uma funcao para o metodo "rodaAplicacao"
    const eventos = [];//cria a variavel "eventos" que recebe um array vazio
    let opcao; //cria a variavel "opcao"

    while (true) {//enquanto (verdadeiro) loop infinito 
        opcao = lerOpcaoDoMenu();//a variavel opcao recebe os valores de "lerOpcaoDoMenu"
        const opcaoParaInt = parseInt(opcao)//cria uma variavel "opcaoParaInt" para receber o valor de "opcao" e passa-lo para int
        if (opcaoParaInt === 0) {// se a opçao selecionada for 0 (valor e tipagem) entao execute :
            const evento = cadastrarEvento();//cria a variavel "evento" que recebe os dados do metodo "cadastrarEvento" 
            if (evento) {//se (evento) 'evento !== undefined'
                console.log("Evento: " + JSON.stringify(evento));//Escreva: + exiba os dados armazenados em (evento)
                eventos.push(evento);//envia os valores ao array "eventos" que foram recebidos pela variavel "evento"
            }//else {nao faz nada porque nao teve evento retornado}

        } else if (opcaoParaInt === 1) {// se a opçao selecionada for 1 (valor e tipagem) entao execute :
            const evento = selecionarEvento(eventos);//cria a variavel "evento" que recebe o metodo "selecionarEvento" com os valores da variavel "eventos"
            if (evento) {// se evento execute:
                const inscricao = inscreverNoEvento();//cria a variavel inscricao que recebe o parametro "inscreverNoEvento"
                if (inscricao) {// se inscricao
                    console.log("Inscrição: " + JSON.stringify(inscricao));//Escreva: + exiba os dados armazenados em (inscricao)
                    evento.inscritos.push(inscricao);//envia novos valores ao array "evento" que foram recebidos pela variavel "inscriçao" e salva no bloco de "inscritos" dentro do array
                }

            }
        } else if (opcaoParaInt === 2) {// se a opçao selecionada for 2 (valor e tipagem) entao execute :
            const evento = selecionarListaEvento(eventos);//cria a variavel "evento" que recebe o metodo "selecionarListaEvento" com os valores da variavel "eventos" 
            if (evento) {//se evento execute
                const inscricoes = evento.inscritos;//cria a variavel "inscricoes" que recebe o valor de "inscritos" contido em "evento"
                console.log("Inscrições: " + JSON.stringify(inscricoes));//escreva: + exiba os dados armazenados em (inscricoes)
            }

        } else if (opcaoParaInt === 3) {// se a opçao selecionada for 3 (valor e tipagem) entao execute :
            return;//retrona, neste caso encerra a aplicaçao

        } else {// se a opçao selecionada for diferente das acima entao execute :

            console.log("Opção invalida");//escreva:
        }
    } 

}


function lerOpcaoDoMenu() {// cria uma funcao para o metodo "lerOpcaoDoMenu"
    console.log("+--------------------------------------------+");//escreva:
    console.log("| Inscrição/Cadastro de eventos  by:RafaelS. |");//escreva:
    console.log("|--------------------------------------------|");//escreva:
    console.log("| 0. Cadastrar um evento.                    |");//escreva:
    console.log("| 1. Inscrever-se em um evento.              |");//escreva:
    console.log("| 2. Ver lista de inscritos em um evento     |");//escreva:
    console.log("| 3. Sair da aplicação.                      |");//escreva:
    console.log("+--------------------------------------------+");//escreva:
    const opcao = prompt();//captura a tecla digitada e armazena na variavel "opcao" para executar o proximo passo
    return opcao;//devolve a "opcao" selecionada
}


function cadastrarEvento() {// cria uma funcao para o metodo "cadastrarEvento"
    console.log("Digite os dados do evento:");//escreva:
    console.log("Nome do evento : ");//escreva:
    const nomeEvento = prompt();//cria a variavel "nomeEvento" que recebe o valor digitado no teclado
    console.log("Palestrantes");//escreva:
    const palestrantesEvento = prompt();//cria a variavel "palestrantesEvento" que recebe o valor digitado no teclado
    console.log("Hora do evento : ");//escreve:
    const horaEvento = prompt();//cria a variavel "horaEvento" que recebe o valor digitado no teclado
    console.log("Digite o Dia do evento : ");//escreva:
    const diaEvento = prompt();//cria a variavel "diaEvento" que recebe o valor digitado no teclado
    console.log("Digite o Mes do evento : ");//escreva:
    const mesEvento = prompt();//cria a variavel "mesEvento" que recebe o valor digitado no teclado
    console.log("Digite o Ano do evento : ");//escreva:
    const anoEvento = prompt();//cria a variavel "anoEvento" que recebe o valor digitado no teclado

    const dataEvento = new Date(anoEvento + `-` + mesEvento + `-` + diaEvento + `T` + horaEvento + `:00:00`);//cria a variavel "dataEvento" que recebe os dados de data/horario criados por new Date

    if (dataEvento < new Date()) {//se a data do evento for menor que a data atual execute
        console.log("A data do evento deve ser posterior a data atual. ");//escreva:
        return;//retorna
    } else {//se nao execute
        console.log("Evento criado com sucesso");//escreva:
        return {//retorna os dados do evento criado e cria as propriedades do evento criado
            nome: nomeEvento, //cria a propriedade "nome": e armazena os dados em "nomeEvento"
            data: dataEvento,//cria a propriedade "data": e armazena os dados em "dataEvento"
            palestrantes: palestrantesEvento,//cria a propriedade "palestrantes": e armazena os dados em "palestrantesEvento"
            inscritos: []//cria a propriedade "inscritos": e armazena os dados em um array vazio, que vai receber os dados dos inscritos futuramente
        };
    }

}

function listarEventos(eventos) {// cria uma funcao para o metodo "listarEventos" que recebe o parametro "eventos"
    console.log("+--------------------------------------------+");//escreva:
    console.log("Os eventos cadastrados são :");//escreva:

    for (let numEvento = 0; numEvento < eventos.length; numEvento++) {//para (cria variavel "numEvento" com valor igual a 0; enquanto "numEvento" menor que eventos.length(tamanho); "numEvento" recebe +1
        const evento = eventos[numEvento];//cria a variavel "evento" que recebe os valores "numEvento" armazenados no parametro "eventos"
        console.log(`Numero: ${numEvento} - Nome:${evento.nome} - Data/hora: ${evento.data} - Palestrante(s): ${evento.palestrantes}`);//escreva: os dados das seguintes variaveis
    }

    console.log("");//escreva:
    console.log("+--------------------------------------------+");//escreva:
}

function selecionarEvento (eventos) {// cria uma funcao para o metodo "selecionarEvento" que recebe o parametro "eventos"
    listarEventos(eventos);//chama o metodo "listarEventos" com o parametro "eventos"
    console.log("Digite o numero do evento que deseja participar");//escreva:
    const eventoSelecionado = prompt();//cria a variavel "eventoSelecionado" que recebe o valor digitado no teclado

    if (eventoSelecionado >= 0 && eventoSelecionado < eventos.length) {//se "eventosSelecionado" (>= 0 &&) for maior e igual a zero e tambem "eventosSelecionado" (<) for menor que o tamanho de "eventos" execute :      
        const evento = eventos[eventoSelecionado];//cria a variavel "evento" que recebe os valores de "eventoSelecionado" dentro de "eventos"
        if (evento.inscritos.length >= 100) {//se a quantidade de inscritos dentro do evento selecionado for maior ou igual que 100 execute:
            console.log("Lista de inscritos para este evento esta lotada");//escreva:
            return;//retorna
        }//else (se nao) execute:
        return evento;//retorne os dados armazenados em "evento"
    } else {//se nao execute:
        console.log("Numero do evento invalido");//escreva:
        return;//retorna
    }

}

function selecionarListaEvento(eventos){// cria uma funcao para o metodo "selecionarListaEvento" que recebe o parametro "eventos"
    listarEventos(eventos);//chama o metodo listarEventos com o parametro "eventos"
    console.log("Digite o numero do evento que deseja verificar a lista de inscritos");//escreva:
    const eventoListaSelecionado = prompt();//cria a variavel "eventoListaSeleionado" que recebe o valor digitado no teclado

    if (eventoListaSelecionado >= 0 && eventoListaSelecionado < eventos.length) {//se "eventosListaSelecionado" (>= 0 &&) for maior e igual a zero e tambem "eventosListaSelecionado" (<) for menor que o tamanho de eventos execute
        const listaSelecionada = eventos[eventoListaSelecionado];//cria a variavel "listaSelecionada" que recebe os valores de "eventoListaSelecionada" dentro de "eventos"
        if (listaSelecionada.inscritos.length < 1) {//se o tamanho/quantidade de inscritos dentro da variavel listaSelecionada < 1 execute:
            console.log("----- LISTA DE INSCRITOS VAZIA -----");//escreva:
            return;//retorna
        }
        return listaSelecionada;//retorna os dados contidos em "listaSelecionada"
    } else {//se nao execute
        console.log("Numero do evento invalido");//escreva:
        return;//retorna
    }

}

function inscreverNoEvento() {// cria uma funcao para o metodo "inscreverNoEvento"

    console.log("Digite seu Nome : ");//escreva:
    const nomeInscrito = prompt();//cria a variavel "nomeInscrito" que recebe o valor digitado no teclado
    console.log("Digite seu Email : ");//escreva:
    const emailInscrito = prompt();//cria a variavel "emailInscrito" que recebe o valor digitado no teclado
    console.log("Digite sua Idade : ");//escreva:
    const idadeInscrito = prompt();//cria a variavel "idadeInscrito" que recebe o valor digitado no teclado

    if (idadeInscrito < 18) {//se "idadeInscrito" < 18 execute
        console.log("Precisa ser maior de idade para participar dos eventos. ");//escreva:
    } else {//se nao execute
        console.log("Inscrição realizada com sucesso. ");//escreva:
        return {// retorna os dados do inscrito e cria as propriedades do inscrito no evento
            nome: nomeInscrito,//cria a propriedade "nome": e armazena os dados em "nomeInscrito"
            email: emailInscrito,//cria a propriedade "email": e armazena os dados em "emailInscrito"
            idade: idadeInscrito//cria a propriedade "idade": e armazena os dados em "idadeInscrito"
        };
    }

}
//inicio da execução do programa.
rodaAplicacao();// cria o metodo "rodaAplicacao"