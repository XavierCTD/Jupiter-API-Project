// Star Wars API

const starWarsPlanets = "https://www.swapi.tech/api/planets/1/";

fetch(starWarsPlanets)
  .then((repsonse) => {
    if(!response.ok) {
      throw new error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((Planets) => {
    console.log(Planets);

    const planetName = document.getElementById('navigation');
    const navigationByName = planetName.querySelector('div');

    for(let i = 0; i < Planets.length; i++) {
      const planetDirection = document.createElement('li');
      planetDirection.innerText = Planets[i].name;
      navigationByName.appendChild(planetDirection);
    }
  })

  .catch((error) => {
    console.error('There was a problem with the fetch sequence:', error);
    const planetName = document.getElementById('projects');
    planetName.innerText = 'ERROR: Cannot load API'
  }
