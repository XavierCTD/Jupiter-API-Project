// Star Wars API

const baseURL = "https://swapi.tech/api/";
const contentDiv = document.getElementById("content");

document.getElementById("people-nav").addEventListener("click", () => fetchData("people"));
document.getElementById("planets-nav").addEventListener("click", () => fetchData("planets"));

async function fetchData(endpoint) {
  try {
    contentDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch(`${baseURL}${endpoint}/`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    displayData(endpoint, data.results);
  } catch (error) {
    contentDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function displayData(endpoint, results) {
  contentDiv.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);
  contentDiv.appendChild(title);

  const list = document.createElement("ul");
  results.forEach((item) => {
    const listItem = document.createElement("li");
    if (endpoint === "people") {
      listItem.textContent = `Name: ${item.name}, Gender: ${item.gender}`;
    } else if (endpoint === "planets") {
      listItem.textContent = `Name: ${item.name}, Climate: ${item.climate}`;
    }
    list.appendChild(listItem);
  });
  contentDiv.appendChild(list);
}

