let key = '88b72746cf6c4806ad7c8ca14120778d'
let pais = 'us'
function api_tendencias(){
    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`
    let mostrarNoticias = document.getElementById('tendencias');
    fetch(url).then((resp) => resp.json()).then(dato => {
        console.log(dato);
        let noticias = (dato.articles);
        noticias.map(function(numero){
            let div = document.createElement('tendencias');
            div.innerHTML = `<br>
            <img style ="max-width: 400px" src=${numero.urlToImage}><br>
            <h1>${numero.title}</h1>
            <h2>${numero.description}</h2>
            <h3>${numero.url}</h3>`;
            mostrarNoticias.appendChild(div);
        })
    });
}

function api_tecnologia(){
let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=technology&apiKey=${key}`
let mostrarNoticias = document.getElementById('tecnologia');
fetch(url).then((resp) => resp.json()).then(dato => {
    console.log(dato);
    let noticias = (dato.articles);
    noticias.map(function(numero){
        let div = document.createElement('tecnologia');
        div.innerHTML = `<br>
        <img style ="max-width: 400px" src=${numero.urlToImage}><br>
        <h1>${numero.title}</h1>
        <h2>${numero.description}</h2>
        <h3>${numero.url}</h3>`;
        mostrarNoticias.appendChild(div);
    })
});
}

function api_Deportes(){
    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=sports&apiKey=${key}`
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

function api_Entretenimiento(){
    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=entertainment&apiKey=${key}`
    let mostrarNoticias = document.getElementById('Entretenimiento');
    fetch(url).then((resp) => resp.json()).then(dato => {
        console.log(dato);
        let noticias = (dato.articles);
        noticias.map(function(numero){
            let div = document.createElement('Entretenimiento');
            div.innerHTML = `<br>
            <img style ="max-width: 400px" src=${numero.urlToImage}><br>
            <h1>${numero.title}</h1>
            <h2>${numero.description}</h2>
            <h3>${numero.url}</h3>`;
            mostrarNoticias.appendChild(div);
        })
    });
}

function api_Ciencia(){
    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=science&apiKey=${key}`
    let mostrarNoticias = document.getElementById('Ciencia');
    fetch(url).then((resp) => resp.json()).then(dato => {
        console.log(dato);
        let noticias = (dato.articles);
        noticias.map(function(numero){
            let div = document.createElement('Ciencia');
            div.innerHTML = `<br>
            <img style ="max-width: 400px" src=${numero.urlToImage}><br>
            <h1>${numero.title}</h1>
            <h2>${numero.description}</h2>
            <h3>${numero.url}</h3>`;
            mostrarNoticias.appendChild(div);
        })
    });
    }

var Activador = 1
if (Activador = 1){
api_tecnologia();
api_Deportes();
api_Entretenimiento();
api_Ciencia();
api_tendencias();
}
