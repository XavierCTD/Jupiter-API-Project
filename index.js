// Star Wars API


/* Creating a functioning page using DOMContentLoaded through the document. */

document.addEventListener("DOMContentLoaded", () => {


/* Getting the HTML Id's by manipulating the DOM */    
    
const contentDiv = document.getElementById("content");    
const charactersButton = document.getElementById("charactersBtn");
const starshipsButton = document.getElementById("starshipsBtn");
const endpoint = "people/1";

/* Adding two fetches using the addEventListener and an asynchronous function */    

charactersButton.addEventListener("click", () => fetchData("people"));
starshipsButton.addEventListener("click", () => fetchData("starships"));

async function fetchData(endpoint) {
    try {
        contentDiv.innerHTML = "<p>Loading...</p>";
        const response = await fetch(`https://swapi.dev/api/${endpoint}/`);
        if (!response.ok) {
            throw new error("API error");
        }
        const data = await response.json();
        displayData(data.results, endpoint);
    } catch (error) {
        contentDiv.innerHTML = `<p>Click one of the two buttons above to see the results!</p>`;
    }
}


/* Displaying the Star Wars data and information */    
    
function displayData(items, type) {
   contentDiv.innerHTML = "";
   items.slice(0, 5).forEach(item => {
       const objects = document.createElement("div");
       objects.innerHTML = type === "people"
       ? `<h3>${item.name}</h3><p>Height: ${item.height} cm</p>`
       : `<h3>${item.name}</h3><p>Model: ${item.model}</p>`
       contentDiv.appendChild(objects);
   });
}

});
