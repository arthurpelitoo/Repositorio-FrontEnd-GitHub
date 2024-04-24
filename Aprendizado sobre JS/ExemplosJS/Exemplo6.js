//funcionamento do &&(E..) e do ||(OU..)


var a = 1;
var b = 2;

console.log(a == 1 &&  b > 1); // o console testou se o "a" é igual à 1 E "b" é maior que 1. // Verdadeiro. "A" é igual a 1 e "B" é maior q 1.  

console.log(a > 1 && b == 2); // o console testou se "a" é maior do que 1 E se b é igual à 2. // Falso tambem, pois meu mano "a" nao é maior q 1, porém "b" é igual à 2 sim. //com && se ele verifica que 1 ta certo e outro tá errado, ainda consta o erro. 

console.log(a == 1 || b > 2); // se eu quiser por um exemplo querer passar algo em um teste com apenas uma condição respeitada é esse o bom. O console testou se "A" é 1 OU se "B" é maior que 2. //Verdadeiro pois ele n liga se uma condição foi inflingida, apenas importa se pelo menos uma foi respeitada.