for(i = 0; i < 5; i++){
    let valorPlayer = prompt("Pedra, Papel ou Tesoura? " ); 

    function getPlayerValue(valorPlayer){
        
        let valor = valorPlayer.toLowerCase()
        if(valor == "pedra"){
            valor = 1
            playGame(valor)
        }else if( valor == "papel"){
            valor = 2;
            playGame(valor)
        }else if(valor == "tesoura"){
            valor = 3;
            playGame(valor)
        }
        else console.log("Atributo inválido")
    }

    function playGame(valor){
    let valorComputer = Math.floor(Math.random()* (4 - 1) + 1);
    let valorP1 = valor
    let resultado = valorP1 - valorComputer;
    switch (valorComputer){
            case 1:
                console.log("Computador jogou: Pedra!");
                break
            case 2:
                console.log("O computador jogou: Papel!");
                break
            case 3:
                console.log("O computador jogou: Tesoura!");
                break
        } 
            
        if (resultado == -2 || resultado == 1){
            console.log("Você venceu!")
        }
        else if(resultado == -1 || resultado == 2){
            console.log("Você perdeu!")
        }
        else console.log("Empate")
        
    }

    getPlayerValue(valorPlayer)
}




