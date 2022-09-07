var numeroSecreto = parseInt(Math.random() * 11); 
/* Math.random() gera numeros aleatorioas */

function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    /*se chute for igual ao numeroSecreto acertou*/
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou";

    /* Se for maior que 10 ou menor que 0 - retornar mensagem*/
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um numero de 0 a 10";

    /*Se o chute for diferente da resposta correta*/
    } else {
        elementoResultado.innerHTML = "Você errou"
    }
}