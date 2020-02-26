import {films} from '../dat/films.js'
import {people} from '../data/people.js'
import {starships} from '../data/starships.js'

const greetingDiv = document.querySelector('.greeting')

const castList = document.createElement("ul")

let counter = 1

people.forEach(person => {
let listItem = textContent = person.name
listItem.textContentn = person.name
castList.appendChild(listItem)

let anchorWrap =document.createElement("a")
anchorwrap.href = "#"

let imageItem = document.createElement ("img")
imageItem.scr = "https://starwars-visualguide.com/#/characters/${counter}.jpg"

//add some way to handle clicks on image
imageItem.addEventListener("click", () => {
    console.log("it worked")
})
anchorWrap.appendChild(imageItem)
greetingDiv.appendChild(anchorWrap)
counter++
})

greetingDiv.appendChild(castList)