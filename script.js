/*Teste commit*/

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates;
  return pontos;
}

var jogadores = []

function exibeJogadores(jogadores) {
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++){
    elemento += `<tr>`
    elemento += `<td><img src="${jogadores[i].icone}"></td>`
    elemento += `<td>${jogadores[i].nome}</td>`
    elemento += `<td>${jogadores[i].vitorias}</td>`
    elemento += `<td>${jogadores[i].empates}</td>`
    elemento += `<td>${jogadores[i].derrotas}</td>`
    elemento += `<td>${jogadores[i].pontos}</td>`
    elemento += `<td><button class="winBtn"  onClick="adicionarVitoria('${i}')">Vitória</button></td>`
    elemento += `<td><button class="drawBtn"  onClick="adicionarEmpate('${i}')">Empate</button></td>`
    elemento += `<td><button class="delBtn" onClick="removerJogador('${i}')">Excluir</button></td>`
    elemento += `</tr>`
  }  
  var tabelaJogadores = document.getElementById('tabelaJogadores');
  tabelaJogadores.innerHTML = elemento
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  for (var index = 0; index < jogadores.length; index++){
    if(index != i){
    jogadores[index].derrotas++
    }
  }
  exibeJogadores(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}


function adicionarJogador(){
  var nomeP = document.getElementById("nomePlayer").value
  var iconP = document.getElementById("iconPlayer").value
  var novoP = {icone: `${iconP}`, nome: `${nomeP}`, vitorias: 0, empates: 0, derrotas: 0, pontos: 0}
  jogadores.push(novoP)
  exibeJogadores(jogadores)
}

function removerJogador(i){
  jogadores.splice(i, 1)
  exibeJogadores(jogadores)
}

function zerar() {
  for(var i = 0; i < jogadores.length; i++){
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    jogadores[i].pontos = 0
  }
  exibeJogadores(jogadores)
}