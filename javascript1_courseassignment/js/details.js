const detailContainer = document.querySelector("#caractersDetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.pokemontcg.io/v1/cards/" + "id";

console.log(url);

async function fetchCaracters() {
  const response = await fetch(url);

  const details = await response.json();
  console.log(details);

  detailsHtml(details);
}

fetchCaracters();

function detailsHtml(details) {
  detailContainer.innerHTML += `
                            <div class="card-details">
                                <h2>${details.name}</h2>                           
                                <img src="${details.imageUrl}">
                                <div class="pokeindex">Index: ${details.nationalPokedexNumber}</div>
                                <div class="poketype">Type: ${details.types}</div> 
                            </div>
                                `;
}
