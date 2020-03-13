import { people } from '../data/people.js'

const greetingDiv = document.querySelector('.greeting')

const castList = document.createElement("ul")

const listItem1 = document.createElement("li")

castList.appendChild(listItem1)

greetingDiv.appendChild(castList)