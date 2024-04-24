//exemplo para ver como funciona o esquema de Falso e Verdadeiro no console log ou em qualquer outro tipo de exemplo

var a = 1;

var b = 2;

var c = "1";

var d = "2";

 console.log(a == b); //falso //viu pelos numeros.

 console.log(a === c); //falso tambem porque nao sao do mesmo tipo // os numeros são iguais mas os tipos são diferentes. // os tres iguais são como uma forma mais "rigida" pra verificar se é igual. Ele verifica até se o tipo é igual.

 console.log(typeof c == typeof d); // verdadeiro pois sao do mesmo tipo // o "typeof" é pra saber de que tipo é sua variavel ou constante. 

 console.log(typeof a == typeof d); // falso pois nao sao do mesmo tipo