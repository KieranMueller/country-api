let btn = document.querySelector(".btn")
let input = document.querySelector(".input")
let countryName = document.querySelector(".list-item0")
let capital = document.querySelector(".list-item1")
let abbreviation = document.querySelector(".list-item2")
let population = document.querySelector(".list-item3")
let region = document.querySelector(".list-item4")

function getCapital(country) {
    fetch(`https://jsonmock.hackerrank.com/api/countries?name=${country}`)
    .then(response => response.json())
    .then(data => {
        countryName.textContent = `Country: ${data.data[0].name}`
        capital.textContent = `Capital: ${data.data[0].capital}`
        abbreviation.textContent = `Abbreviation: ${data.data[0].alpha2Code}`
        population.textContent = `Population: ${data.data[0].population}`
        region.textContent = `Region: ${data.data[0].region}`
        console.log(data)
    })
}

btn.addEventListener("click", function() {
    getCapital(input.value)
    input.value = ""
})
