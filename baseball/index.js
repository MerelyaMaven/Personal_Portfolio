function getBaseballData(url) {
    let baseballGrid = document.querySelector('.baseballGrid')
    fetch(url).then(function(response) {
        response.json().then(function (data) {
            console.log(data)
            //baseballGrid.textContent = data.name
        })
    })
}

getBaseballData('https://fantasybaseballnerd.com/service/players')

var card = document.querySelector('.card')
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
})