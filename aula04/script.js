var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/7/76/The_Big_Short.jpg", "https://upload.wikimedia.org/wikipedia/pt/8/8d/The_Wolf_of_Wall_Street.jpg", "https://i0.wp.com/www.culturaerealidade.com.br/wp-content/uploads/2020/11/3437125_100720180155_opt.jpg?fit=747%2C1120&ssl=1"];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}

//Desafio 
// usar condição pra não adicionar filme repetidos
// pensar sobre catalogo 
// Pesquisar sobre foreach, .forEach