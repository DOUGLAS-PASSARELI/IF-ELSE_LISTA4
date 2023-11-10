// 6)	Faça um algoritmo que leia do usuário, os nomes de dois times e o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.

alert ("Bem Vindo ao Placar Futebol!");

var time1 = prompt ("Digíte o Time 1: ");
var golsTime1 = parseInt (prompt("Digíte quantos gol(s) foram feitos pelo " + time1));
var time2 = prompt ("Digíte o Time 2");
var golsTime2 = parseInt (prompt("Digíte quantos gol(s) foram feitos pelo " + time2));

if (golsTime1 == golsTime2)
{
    alert ("O placar ficou EMPATADO!");
}

else if (golsTime1 > golsTime2)
{
    alert ("O vencedor do jogo foi o " + time1);
}

else if (golsTime2 > golsTime1)
{
    alert ("O vencedor do jogo foi o " + time2);
}

else 
{
    alert ("Verifique os valores digitados!");
}