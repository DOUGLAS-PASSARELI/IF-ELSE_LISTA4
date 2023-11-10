//1)Faça um programa que o usuário informe o salário recebido e o total gasto. Deverá ser exibido na tela “Gastos dentro do orçamento” caso o valor gasto não ultrapasse o valor do salário e “Orçamento estourado” se o valor gasto ultrapassar o valor do salário.

var salarioRecebido = parseFloat (prompt ("Digíte o Salário Recebido: R$ "));

var gastoTotais = parseFloat (prompt ("Digíte seu Gasto Total: R$ "));


if (gastoTotais <= salarioRecebido){

    alert ("Gastos dentro do Orçamento");
}

else {

    alert ("Orçamento estourado");
}

