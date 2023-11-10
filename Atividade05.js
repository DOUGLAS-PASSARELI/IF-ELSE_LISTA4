// 5)	Um posto está vendendo combustíveis com a seguinte tabela de descontos:   
// Álcool:
 //   	Até 20 litros: desconto de 3% por litro
 //	Acima de 20 litros: Desconto de 5% por litro 99.
// Gasolina:
// Até 20 litros: desconto de 4% por litro
// Acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos, o valor do litro de combustível e o tipo de combustível (codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente.  


var nLitros = parseFloat (prompt ("Digíte a Quantidade Litros: "));
var vCombustivel = parseFloat (prompt ("Digíte o Valor do Litro: R$ "));
var tipoCombustivel = prompt ("Digíte o tipo do Combustível: A-àlcool ou G-gasolina");

if (tipoCombustivel == 'a' || tipoCombustivel == "A" && nLitros < 20)
{
    valorAlcoolAte20 = nLitros * vCombustivel;
    valorFinalAlcAte20 = valorAlcoolAte20 - (valorAlcoolAte20 * 0.03);
    //valorFinalAlcAte20 = valorAlcoolAte20 - valorDescAlcAte20;
    alert ("O valor total é: R$ " + valorFinalAlcAte20);
}

else if (tipoCombustivel == 'a' || tipoCombustivel == 'A' && nLitros >= 20)
{
    valorAlcoolAcima20 = nLitros * vCombustivel;
    valorFinalAlcAcima20 = valorAlcoolAcima20 - (valorAlcoolAcima20 * 0.05);
    alert ("O valor toal é R$ " + valorFinalAlcAcima20);
}

else if (tipoCombustivel == 'g' || tipoCombustivel == 'G' && nLitros < 20)
{
    vGasMenor20 = nLitros * vCombustivel;
    vFinalGasMenor20 = vGasMenor20 - (vGasMenor20 * 0.04);
    alert ("O valor total é: R$ " + vFinalGasMenor20);
}

else if (tipoCombustivel == 'g' || tipoCombustivel == 'G' && nLitros >= 20)
{
    vGasMaior20 = nLitros * vCombustivel;
    vFinalMaior20 = vGasMaior20 - (vGasMaior20 * 0.06);
    alert ("O valor total é R$ " + vFinalMaior20);
}

else {
    alert ("Digíte corretamente o Tipo do combustivel com: A ou G !");
}