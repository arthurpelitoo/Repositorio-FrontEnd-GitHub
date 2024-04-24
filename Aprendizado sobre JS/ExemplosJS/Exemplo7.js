
//formas diferentes de fazer a mesma coisa

function somar(){ //função somar
    const res = 2 + 2; //resultado
    console.log(res); //console vai mostrar o resultado apenas se a função do lado de fora for convocada.
}

somar(); // <- convoque o mininum caso queira fazer isso.

function somar2(num1, num2){ // se quiser colocar os parametros aqui já para depois convocar os numeros no final, eu posso.
    const res = num1 + num2; // não esqueça de adicionar a operação no res. se não dá errado.
    console.log(res);   
}

somar2(5,2); // convocando os numeros no final.


function somar3(num1, num2){ 
    const res = num1 + num2;
    return res;             // o return não é um console log, porém ele nesse caso pode servir para retornar o resultado.
}

console.log(somar3(50,40)); //podendo fazer o console log mostrar aqui do lado de fora do bloquin. Porém se atente, sempre chame a função no final.

const somaire = (num1, num2) => { // esta é a arrow function, a forma compacta de se fazer isso. Perceba que não foi necessario criar a function ali.
    const res = num1 + num2;
    return res;
}

console.log(somaire(12,12));