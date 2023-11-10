// 4)	Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes Fórmulas:
//•	Para homens: (72.7 * Altura) – 58 
//•	Para mulheres: (62.1 * Altura) – 44.7

var altura = parseFloat (prompt ( "Digíte aqui sua Altura: "));
var sexo = parseInt (prompt ("Digíte aqui seu sexo: 1: FEMININO ou 2: MASCULINO"));

if (sexo == 1)
{
    pesoIdeal = (62.1 * altura) - 44.7;
    alert ("O seu peso ideal é: " + pesoIdeal + " KG.");
}

else if (sexo == 2)
{
    pesoIdeal = (72.7 * altura) - 58;
    alert ("O seu peso ideal é: " + pesoIdeal + " KG.");
}

else {
    alert ("Sexo informado incorretamente. Valor não Permitido!");
}