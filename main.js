let fact = document.querySelector('#fact')
let factText = document.querySelector('#factText')

let numberInput = document.querySelector('#numberInput')
// numberInput.addEventListener('click', getFactFetch);

class Pokemon {
  constructor(hp,atk,def,satk,sdef,spe){
    // this.type1 = type1
    // this.type2 = type2
    // this.ability1 = ability1
    // this.ability2 = ability2
    // this.ability3 = ability3
    this.hp = hp
    this.atk = atk
    this.def = def
    this.satk = satk
    this.sdef = sdef
    this.spe = spe
  }
}

function getFactFetch() {
  let number = numberInput.value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let info = JSON.parse(this.responseText)
     pokemon = new Pokemon(info["stats"][5]["base_stat"],info["stats"][4]["base_stat"],info["stats"][3]["base_stat"],info["stats"][2]["base_stat"],info["stats"][1]["base_stat"],info["stats"][0]["base_stat"] )
    fact.style.display = 'block'
    let str = 'HP: '  + pokemon.hp + ' Attack: ' + pokemon.atk + 'Defense: ' + pokemon.def + ' Sp.Attack: ' + pokemon.satk + ' Sp.Defense: ' + pokemon.sdef + ' Speed: ' + pokemon.spe
    factText.innerText = str
     console.log(info);
   }
  };
  xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${number}/`, true);
  xhttp.send();
}


//
// function getFactFetch(number){
//     // let number = numberInput.value;
//     // console.log(number);
//
//     fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
//     .then(response => response.text())
//     .then(data => {
//       if(this.status == 200){
//         fact.style.display = 'block'
//         let info = JSON.parse(data)
//         factText.innerText = info
//         console.log(data);
//         pokemon = new Pokemon(info["stats"][5]["stat"]["hp"],info["stats"][4]["stat"]["attack"],info["stats"][3]["stat"]["defense"])
//       }
//     })
//     .catch(err => console.log(err))
// }
