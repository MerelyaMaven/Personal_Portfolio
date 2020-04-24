const allPokemon =[]

function getPokeData(url) {
	fetch(url).then(function (response) {
		response.json().then(function (pokeData) {
			console.log(pokeData.results)
			const pokeMap = pokeData.results.map(pokemon => {
				return fetch(pokemon.url).then(resData => {
					resData.json().then(pokeJson => {
						allPokemon.push(pokeJson)
					})
					
				})
			})
			//console.log(pokeMap)
			//populatePokeCards(pokedata.results)
		})
	})
}

let pokemonGrid = document.querySelector('.pokemonGrid')

getPokeData('https://pokeapi.co/api/v2/pokemon?offset=5&limit=50"')

console.log(allPokemon)

populatePokeCards(allPokemon)

function populatePokeCards(pokeArray) {
	pokeArray.forEach(pokeArray => {	
	let pokeScene = document.createElement('div')
	pokeScene.className = 'scene'
	let pokeCard = document.createElement('div')
	pokeCard.className = 'card'
	pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'),
	)
	let pokeFront = document.createElement('div')
	pokeFront.className = 'card__face card__face--front'
	pokeFront.textContent = 'front'
	let pokeBack = document.createElement('div')
	pokeBack.className = 'card__face card__face--back'
	pokeBack.textContent = 'back'

	pokeCard.appendChild(pokeFront)
	pokeCard.appendChild(pokeBack)
	pokeScene.appendChild(pokeCard)
	pokemonGrid.appendChild(pokeScene)
})
}
/*<div class="scene">
<div class="card">
<div class="card__face card__face--front">front</div>
<div class="card__face card__face--back">Back</div>
</div>
</div>*/




