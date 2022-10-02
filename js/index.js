let btnSearch = document.getElementById("btnBuscar");
let inputSearch = document.getElementById("inputBuscar");
let URL_DATA = "https://japceibal.github.io/japflix_api/movies-data.json"
let moviesArray = [];
let canva = document.getElementById("boton");
document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})
btnSearch.addEventListener("click", e => {
    if (inputSearch.value.length > 0) {
        searchMovie();
    }
})
const fetchData = async () => {
    const response = await fetch(URL_DATA);
    if (response.ok) {
        moviesArray = await response.json();
    } else {
        throw Error(response.statusText);
    }
    console.log(moviesArray);
}
function searchMovie() {
    let arraySearch = [];
    arraySearch = moviesArray.filter(({ title, overview, tagline, genres }) =>
        title.toLowerCase().includes((inputSearch.value).toLowerCase()) ||
        overview.toLowerCase().includes((inputSearch.value).toLowerCase()) ||
        tagline.toLowerCase().includes((inputSearch.value).toLowerCase()) ||
        genres.some(({ name }) => name.toLocaleLowerCase().includes(inputSearch.value)))
    showMovie(arraySearch);
    Stars2(arraySearch)
}

function showMovie(showArray) {
    let htmlContentToAppend = "";
    let aa = "";
    for (let i = 0; i < showArray.length; i++) {
        let movies = showArray[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active" onclick="">
        <div class="row">
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <div class="mb-1">
            <h5>${movies.title} </h5>
            <p>${movies.tagline}</p>
            <div id="${movies.id}"></div>
        </div>
    </div>
    </div>
    </div>
    </div>  
        `
        document.getElementById("lista").innerHTML = htmlContentToAppend;
        //  Stars(movies.vote_average, movies.id)
    }

}

/*function Stars(vote_average, id) {
    let htmlContentToAppend1 = "";

 
        //let aa = showArray[i];
       // console.log(aa.vote_average)


        varm = parseInt(vote_average / 2)
        for (let x = 0; x < varm; x++) {
            htmlContentToAppend1 += `<span class="fa fa-star checked"></span>`
        }
        for (let x = 0; x < (5 - varm); x++) {
            htmlContentToAppend1 += `<span class="fa fa-star"></span>`
        }
        document.getElementById(id).innerHTML = htmlContentToAppend1;
    }*/

function Stars2(showArray) {

    for (let i = 0; i < showArray.length; i++) {
        let htmlContentToAppend1 = "";
        let movie = showArray[i];

        //let aa = showArray[i];
        console.log(movie.vote_average)


        varm = parseInt(movie.vote_average / 2)
        for (let x = 0; x < varm; x++) {
            htmlContentToAppend1 += `<span class="fa fa-star checked"></span>`
        }
        for (let x = 0; x < (5 - varm); x++) {
            htmlContentToAppend1 += `<span class="fa fa-star"></span>`
        }
        document.getElementById(movie.id).innerHTML = htmlContentToAppend1;
    }
}


// tendria que ser una funcion show, que cuando clickeamos el div aparezca el canva
// y un add even listener que cuando toque el div me meta la funcion 
//ONCLICK EN HTML QUE LLAME LA FUNCION

/*
canva.addEventListener("click", canvaBox, false);

function canvaBox(event) {
  let warn = `${moviesArray.title} `;
  let warn2 = ` ${moviesArray.overview} ` ;
  document.getElementById("title").innerHTML = warn;
  document.getElementById("overview").innerHTML = warn2;
  event.preventDefault();
}

function openNav() {
    document.getElementById("boton").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("boton").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
*/
