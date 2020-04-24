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
getAPIData('https://pokeapi.co/api/v2/pokemon?offset=5&limit=50"').then((data) => {
	for (const pokemon of data.results) {
		getAPIData(pokemon.url).then((pokeData) => {
			populatePokeCard(pokeData)
		})
	}
})

let pokemonGrid = document.querySelector('.pokemonGrid')

//getPokeData('https://pokeapi.co/api/v2/pokemon?offset=4&limit=50"')



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
	cardFront.textContent = pokemon.name
	let frontImage = document.createElement('img')
	frontImage.src = `/images/${pokemon.id}.png`
	cardFront.appendChild(frontImage)
	return cardFront
  }
  
  function populateCardBack(pokemon) {
	let cardBack = document.createElement('div')
	cardBack.className = 'card__face card__face--back'
	cardBack.textContent = 'Abilities'
	let abilityList = document.createElement('ul')
	pokemon.abilities.forEach(ability => {
	  let abilityName = document.createElement('li')
	  abilityName.textContent = ability.ability.name
	  abilityList.appendChild(abilityName)
	  })
	cardBack.appendChild(abilityList)
	return cardBack
  }
  




