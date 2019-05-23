let fact = document.querySelector('#fact')
let factText = document.querySelector('#factText')

let numberInput = document.querySelector('#numberInput')
// numberInput.addEventListener('click', getFactFetch);

// function getFactAjax(){
//   let number = numberInput.value;
//   console.log(number);
//   let xhr = new XMLHttpRequest()
//   xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${number}/`)
//   xhr.onload = function(){
//     if(this.status == 200 && number != ''){
//       console.log(this.responseText);
//       fact.style.display = 'block'
//       factText.innerText = this.responseText
//     }
//   }
//   xhr.send()
// }

function getFactFetch(){
    let number = numberInput.value;
    console.log(number);

    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(response => response.text())
    .then(data => {
      if(number != ''){
        fact.style.display = 'block'
        let info = JSON.parse(data)
        let ability = info["abilities"][1]["ability"]["name"]
        factText.innerText = info
        console.log(ability);

      }
    })
    .catch(err => console.log(err))
}
