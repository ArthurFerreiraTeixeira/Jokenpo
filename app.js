const result = document.querySelector('.resultado') // importa a class do html e cria uma variavel, esta puxando de um paragrafo
const pontoHumano = document.querySelector('#sua-pontuacao') // importa o id do html e cria uma variavel, esta puxando de um span
const pontoMaquina = document.querySelector('#pontuaçao-maquina') // importa o id co html e cria uma variavel, esta puxando de um span

let numeroHumano = 0 // cria uma variavel para começar do valor 0 da pontuação do humano
let numeroMaquina = 0 // cria uma variavel para comerçar do valor 0 da pontuação da maquina

const clickHumano = (escolha) =>{
    game(escolha, clickMaquina())
} 
/*
Cria uma Arrow function
coloca no html um onclick colocando essa function
quando o jogador clicar para escolher ou pedra ou papel ou tesoura acontece o que esta dentro dessa function
a function pega a function game ver o que foi escolhido pelo jogador na variavel escolha e imprimi o resultado escolhido aleatoriamente pela maquina
coloca no console o que o humano escolheu e o que a maquina escoheu e coloca o resultado
*/

const clickMaquina = () =>{
    const opcao = ['pedra', 'papel', 'tesoura']
    const opcaoNumber = Math.floor(Math.random() * 3)

    return opcao[opcaoNumber]
}
/*
essa arrow function faz com que a maquina escolha aleatoriamente uma opção entre pedra, papel e tesoura
O Math.random escolhe um numero aleatorio entre 0 e 1 e multiplica por 3, e o Math.floor coloca o resultado em um numero cheio para baixo
se der 2,7 vai para 2, com isso retorna um dos nomes escolhido sendo 0 pedra, 1 papel e 2 tesoura
*/

const game = (humano, maquina) =>{
    console.log('Humano: ' + humano + ' Maquina: ' + maquina)

    //DESSA FORMA FICA MENOS ORGANIZADO MAIS FICA MAIS PRATICO
    if(humano === maquina){
        result.innerHTML = 'Empate'
        result.style.color = '#0000ff'
    }else if(
    (humano === 'pedra' && maquina === 'tesoura') || 
    (humano === 'papel' && maquina === 'pedra') || 
    (humano === 'tesoura' && maquina === 'papel')) {
        numeroHumano++
        pontoHumano.innerHTML = numeroHumano
        result.innerHTML = 'Você Ganhou!'
        result.style.color = '#00ff00'
    }else{
        numeroMaquina++
        pontoMaquina.innerHTML = numeroMaquina
        result.innerHTML = 'Você Perdeu!'
        result.style.color = '#ff0000'
    }

    /* PODERIA FAZER DESSA FORMA QUE ACHO QUE FICA MELHOR EXPLICADO MAIS NAO FICA MUITO PRATICO
    if(humano === maquina){
        result.innerHTML = 'Empate'
    } else if(humano === 'pedra' && maquina === 'tesoura'){
        result.innerHTML = 'Você Ganhou!'
    }else if(humano === 'papel' && maquina === 'pedra'){
        result.innerHTML = 'Você Ganhou!'
    }else if(humano === 'tesoura' && maquina === 'papel'){
        result.innerHTML = 'Você Ganhou!'
    }else{
        result.innerHTML = 'Você Perdeu!'
    }*/
}
/*
essa arrow function esta sendo colocada na arrow function clickHumano que esta comparando o resultado que foi escolhido pelo jogador e pela maquina e executando a function dando o resultado
essa arrow function e colocado o valor do que o humano escolheu comparando com o que a maquina escolheu
coloca um if para quando o que foi escolhido pelo humano e pela maquina for igual, da empate e coloca o resultado no paragrafo tendo a cor azul 
no else if quando o humano ganhar no paragrafo escreve que ele ganhou, a escrita fica verde e soma um ponto para ele no contador em baixo
no else caso nao aconteça nenhuma das opçoes anteriores, quer dizer que a maquina ganhou, o texto fica vermelho e soma um ponto para maquina
o console.log so aparece o resultado no console, do que o humano escolheu e o que a maquina escolheu, verificando que esta correta a aplicação
*/