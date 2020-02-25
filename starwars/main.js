import {films} from '../dat/films.js'
import {people} from '../data/people.js'

const greetingDiv = documetn.querySelector('.greeting')

const castList = document.createElement("ul")

let counter = 1

people.forEach(person => {
let listItem = textContent = person.name
listItem.textContentn = person.name
castList.appendChild(listItem)
})

let imageItem = document.createElement ("img")
imageItem.scr = "https://starwars-visualguide.com/#/characters/${counter}.jpg"
imageItem.appendChild(listItem)
counter++

greetingDiv.appendChild(castList)