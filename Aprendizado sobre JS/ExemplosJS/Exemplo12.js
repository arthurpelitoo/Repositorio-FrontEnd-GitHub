const nomes = ["Flavio", "Silvio", "Cucas", "Bucciarati", "Naoseimais"];

const nomeProcurado = "Silvia";
var encontrado = false;

for(i = 0; i < nomes.length; i++){
    if(nomeProcurado === nomes[i]){
         encontrado = true;
         break;
    }
}

if(encontrado){
    console.log(`O nome ${nomeProcurado} está na lista!`);
}else{
    console.log(`O nome ${nomeProcurado} naum está na lista!`);
}

