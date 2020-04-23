import { senators } from '../data/senators.js'
import {removeChildren } from '../utils.js'

const senatorDiv = document.querySelector('.senators')
const seniorityButton = document.querySelector('#seniorityButton')

seniorityButton.addEventListener('click', () => {
birthdaySort()
})

function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
    let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
        seniority: parseInt(senator.seniority, 10)
        date_of_birth: parseInt(senator.date_of_birth, 10)
    }
})
}
function populateSenatorDiv(simpleSenators) {
    removeChildren
    simpleSenators.forEach(senator => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senator.party === 'ID') partyIcon.className ='fas fa-star'

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
        

    })
    
}

const filterSenators = (prop, value) => {
    return senators.filter(senator => {
        return senator[prop] === value
    })
}


const republicans = filterSenators('party', 'R')
const democrats = filterSenators('party', 'D')
const independent = filterSenators('party', 'ID')

const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

const missedVotes = getSimplifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)


//Sort by value
function senioritySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort(function (a, b,) {
    return parseInt(a.seniority) - parseInt(b.seniority)
})
    )}

//birthday sort
function birthdaySort () {
    populateSenatorDiv(getSimplifiedSenators(senators).sort(function (a, b,) {
    return parseInt(a.date_of_birth) - parseInt(b.date_of_birth)
})
    )}
    //by default on page load, wes show all senators unsorted
populateSenatorDiv(getSimplifiedSenators(senators))