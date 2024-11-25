const url_api_pokemon = "https://pokeapi.co/api/v2/pokemon/?limit=50";

let contenedor = document.getElementById("pokeCtn");

let coleccion_pokemon = new Array();

const pedirPokemon = async ()=>{

    const resp = await fetch (url_api_pokemon)
    const data = await resp.json();

    console.log(data);

    data.results.forEach(pokemon => {
        
        ampliar_data(pokemon.url)

    });


} 


const ampliar_data = async (url) =>{

    const resp = await fetch (url)
    const data = await resp.json();

    let id = data.id;
    let name = data.name;
    let image = data.sprites.front_default;

    let pokemon_nuevo = new Pokemon(id,name,image);

    coleccion_pokemon.push(pokemon_nuevo);
    crearCard(pokemon_nuevo);


}

function crearCard(pokemon){

let newDiv = document.createElement("div");
newDiv.innerHTML = `
                        <h2>
                            ${pokemon.getTitle()}
                        </h2>
                        <image src = ${pokemon.image}> </image>


                    `

contenedor.appendChild(newDiv);                    


}


pedirPokemon();