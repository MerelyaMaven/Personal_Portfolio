import {films} from '../dat/films.js'
import {people} from '../data/people.js'
import {starships} from '../data/starships.js'

const greetingDiv = document.querySelector('.greeting')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')

const maleCharacters = people.filter(person => person.gender ==="male")
populateDOM(maleCharacters)

const femaleCharacters = people.filter(person => person.gender ==="female")
console.log(femaleCharacters.lenth)

let counter = 1

function populateDOM(){
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

maleButton.addEventListener("click", (event) => {
    console.log("clicked on maleButton")
})
}