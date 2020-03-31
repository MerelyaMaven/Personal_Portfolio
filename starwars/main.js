import { people } from '../data/people.js'

const greetingDiv = document.querySelector('.greeting')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const nonbianaryButton = document.querySelector('#nonbianaryButton')

const nonbianaryCharacters = people.filter(person => {
    if (person.gender === "hermaphrodite" 
    || person.gender === "n/a"
    || person.gender === "none")
    return person
})
//console.log(nonbianaryCharacters)

maleButton.addEventListener("click", (event) =>{
    populateDom(people.filter(person => person.gender === "male"))
} )

femaleButton.addEventListener("click", (event) =>{
    populateDom(people.filter(person => person.gender === "female"))
} )

nonbianaryButton.addEventListener("click", (event) =>{
    populateDom(nonbianaryCharacters)
} )

function getCharNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
      
   if(url.charAt(start) === '/'){
      start++ 
   }
      return url.slice(start, end)
   
}
//getCharNumber("https://swapi.co/api/people/1/")

function populateDom(characters) {
characters.forEach(person => {
    
    let charNum = getCharNumber(person.url)

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src =  `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

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
    
});
}
