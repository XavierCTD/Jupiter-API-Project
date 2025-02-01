// Star Wars API

const contentDiv = document.getElementById("content");
const charactersBtn = document.getElementById("charactersBtn");
const starshipsBtn = document.getElementById("starshipsBtn");

charactersBtn.addEventListener("click", () => fetchData("people"));
starshipsBtn.addEventListener("click", () => fetchData("starships"));

async function fetchData(endpoint) {
    try {
        contentDiv.innerHTML = "Loading...";
        const response = await fetch(`https://swapi.dev/api/${endpoint}/`);
        if (!response.ok) throw new Error("API error");
        
        const data = await response.json();
        displayData(data.results, endpoint);
    } catch (error) {
        contentDiv.innerHTML = `<p>Error loading data: ${error.message}</p>`;
    }
}

function displayData(items, type) {
    contentDiv.innerHTML = ""; 
    items.slice(0, 5).forEach(item => {  
        const div = document.createElement("div");
        div.innerHTML = type === "people" 
            ? `<h3>${item.name}</h3><p>Height: ${item.height} cm</p>`
            : `<h3>${item.name}</h3><p>Model: ${item.model}</p>`
        contentDiv.appendChild(div);
    });
}
