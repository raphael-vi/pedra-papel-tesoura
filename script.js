
const playerValues = document.querySelectorAll(".container .option")


    
playerValues.forEach(playerValues => {
    
    playerValues.addEventListener('click', () => {
        let valor = 0
        
        if (numero + numero2 < 5){
        
            if(playerValues.id == "pedra"){
                valor = 1;    
                document.querySelector("#papel").classList.remove('activeP')
                document.querySelector("#tesoura").classList.remove('activeP')
                playerValues.classList.add('activeP')
                playGame(valor)
            }else if( playerValues.id == "papel"){
                valor = 2;
                document.querySelector("#pedra").classList.remove('activeP')
                document.querySelector("#tesoura").classList.remove('activeP')
                playerValues.classList.add('activeP')
                playGame(valor)
            }else if( playerValues.id == "tesoura"){
                valor = 3;
                document.querySelector("#papel").classList.remove('activeP')
                document.querySelector("#pedra").classList.remove('activeP')
                playerValues.classList.add('activeP')
                playGame(valor)
                
            }
        }
    });
});





function playGame(valor){
    let valorComputer = Math.floor(Math.random()* (4 - 1) + 1);
    let valorP1 = valor
    let resultado = valorComputer - valorP1;  
    const rock = document.querySelector('#pcRock')
    const paper = document.querySelector('#pcPaper')
    const tesoura = document.querySelector('#pcScissors')
    
    switch (valorComputer){
            case 1:
                tesoura.classList.remove('active')
                paper.classList.remove('active')
                rock.classList.add('active')
                break
            case 2:
                rock.classList.remove('active')
                tesoura.classList.remove('active')
                paper.classList.add('active')
                break
            case 3:
                rock.classList.remove('active')
                paper.classList.remove('active')
                tesoura.classList.add('active')
                break

        }
    getResult(resultado)
}
let numero = 0
let numero2=0

function getResult(resultado){
        
        
        if (resultado == -2 || resultado == 1){
                numero++;
                
                document.querySelector("#p1").textContent = `${numero}`
                
                
                
            }
            else if(resultado == -1 || resultado == 2){
                numero2++;
                document.querySelector("#p2").textContent=numero2
                
        }


            if(numero + numero2 == 5){
                let btnSpace = document.querySelector(".score .b")
                const botao = document.createElement("button");     
                let suave = document.querySelector(".score #suave")
                if(numero < numero2){
                    
                    suave.textContent="Você venceu!! :D"
                    
                    botao.innerText = "  Jogar denovo? "
                    btnSpace.appendChild(botao)
                    

                }else if(numero2 < numero){
                    document.querySelector(".score #suave").textContent="Você perdeu :("
                    botao.innerText = "  Jogar denovo? "
                    btnSpace.appendChild(botao)
                }
                else{
                    document.querySelector(".score #suave").textContent="Empate"
                    botao.innerText = "  Jogar denovo? "
                    btnSpace.appendChild(botao)
                }
                botao.addEventListener("click",() => window.location.reload())
                
            }
    return numero, numero2;
}


