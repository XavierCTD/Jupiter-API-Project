// Star Wars API

fetch('https://swapi.dev/api/people/1')
    .then(response => {
        if(!response.ok) {
            throw new Error('API request failed.')
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('An error occurred:', error)
    });
