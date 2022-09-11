function adicionarFilme () {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
    var elementoFilmeFavorito = "<img src=" + filmeFavorito  + ">";
        var elementoListaFilmes = document.getElementById("listaFilmes");
        var elementoListaFilmes = document.getElementById("listaFilmes");
            elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

// Desafios 
// Remover algum filme da Tela 
// Além de colocar imagem colocar o nome do filme 
// Tambem guarda num lista todos que foram adicionado
