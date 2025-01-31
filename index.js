// Star Wars API

const contentDiv = document.getElementById("content");
const charactersBtn = document.getElementById("charactersBtn");
const starshipsBtn = document.getElementById("starshipsBtn");

charactersBtn.addEventListener("click", () => fetchData("people"));
charactersBtn.style.color = "white";
charactersBtn.style.background = "radial-gradient(rgb(10, 50, 225), rgba(50, 50, 50, 0), rgb(10, 50, 225))";
charactersBtn.style.border = "5px solid rgb(180, 185, 255)";
charactersBtn.style.borderRadius = "10px";
charactersBtn.style.cursor = "pointer";
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
            : `<h3>${item.name}</h3><p>Model: ${item.model}</p>`;
        div.style.color = "rgb(200, 225, 10)";
        div.style.border = "5px solid whitesmoke";
        div.style.borderRadius = "10px";
        div.style.margin = "0 auto";
        div.style.padding = "15px";
        contentDiv.appendChild(div);
    });
}
