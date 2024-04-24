// 7 ESCREVA UM ALGORITMO GERADOR DE TABUADA QUE MOSTRE O RESULTADO COMO:

console.log("gerador de tabuada")

const numbase = 2;

for( var i = 1; i <= 10; i++){
    const res = numbase * i;
    console.log(`${numbase} x ${i} = ${res}`);
}