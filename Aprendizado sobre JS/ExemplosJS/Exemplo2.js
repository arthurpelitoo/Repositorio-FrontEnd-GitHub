var a = 1;

if(true){
    // A Variavel let está sendo declarada dentro do bloco "if" e deverá ser usada apenas dentro de um bloco
    let b = 2;

}

console.log(b);// da erro se ficar fora do bloco onde você atribuiu à let, porém se for var tá livre.
console.log(a);