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
            let Type = data.types;
            let stats = data.stats;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            pokeNom (pokeN);
            pokeType(Type);
            pokeStats(data.stats);
            console.log(pokeImg);
            console.log(pokeN);
            console.log(Type);
            console.log(stats);
        }
    });
 }

 const pokeImage = (url) =>{
    const pokePhoto =  document.getElementById("pokeImg");
    pokePhoto.src = url;
 }

 const pokeData = (abilities) =>{
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    removeChildNodes(pokeAbilities)
    for (let i = 0; i < abilitiesName.length; i++){
        const li = document.createElement('li');
        li.textContent = abilitiesName[i];
        pokeAbilities.appendChild(li);
        //pokeAbilities.innerHTML = 
    }
    console.log(abilitiesName);
    console.log(abilitiesName.length);
}

 const pokeNom = (pokeNomb) =>{
    const pokeNombre = document.getElementById("pokeNombre");
    pokeNombre.textContent = pokeNomb;
 }

 const pokeType = (pokeType) =>{
    const pokemonType = document.getElementById("pokeType");
    const typeName = pokeType.map(item => item.type.name);
    pokemonType.innerHTML = "Tipo: " + typeName[0];
 }

 const pokeStats = (stats) =>{
    const pokeSta = document.getElementById("stats");
    const stristats = stats.map(item => item.base_stat);
    //pokeSta.innerHTML = stristats;
    hp.innerHTML = "Hp: " + stristats[0];
    attack.innerHTML = "Atk: " + stristats[1];
    speed.innerHTML = "Sp: " + stristats[5];
    console.log(stristats);
 }
 function removeChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
 }
 
