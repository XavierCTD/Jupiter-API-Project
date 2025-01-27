// Star Wars API

document.addEventListener('DOMContentLoaded', () => {
  fetch("https://www.swapi.tech/api/planets/1/")
    .then((repsonse) => {
      if(!response.ok) {
        throw new error(`HTTP Error! Status: ${response.status}`);
      }
     return response.json();
    })
    .then((Planets) => {
      console.log('API response:', Planets);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch sequence:', error);
    });
});
