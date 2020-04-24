async function getAPIData(url) {
	try {
		const response = await fetch(url)
		const data = await response.json()
		return data
	}
		catch (error) {
			console.error(error)
		}
}

//now, use the async getAPIData function
function loadPage() {
getAPIData('https://pokeapi.co/api/v2/pokemon?offset=5&limit=50"').then(async (data) => {
	for (const pokemon of data.results) {
		await getAPIData(pokemon.url).then((pokeData) => {
			populatePokeCard(pokeData)
		})
	}
})
}
let pokemonGrid = document.querySelector('.pokemonGrid')
let startButton = document.querySelector('#startButton')
let newButton = document.querySelector('#newButton')
//let logoImage = document.createElement('img')
	//logoImage.src = '/images/pokemonlogo.png'

startButton.addEventListener('click', () => {
	loadPage(
	)
})
newButton.addEventListener('click', () => {
	addPokemon(
	)
})


function populatePokeCard(singlePokemon) {
	let pokeScene = document.createElement('div')
	pokeScene.className = 'scene'
	let pokeCard = document.createElement('div')
	pokeCard.className = 'card'
	pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'),
	)
	let pokeFront = populateCardFront(singlePokemon)
	let pokeBack = populateCardBack(singlePokemon)

	pokeCard.appendChild(pokeFront)
	pokeCard.appendChild(pokeBack)
	pokeScene.appendChild(pokeCard)
	pokemonGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
	let cardFront = document.createElement('div')
	cardFront.className = 'card__face card__face--front'
	let frontImage = document.createElement('img')
	frontImage.src = `/images/${getImageFileName(pokemon)}.png`
	let frontLabel = document.createElement('p')
	frontLabel.textContent = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`
	cardFront.appendChild(frontImage)
	cardFront.appendChild(frontLabel)
	return cardFront
  }

  function getImageFileName(pokemon) {
	if (pokemon.id < 10) {
	  return `00${pokemon.id}`
	} else if (pokemon.id > 9 && pokemon.id < 100) {
	  return `0${pokemon.id}`
	} else if (pokemon.id > 809) {
	  return `903`
	}
  }
  
  
  function populateCardBack(pokemon) {
	let cardBack = document.createElement('div')
	cardBack.className = 'card__face card__face--back'
	let backLabel = document.createElement('h2')
	backLabel.textContent = 'PokePowers'
	let heightLabel = document.createElement('p')
	heightLabel.textContent = `Height: ${pokemon.height}`
	let weightLabel = document.createElement('p')
	weightLabel.textContent = `Weight: ${pokemon.weight}`
	let abilityLabel = document.createElement('p')
	abilityLabel.textContent = 'Abilities'
	let abilityList = document.createElement('ul')
	pokemon.abilities.forEach(ability => {
	  let abilityName = document.createElement('li')
	  abilityName.textContent = ability.ability.name
	  abilityList.appendChild(abilityName)
	  })

	cardBack.appendChild(backLabel)
	cardBack.appendChild(heightLabel)
	cardBack.appendChild(weightLabel)
	cardBack.appendChild(abilityLabel)
	cardBack.appendChild(abilityList)
	
	return cardBack
  }
  




  class Pokemon {
	constructor(height, weight, name, abilities) {
	  this.height = height
	  this.weight = weight
	  this.name = name
	  this.abilities = abilities
	  this.id = 900
	}
  }
  
  function addPokemon() {
	let Aurora = new Pokemon(67, 135, 'aurora',
	  [
		{
		  ability: {
		  name: 'Invisibility'
		  }
		},
		{
		  ability: {
		  name: 'Flight'
		  }
		},
		{
		  ability: {
		  name: 'Nurture'
		  }
		}
	])
	populatePokeCard(Aurora)
  }