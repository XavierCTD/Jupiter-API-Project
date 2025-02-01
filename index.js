// Star Wars API

async function fetchData(endpoint) {
    try {
        contentDiv.innerHTML = "Loading...";
        const response = await fetch(`https://swapi.dev/api/`);
        if (!response.ok) throw new Error("API error");
        
        const data = await response.json();
        displayData(data.results, endpoint);
    } catch (error) {
        contentDiv.innerHTML = `<p>Error loading data: ${error.message}</p>`;
    }
}
