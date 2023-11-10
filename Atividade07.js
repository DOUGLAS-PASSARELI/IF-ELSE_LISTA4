// 7)	As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.  
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
// •	b. Salários até R$ 2800,00 (incluindo): aumento de 20%;
// •	c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%;
// •	d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%;
// •	e. Salários de R$ 15000,00 em diante: aumento de 5%
// Após o aumento ser realizado; informe na tela;
// •	O salário antes do reajuste;
// •	O percentual de aumento aplicado;
// •	O valor do aumento;
// •	O novo salário, após o aumento.  


var salarioAtual = parseFloat ( prompt ("Digíte o Salário Atual: R$ "));

if (salarioAtual <= 2800)
{
    valorAumento = salarioAtual * 0.2;
    salarioNovo = salarioAtual + valorAumento;
    alert ("Salário Atual R$ " + salarioAtual +  " || Porcentagem de Aumento: 20% || Valor do Aumento: R$ " + valorAumento + " || Novo Salário R$ "+ salarioNovo);
}

else if (salarioAtual > 2800 && salarioAtual <= 7000)
{
    valorAumento2 = salarioAtual * 0.15;
    salarioNovo2 = salarioAtual + valorAumento2;
    alert ("Salário Atual R$ " + salarioAtual + " || Porcentagem de Aumento: 15% || Valor do Aumento: R$ " + valorAumento2 + " || Novo Salário R$ "+ salarioNovo2);
}

else if (salarioAtual > 7000 && salarioAtual <= 15000)
{
    valorAumento3 = salarioAtual * 0.1;
    salarioNovo3 = salarioAtual + valorAumento3;
    alert ("Salário Atual R$ " + salarioAtual + "\n" + 
    "Porcentagem de Aumento: 20%" + "\n" + "Valor do Aumento: R$ " + valorAumento3 + "\n" + "Novo Salário R$ "+ salarioNovo3);
}

else 
{
    valorAumento4 = salarioAtual * 0.05;
    salarioNovo4 = salarioAtual + valorAumento4;
    alert ("Salário Atual R$ " + salarioAtual +  " || Porcentagem de Aumento: 20% || Valor do Aumento: R$ " + valorAumento4 + " || Novo Salário R$ "+ salarioNovo4);
}