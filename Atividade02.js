// 2)	Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso. 

var turnoEstudo = prompt ("Em qual turno você estuda. Digíte M-matutino / V-vespertino / N-noturno");

if (turnoEstudo == 'M' || turnoEstudo == 'm'){
    alert ("SEJA BEMVINDO. BOM DIA!");
}

else if (turnoEstudo == 'V' || turnoEstudo == 'v'){
    alert ("SEJA BEN VINDO. BOM DIA!");
}

else if (turnoEstudo == 'N' || turnoEstudo == 'n'){
    alert ("SEJA BEM VINDO. BOA NOITE!");
}

else {
    alert ("Valor inválido. Verifique!");
}