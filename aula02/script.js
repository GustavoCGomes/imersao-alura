/*função*/ function Converter() {
    var valorElemento = document.getElementById("valor");
    /* document.getElementById - pegue o elemento por id*/
    var valor = valorElemento.value;
    /*value retornar somente o valor*/
    var valorEmDolarNumerico = parseFloat(valor);
    /* parseFloat transforma texto em numeros decimais*/

    var valorEmReal = valorEmDolarNumerico * 5;
    /* Declarando o valor em real multiplicando por 5 */

    console.log(valorEmReal);
    /*console.log no inspencionar*/

    var elementoValorConvertido = document.getElementById("valorConvertido");
    /* Pegar o elemento id valorConvertido */  
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    /* Mostra o resultado junto a um texto */
    elementoValorConvertido.innerHTML = valorConvertido;
    /* pegar o elementoValorConvertido. colocar interno no HTML (innerHTML) = Resultado Final*/
}