import { people } from '../data/people.js'

const greetingDiv = document.querySelector('.greeting')

const castList = document.createElement("ul")

let counter = 1
people.forEach(person => {
    let listItem = document.createElement("li") 
    listItem.textContent = person.name
    castList.appendChild(listItem)

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src =  `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    
    //Add user clicks
    imageItem.addEventListener("click", () => {
        console.log("It worked")
    })
    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter++
});
greetingDiv.appendChild(castList)
