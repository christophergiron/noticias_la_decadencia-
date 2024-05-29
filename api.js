function api_tecnologia(){
let key = '88b72746cf6c4806ad7c8ca14120778d'
let pais = 'us'
let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=technology&apiKey=${key}`
let mostrarNoticias = document.getElementById('Deportes');
fetch(url).then((resp) => resp.json()).then(dato => {
    console.log(dato);
    let noticias = (dato.articles);
    noticias.map(function(numero){
        let div = document.createElement('Deportes');
        div.innerHTML = `<br>
        <img style ="max-width: 400px" src=${numero.urlToImage}><br>
        <h1>${numero.title}</h1>
        <h2>${numero.description}</h2>
        <h3>${numero.url}</h3>`;
        mostrarNoticias.appendChild(div);
    })
});
}