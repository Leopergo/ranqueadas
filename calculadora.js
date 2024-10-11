
let vitoria = parseInt(prompt("Digite o número de vitórias em partidas ranqueadas: "));

while(isNaN(vitoria)){
    vitoria = parseInt(prompt("Digite o número de vitórias em partidas ranqueadas: "));
}

let derrota = parseInt(prompt("Digite o número de derrotas em partidas ranqueadas: "));

while(isNaN(derrota)){
    derrota = parseInt(prompt("Digite o número de derrotas em partidas ranqueadas: "));
}

let saldo = calculadora(vitoria, derrota);

let elo = ranquear(saldo);

console.log(`O Herói tem um saldo de ${saldo}, e está no nível de ${elo}`);

function calculadora(vitoria, derrota){
    let rank = vitoria - derrota;
    return rank;
}
   
function ranquear(saldo){
    let elo;
    
    if(saldo <= 10) {
        elo = "Ferro";
    }else if(saldo > 10 && saldo <= 20){
        elo = "Bronze";
    }else if(saldo > 20 && saldo <= 50){
        elo = "Prata";
    }else if(saldo > 50 && saldo <= 80){
        elo = "Ouro";
    }else if(saldo > 80 && saldo <= 90){
        elo = "Diamante";      
    }else if(saldo > 90 && saldo <= 100){
        elo = "Lendário";     
    }else if(saldo > 100){
        elo = "Imortal";   
    }else{
        elo = "Não foi possível calcular o nível do jogador";
    }

    return elo;
}


