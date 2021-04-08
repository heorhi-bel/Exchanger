"use strict"

let dropdownMenuEl = document.querySelector('.dropdown-menu')
let dropdownEl = document.querySelector('.dropdown-toggle')
let actualLiEl = document.querySelector('.active');

let urlAdress = " https://v6.exchangerate-api.com/v6/40d62e170c028be72b38b1b1/latest/USD";

function apiUpdate(url){
    fetch(url)
    .then(response => response.json())
    .then(currency => {
        console.log(currency)
        dropdownEl.textContent = currency.base_code;  
        
  })
}

apiUpdate(urlAdress);

  dropdownMenuEl.addEventListener('click', function(event){
    actualLiEl.classList.remove('active')
    actualLiEl = event.target
    actualLiEl.classList.add('active')
    dropdownEl.textContent = event.target.textContent.trim()

    urlAdress = urlAdress.slice(0, 68) + event.target.textContent.trim()
    console.log(urlAdress)
    apiUpdate(urlAdress)
    
})