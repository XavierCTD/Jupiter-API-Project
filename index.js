// Star Wars API

document.addEventListener("DOMContentLoaded", () => {

const contentDiv = document.getElementById("content");    
const charactersButton = document.getElementById("charactersBtn");
const starshipsButton = document.getElementById("starshipsBtn");

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

fetchData();

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