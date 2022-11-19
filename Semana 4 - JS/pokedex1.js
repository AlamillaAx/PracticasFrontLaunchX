 //Fetch es para consultas consulta 
const fetchPokemon = () =>{
   const pokeNameInput = document.getElementById("pokeName");
   let pokeName = pokeNameInput.value;
   pokeName = pokeName.toLowerCase();
   const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
   fetch(url).then((res) =>{
       if (res.status != "200"){
           console.log(res);
           pokeImage("./assets/img/desco.png")
       }
       else{
           return res.json();
       }
   }).then((data) => {
       if(data){
           console.log(data);
           let pokeImg = data.sprites.front_default;
           let pokeInfo = data.abilities;
           let pokeN = data.name;
           pokeImage(pokeImg);
           pokeData(pokeInfo);
           pokeN (pokeN)
           console.log(pokeImg);
       }
   });
}

const pokeImage = (url) =>{
   const pokePhoto = document.getElementById("pokeImg");
   pokePhoto.src = url;
}

const pokeData = (abilities) =>{
   const pokeAbilities = document.getElementById("abilities");
   const abilitiesName = abilities.map(item => item.ability.name);
   pokeAbilities.innerHTML = abilitiesName[0];
   pokeAbilities.innerHTML = abilitiesName[1];
}

const PokeN = (pokeNombre) =>{
   const PokeName 
}