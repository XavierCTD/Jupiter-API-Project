// Star Wars API

fetch('https://www.swapi.tech/api/planets/1/')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching data:', error));
