import { people } from '../data/people.js'

const greetingDiv = document.querySelector('.greeting')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const nonbianaryButton = document.querySelector('#nonbianaryButton')

const maleCharacter = people.filter(person => person.gender === "male")
console.log(maleCharacter)

const femaleCharacter = people.filter(person => person.gender === "female")
console.log(femaleCharacter)

const nonbianaryCharacter = people.filter(person => {
    if (person.gender === "hermaphrodite" || person.gender === "n/a")
    return person
})
console.log(nonbianaryCharacter)
let counter = 1
people.forEach(person => {
    
    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src =  `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`

    imageItem.addEventListener('error', (event) => {
        //console.log(`${event.type}: Loading image\n`)
        //console.log(event)
        imageItem.hidden = true
        //imageItem.src = '../images/starwars.jpg'
    })
    
    //Add user clicks
    imageItem.addEventListener("click", () => {
        console.log("It worked")
    })
    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter++
});

maleButton.addEventListener("click", () =>{
    console.log("clicked on male button")
} )