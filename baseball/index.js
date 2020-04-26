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
let i=0
newButton.addEventListener('click', () => {
		populatePokeCard(
		randomArray[i]
	)
	i++
	if (i > randomArray.length) i = 0
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
	let frontLabel = document.createElement('h3')
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
	  return pokemon.id
	}
  }
  
  
  function populateCardBack(pokemon) {
	let cardBack = document.createElement('div')
	cardBack.className = 'card__face card__face--back'
	let backLabel = document.createElement('h2')
	backLabel.textContent = 'PokePowers'
	let idLabel = document.createElement('h1')
	idLabel.textContent = pokemon.id
	let heightLabel = document.createElement('p')
	heightLabel.textContent = `Height: ${pokemon.height}`
	let weightLabel = document.createElement('p')
	weightLabel.textContent = `Weight: ${pokemon.weight}`
	let abilityList = document.createElement('ul')
	abilityList.textContent = 'Abilities'
	pokemon.abilities.forEach(ability => {
	  let abilityName = document.createElement('li')
	  abilityName.textContent = ability.ability.name
	  abilityList.appendChild(abilityName)
	  })

	cardBack.appendChild(backLabel)
	cardBack.appendChild(idLabel)
	cardBack.appendChild(heightLabel)
	cardBack.appendChild(weightLabel)
	
	cardBack.appendChild(abilityList)
	
	return cardBack
  }
  
  
  class Pokemon {
	constructor(height, weight, name, abilities, id) {
	  this.height = height
	  this.weight = weight
	  this.name = name
	  this.abilities = abilities
	  this.id = getRandomInt(900, 905)
	}
  }

  function getRandomInt(min, max) {
	   min = Math.ceil(min);
	   max = Math.floor(max);
	   return Math.floor(Math.random() * (max - min + 1)) + min; 
	}

  let randomArray = []
  
  function addPokemon(height, weight, name, ability1, ability2, ability3) {
	let Aurora = new Pokemon(height, weight, name,
	  [
		{
		  ability: {
		  name: ability1
		  }
		},
		{
		  ability: {
		  name: ability2
		  }
		},
		{
		  ability: {
		  name: ability3
		  }
		}
	])
	return Aurora
	//populatePokeCard(Aurora)
  }
  let anything = addPokemon(67, 135, 'arora', 'invisibility', 'flying', 'nurture')
  randomArray = [
	addPokemon(67, 135, 'arora', 'invisibility', 'flying', 'nurture'),
	addPokemon(67, 135, 'flora', 'invisibility', 'flying', 'nurture'),
	addPokemon(67, 135, 'merryweather', 'invisibility', 'flying', 'nurture'),
	addPokemon(67, 135, 'merry', 'invisibility', 'flying', 'nurture')
  ]
console.log(randomArray)