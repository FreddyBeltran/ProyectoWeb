console.log("Este es un log de index.")

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

const singleViewNameDiv = document.getElementById("movieNameSingleView");
returnMovies(APILINK)

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
          //aLink.setAttribute('href', 'singleView2.html?ID=' + ID); //+ '&lastValue=#');
          aLink.setAttribute('href', 'singleView2.html'); //+ '&lastValue=#');
          aLink.innerText = 'Go to details  ';
          //////////////////////////////////////////////////////////////////////////////////



          //////////////////////////////////////////////////////////////////////////////////
          const aUserList = document.createElement('a');
          //aLink.setAttribute('href', 'singleViewMovie.html?oneTitle=' + oneTitle + '&twoImg=' + twoImg + '&threeOverview=' + threeOverview + '&fourDate=' + fourDate); //+ '&lastValue=#');
          //aLink.setAttribute('href', 'singleView2.html?ID=' + ID); //+ '&lastValue=#');
          aUserList.setAttribute('href', '#'); //+ '&lastValue=#');
          aUserList.innerText = '       Add to User list';
          //////////////////////////////////////////////////////////////////////////////////


          const divLink = document.createElement('div');
          divLink.appendChild(aLink);
          const divUser = document.createElement('div');
          divUser.appendChild(aUserList);
          const divLinks = document.createElement('div');
          divLinks.appendChild(divLink);
          divLinks.appendChild(divUser);


          center.appendChild(image);
          div_card.appendChild(center);
          div_card.appendChild(title);
          //div_card.appendChild(aLink);
          //div_card.appendChild(aUserList);
          div_card.appendChild(divLinks);
          div_column.appendChild(div_card);
          div_row.appendChild(div_column);

          main.appendChild(div_row);
        }
      );
    }
  );
}

form.addEventListener
("submit", (e) =>
  {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem)
    {
      returnMovies(SEARCHAPI + searchItem);
      search.value = "";
    }
  }
);

