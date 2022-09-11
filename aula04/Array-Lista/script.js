// ARRAY , LISTA
var listaFilmes = ["Lobos de Wall Street", "A Grande Aposta", "Fome de Poder"]; 
// elemento                  1                     2                 3  
// indice                    0                     1                 2

// var filme1 = "Lobos de Wall Street"
// var filme2 = "A Grande Aposta"
// var filme3 = "Fome de Poder"

// Adicionando novos elementos - indice 3
listaFilmes.push("Harry Potter 3");

// indice 4 
listaFilmes.push("Harry Potter 4");

// indice 5 
listaFilmes.push("Harry Potter 5");

// experimente o h1, strong
// document.write("<p>" + filme2 + "</p>");
// document.write("<p>" + filme3 + "</p>");

// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

//    valor incial.  condição.     expressão final  
for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<p>" + indice + "</p>");
    document.write("<p>" + listaFilmes[indice] + "</p>");
}