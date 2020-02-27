import {films} from '../dat/films.js'
import {people} from '../data/people.js'
import {starships} from '../data/starships.js'

const greetingDiv = document.querySelector('.greeting')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')

const maleCharacters = people.filter(person => person.gender ==="male")
console.log(maleCharacters)
let counter = 1

people.forEach(person => {
let anchorWrap = document.createElement("a")
anchorwrap.href = "#"

let imageItem = document.createElement("img")
imageItem.src = `https://starwars-visualguide.com/assets/img/character/${counter}.jpg`

//add some way to handle clicks on image
imageItem.addEventListener("click", (event) => {
    console.log(event)
})
anchorWrap.appendChild(imageItem)
greetingDiv.appendChild(anchorWrap)
counter++
})