//Promise padrão de requisição http
function httpRequest(method, url, data){
    const promise = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        if(data){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () => {
            resolve(xhr.response);
        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
};

//Requisita a lista de Pokémon
function listar(){
    httpRequest('GET', 'https://pokedex-restapi.herokuapp.com/pokemon').then(listaPokemon =>{
        for(var i = 0; i < listaPokemon.length; i++){
            $(".tabela-pokemon").append("<li class='list-group-item'>" + 
                                        "<img src='https://cdn3.iconfinder.com/data/icons/movies-3/32/pokemon-movie-cinema-ball-512.png' width='70' height='70' alt='Imagem " + listaPokemon[i].nome + "' />" + 
                                        "#" + listaPokemon[i].numero + " " + listaPokemon[i].nome + "<br>" + listaPokemon[i].descricao + "</li>");
        }
    });
};

//Lista os Pokémon ao carregar a página
$(document).ready(function(){
    listar();
});