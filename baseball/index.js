function getPokeData(url) {
	fetch(url).then(function (response) {
		response.json().then(function (data) {
			console.log(data)
			populatePokeCards(data)
		})
	})
}

let pokemonGrid = document.querySelector('.pokemonGrid')

getPokeData('https://pokeapi.co/api/v2/pokemon/1/')

function populatePokeCards(pokeArray) {
	let pokeScene = document.createElement('div')
	pokeScene.className = 'scene'
	let pokeCard = document.createElement('div')
	pokeCard.className = 'card'
	pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))
	let pokeFront = document.createElement('div')
	pokeFront.className = 'card__face card__face--front'
	pokeCard.textContent = 'front'
	let pokeBack = document.createElement('div')
	pokeBack.className = 'card__face card__face--back'
	pokeBack.textContent = 'back'

	pokeCard.appendChild(pokeFront)
	pokeCard.appendChild(pokeBack)
	pokeScene.appendChild(pokeCard)
	pokemonGrid.appendChild(pokeScene)
}





