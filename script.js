// this should be the simplest query to get recipes from the Spoonacular API
const APIKEY = "b1b502c2ced044b6992662f0533692c0"
const SEARCHAPI = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + APIKEY + "&query="
const BASICAPI = "https://api.spoonacular.com/recipes/random?apiKey=" + APIKEY
const TESTAPI = SEARCHAPI + "pizza";


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnRecipes(TESTAPI);

function returnRecipes(url) {
    fetch(url).then(res => res.json())
        .then(function(data) {

            console.log(data);

            const recipes = data.results || data.recipes;

            if (recipes.length === 0) {
                main.innerHTML = '<h1>No results found</h1>';
                return;
            }

            console.log(recipes);

            recipes.forEach(element => {
            
                
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('class', 'title');

            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = element.image;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;
    
    if (searchItem) {
        returnRecipes(SEARCHAPI + searchItem);
        search.value = '';
    }

});



