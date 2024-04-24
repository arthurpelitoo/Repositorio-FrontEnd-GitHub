// 3 ESCREVA UM ALGORITMO QUE SIMULE UM BOLETIM ESCOLAR. ELE DEVE RECEBER 4 VALORES(NOTAS) E REALIZAR A MEDIA DELAS. AO FINAL, DEVERÁ A MENSAGEM SE O ALUNO ESTÁ APROVADO OU REPROVADO. (Obs: CRITERIO DE APROVAÇÃO -> 7.0; USE ESTRUTURA CONDICIONAL)

console.log("SIMULAÇÃO DE BOLETIM ESCOLAR")

const listadenotas = [70, 85, 100, 50];


var soma = 0;
for(var i = 0; i < listadenotas.length; i++){
    soma += listadenotas[i]; // é basicamente a mesma coisa: soma = soma + listadenotas[i];
}

const media = soma / listadenotas.length;

if(media >= 70){
    console.log(`O Aluno foi aprovado com média ${media}`);
} else{
    console.log(`O Aluno foi reprovado com media ${media}`);
}