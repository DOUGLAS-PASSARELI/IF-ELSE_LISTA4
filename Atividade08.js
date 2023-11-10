// 8)	Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.)
// O salário líquido corresponde ao salário bruto menos os descontos O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// a. Desconto do IR;
// b. Salário Bruto ate R$900,00 (inclusive) – Isento;
// c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
// d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
// e. Salário bruto acima de 2500 – Desconto de 20%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo valor da hora é 5 e a quantidade de horas é 220.  
// Salário bruto (5 * 220)           : R$   1100,00
// ( – ) IR (5%)                     : R$     55,00
// ( – ) INSS ( 10% )                 : R$     110,00
// FGTS ( 11%)                       : R$     121,00
// Total de descontos                 : R$     165,00
// Salário Líquido                   : R$     935,00 

var valorHora = parseFloat ( prompt ("Digíte o Valor da hora do Funcionário: R$"));
var quantHora = parseFloat ( prompt ("Digíte a Quantidade de horas trabalhadas: R$"));
var salarioBruto = valorHora * quantHora;
var inss = salarioBruto * 0.10;
var sindicato = salarioBruto * 0.03;
var fgts = salarioBruto * 0.11;

if (salarioBruto <= 900)
{
    var totalDesc900 = inss + sindicato;
    var salarioLiquido900 = salarioBruto - totalDesc900;

    alert ("Salário Bruto: R$" + salarioBruto + "\n" + "IR: ISENTO" + "\n" + "INSS (10%): R$ " + inss + "\n" + "Sindicato (3%): " + sindicato + "\n" + "FGTS (11%): R$ " + fgts + "\n" + "Total de Descontos: R$ " + totalDesc900 +  "\n" + "Salário Liquido: R$ " + salarioLiquido900);
}

else if (salarioBruto > 900 && salarioBruto <= 1500)
{
    var impRend1500 = salarioBruto * 0.05;
    var totalDesc1500 = impRend1500 + inss + sindicato;
    var salarioLiquido1500 = salarioBruto - totalDesc1500;

    alert ("Salário Bruto: R$" + salarioBruto + "\n" + "IR (5%): R$ " + impRend1500 + "\n" + "INSS (10%): R$ " + inss + "\n" + "Sindicato (3%): " + sindicato + "\n" + "FGTS (11%): R$ " + fgts + "\n" + "Total de Descontos: R$ " + totalDesc1500 +  "\n" + "Salário Liquido: R$ " + salarioLiquido1500);
}

else if (salarioBruto > 1500 && salarioBruto <= 2500)
{
    var impRend2500 = salarioBruto * 0.10;
    var totalDesc2500 = impRend2500 + inss + sindicato;
    var salarioLiquido2500 = salarioBruto - totalDesc2500;

    alert ("Salário Bruto: R$" + salarioBruto + "\n" + "IR (10%): R$ " + impRend2500 + "\n" + "INSS (10%): R$ " + inss + "\n" + "Sindicato (3%): " + sindicato + "\n" + "FGTS (11%): R$ " + fgts + "\n" + "Total de Descontos: R$ " + totalDesc2500 +  "\n" + "Salário Liquido: R$ " + salarioLiquido2500);
}

else
{
    var impRendMaior2500 = salarioBruto * 0.20;
    var totalDescmaior2500 = impRendMaior2500 + inss + sindicato;
    var salarioLiquidoMaior2500 = salarioBruto - totalDescmaior2500;

    alert ("Salário Bruto: R$" + salarioBruto + "\n" + "IR (20%): R$ " + impRendMaior2500 + "\n" + "INSS (10%): R$ " + inss + "\n" + "Sindicato (3%): " + sindicato + "\n" + "FGTS (11%): R$ " + fgts + "\n" + "Total de Descontos: R$ " + totalDescmaior2500 +  "\n" + "Salário Liquido: R$ " + salarioLiquidoMaior2500);

}