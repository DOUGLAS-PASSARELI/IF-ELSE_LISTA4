// 3)	As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

var nMacas = parseInt (prompt ("Digíte a Quantidade de Maçãs Compradas: "));

if (nMacas < 12)
{ valorAte11 = nMacas * 0.30;
 alert ("Valor Total = R$ " + valorAte11);
}

 else {
    valorDuzia = nMacas * 0.25;
    alert ("Valor Total = R$ " + valorDuzia)
 }

 