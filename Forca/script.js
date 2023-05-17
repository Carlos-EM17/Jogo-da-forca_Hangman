//variaveis
  //variaveis do JavaScript
var letrasJaChutadas = [];
var letrasChutadasErradas = [];
var chute;
var chances = 6;
var acertos = 0;
var palavraSecreta;
  //pega os elementos do HTML
var espacoPalavra = document.getElementById("espacoPalavra");
var chuteJogador = document.getElementById("chuteJogador");
var avisoJogador = document.getElementById("avisoDeErro");
var listaDeChutes = document.getElementById("listaDeChutes");
var finalJogo = document.getElementById("vitoriaTexto"); 
var mostraChances = document.getElementById("totalDeChances"); 
var img = document.getElementById("imagemJogo");
var dica = document.getElementById("dica");
  //possiveis palavras para o jogo
var comidas = ['POLENTA', 'BANANA', 'LARANJA', 'BOLACHA', 'SORVETE', 'FRANGO', 'PICANHA', 'ABOBORA', 'RATATOUILLE', 'BATATA', 'COSTELAO', 'FEIJOADA', 'CUCA'];
var vestimentas = ['MEIAS', 'CALÇADO', 'BOTA', 'JAQUETA', 'TOUCA', 'BLUSA', 'TENIS', 'CAMISA', 'CALÇA', 'VESTIDO', 'CUECA', 'LUVAS', 'TERNO', 'CHINELO'];
var paises = ['BRASIL', 'CHINA', 'DINAMARCA', 'MONGOLIA', 'RUSSIA', 'MEXICO', 'ARGENTINA', 'CAZAQUISTAO', 'NEPAL', 'AUSTRALIA', 'ANGOLA', 'MOÇAMBIQUE', 'CANADA', 'POLONIA', 'PORTUGAL'];

mostraChances.innerHTML = 'VIDAS: ' + chances;
//Funções

function escolheTemaPalavra(){
var temasJogo = [comidas, vestimentas, paises];
var escolheTema = temasJogo[Math.floor(Math.random() * temasJogo.length)];
if (escolheTema == temasJogo[0]){
  dica.innerHTML = 'TEMA: COMIDA';
} else if(escolheTema == temasJogo[1]) {
  dica.innerHTML = 'TEMA: VESTIMENTAS';
} else {
  dica.innerHTML = 'TEMA: PAISES';
}
var escolhePalavra = escolheTema[Math.floor(Math.random() * escolheTema.length)];
palavraSecreta = escolhePalavra.split('');
}
  //Mostra quantas palavras
function desenhaPalavraSecreta() {
  espacoPalavra.innerHTML = '';
  for (var i = 0; i < palavraSecreta.length; i++) {
    espacoPalavra.append("_ ");
  }
}
  //Pega o chute do jogador e armazena ela
function pegaChute() {
  chute = chuteJogador.value.toUpperCase(); 
  if (chute && !letrasJaChutadas.includes(chute)) {
    letrasJaChutadas.push(chute); 
    escreveAcerto();     
  } else {
    avisoJogador.innerHTML = ("Você já chutou " + chute);  
  }
}
  //inclue o acerto na forca
function escreveAcerto() {
  espacoPalavra.innerHTML = "";
  for (var i = 0; i < palavraSecreta.length; i++) {
    if (letrasJaChutadas.includes(palavraSecreta[i])) {
        espacoPalavra.append(palavraSecreta[i]);
    } else {
        espacoPalavra.append("_");
    }
    espacoPalavra.append(" ");
  }
  //se o chute estiver correto em um ou mais ele considera um acerto
  for(var i = 0; i <= palavraSecreta.length; i++){
    if(palavraSecreta[i] == chute){
      acertos++
    }
  }
  //se o chute não estiver na palavra, perde vida
  if(!palavraSecreta.includes(chute)){
    letrasChutadasErradas.push(chute);
    chances--;
    mostraChances.innerHTML = 'VIDAS: ' + chances;
    listaDeChutes.innerHTML = letrasChutadasErradas;
    alteraImg();
  }
  //mostra o resultado final do jogo
  if(acertos == palavraSecreta.length){
    finalJogo.innerHTML = "VOCÊ O SALVOU";
  } else if (chances == 0){
    finalJogo.innerHTML = "Você o matou";
    finalJogo.style.animation = 'none';
  }
}   
function alteraImg(){
 if (chances == 5){
  img.src = 'img/fase1.png';
 }
 else if (chances == 4){
  img.src = 'img/fase2.png';
 }
 else if (chances == 3){
  img.src = 'img/fase3.png';
 }
 else if (chances == 2){
  img.src = 'img/fase4.png';
 }
 else if (chances == 1){
  img.src = 'img/fase5.png';
 }
 else if (chances == 0){
  img.src = 'img/fase6.png';
 }
}
//executa
escolheTemaPalavra();
desenhaPalavraSecreta();
