/*
NODE RETRIVE UN JSON Y ESCRIBIRLO
*/

console.log("Este es un log de singleView.");
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let string = window.location.href;

console.log("String:");
console.log(string);

let indexStart = string.indexOf('?ID=');
indexStart += 4;
let movieId = string.slice(indexStart);

let apiString = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=41ee980e4b5f05f6693fda00eb7c4fd4";
//let element = fetch(apiString).then(res => res.json());

console.log(movieId);
console.log(apiString);

/*
const data = async () =>
{
  const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=41ee980e4b5f05f6693fda00eb7c4fd4");
  const data = await response.json();
  console.log(data);
};
*/

/*
async function getJson()
{
  const requestURL = apiString;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const jsonMovieData = await response.json();
  console.log("LOG DE VARIABLE:");
  console.log(jsonMovieData.id);

  console.log(jsonMovieData.id);
  console.log(jsonMovieData.original_title);
  console.log(jsonMovieData.poster_path);
  console.log(jsonMovieData.overview);

  let titleName = jsonMovieData.original_title;
  let imageUrl = IMG_PATH + jsonMovieData.poster_path;
  let descriptionDetails = jsonMovieData.overview;
  let dateFormat = jsonMovieData.release_date;

  return jsonMovieData;
}
*/

//const data = await getJson();
//const data = getJson();


/*
const data = fetch(apiString).then((response) => response.json()).then((jsonValues) =>
  {
    console.log("ESTE ES UN NUEVO LOG");
    console.log(jsonValues);
    titleName = jsonValues.original_title;
    //let data = jsonValues;
  });
  */

const dataString = new XMLHttpRequest();
dataString.open('GET', apiString, false);  // `false` makes the request synchronous
dataString.send(null);

console.log("ATRIBUTO TEXTO:")
console.log(dataString.responseText);

const data = JSON.parse(dataString);




let titleName = data.original_title;
let imageUrl = IMG_PATH + data.poster_path;
let descriptionDetails = data.overview;
let dateFormat = data.release_date;


console.log("CONSOLE DE DATOS:")
console.log(data.original_title)
console.log(data.poster_path)
console.log(data.overview)
console.log(data.release_date)
console.log("DATOS PUROS.")
console.log("VARIABLES:")
console.log(titleName)
console.log(imageUrl)
console.log(descriptionDetails)
console.log(dateFormat)

/*
let titleName = element.original_title;
let imageUrl = IMG_PATH + element.poster_path;
let descriptionDetails = element.overview;
let dateFormat = element.release_date;
*/


const singleViewTitleDiv = document.getElementById("movieNameSingleView");
const singleViewImageDiv = document.getElementById("imageSingleView");
const singleViewDescriptionDiv = document.getElementById("detailsSingleView");



const titleElement = document.createElement('h2');
const imageElement = document.createElement('img');
const overviewElement = document.createElement('p');
const dateElement = document.createElement('p');
const breakElement = document.createElement('br');



titleElement.innerHTML = "MOVIE: " + titleName;
titleElement.setAttribute('style', 'color: white');

imageElement.src = imageUrl;
imageElement.setAttribute('width', 600);

overviewElement.innerHTML = descriptionDetails;
overviewElement.setAttribute('style', 'color: white');

dateElement.innerHTML = "RELEASE DATE: " + dateFormat;
dateElement.setAttribute('style', 'color: white');



singleViewTitleDiv.appendChild(titleElement);
singleViewImageDiv.appendChild(imageElement);
singleViewDescriptionDiv.appendChild(dateElement);
singleViewDescriptionDiv.appendChild(breakElement);
singleViewDescriptionDiv.appendChild(overviewElement);




/*
function returnMovies(url)
{
  fetch(url).then(res => res.json()).then
  (function(data)
    {
      console.log(data.results);

      data.results.forEach
      (element =>
        {
          const div_card = document.createElement('div');
          div_card.setAttribute('class', 'card');

          const div_row = document.createElement('div');
          div_row.setAttribute('class', 'row');

          const div_column = document.createElement('div');
          div_column.setAttribute('class', 'column');

          const image = document.createElement('img');
          image.setAttribute('class', 'thumbnail');
          image.setAttribute('id', 'image');
          image.setAttribute('width', 250);

          const title = document.createElement('h3');
          title.setAttribute('id', 'title');

          const center = document.createElement('center');

          title.innerHTML = `${element.title}`;
          image.src = IMG_PATH + element.poster_path;

          let oneTitle = `${element.title}`;
          let twoImg = IMG_PATH + element.poster_path;
          let threeOverview = element.overview;
          let fourDate = element.release_date;

          //////////////////////////////////////////////////////////////////////////////////
          const aLink = document.createElement('a');
          //aLink.setAttribute('href', 'singleViewMovie.html?oneTitle=' + oneTitle + '&twoImg=' + twoImg + '&threeOverview=' + threeOverview + '&fourDate=' + fourDate); //+ '&lastValue=#');
          let ID = element.id;
          aLink.setAttribute('href', 'singleView2.html?ID=' + ID); //+ '&lastValue=#');
          aLink.innerText = 'Go to details';
          //////////////////////////////////////////////////////////////////////////////////

          center.appendChild(image);
          div_card.appendChild(center);
          div_card.appendChild(title);
          div_card.appendChild(aLink);
          div_column.appendChild(div_card);
          div_row.appendChild(div_column);

          main.appendChild(div_row);
        }
      );
    }
  );
}
*/
