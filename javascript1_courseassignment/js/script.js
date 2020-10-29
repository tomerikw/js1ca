const url = "https://api.pokemontcg.io/v1/cards";

const caracterContainer = document.querySelector("#caracters");

async function fetchCaracters() {
  const response = await fetch(url);

  const json = await response.json();

  console.log(json);

  const results = json.cards;

  results.forEach(function (caracters) {
    caracterContainer.innerHTML += `
                            <a href="details.html?id=${caracters.id}" class="card">                            
                            <div class="card-details">
                            <h2>${caracters.name}</h2>                           
                               <img src="${caracters.imageUrl}">
                                <div class="pokeindex">Index: ${caracters.nationalPokedexNumber}</div>
                                <div class="poketype">Type: ${caracters.types}</div> 
                            </div>
                            <a/>`;
  });
}
fetchCaracters();

//husk N/a på roboter må endres til en standard frase som f.eks not human//
