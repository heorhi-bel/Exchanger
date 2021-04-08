"use strict"

let urlAdress = " https://v6.exchangerate-api.com/v6/40d62e170c028be72b38b1b1/latest/USD";

let currancies = fetch(urlAdress)
    .then( response => {
        return response.json();
    })

console.log(currancies)

setNameOfDropdown(currancies)

function setNameOfDropdown(currency){
    let actualLiEl = document.querySelector('.active');
    
    let dropdownEl = document.querySelector('.dropdown-toggle')
    dropdownEl.textContent = currency.base_code;
    
    let dropdownMenuEl = document.querySelector('.dropdown-menu')
    dropdownMenuEl.addEventListener('click', function(event){
        actualLiEl.classList.remove('active')
        actualLiEl = event.target
        actualLiEl.classList.add('active')
        dropdownEl.textContent = event.target.textContent.trim()

        urlAdress = urlAdress.slice(0, 68) + event.target.textContent.trim()
        console.log(urlAdress)
        fetch(urlAdress)

    })
}
// request.onload = function(){
//     var currencies = request.response;
//     console.log(currencies)
//     setNameOfDropdown(currencies)
// }


// function setNameOfDropdown(currency){
//     let actualLiEl = document.querySelector('.active');
    
//     let dropdownEl = document.querySelector('.dropdown-toggle')
//     dropdownEl.textContent = currency.base_code;
    
//     let dropdownMenuEl = document.querySelector('.dropdown-menu')
//     dropdownMenuEl.addEventListener('click', function(event){
//         actualLiEl.classList.remove('active')
//         actualLiEl = event.target
//         actualLiEl.classList.add('active')
//         dropdownEl.textContent = event.target.textContent.trim()

//         urlAdress = urlAdress.slice(0, 68) + event.target.textContent.trim()
//         console.log(urlAdress)
//         request.open('GET', urlAdress)
//         request.send()

//     })
// }