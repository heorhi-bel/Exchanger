"use strict"

let actualLiEl = document.querySelector('.active');
let dropdownEl = document.querySelector('.dropdown-toggle')
let dropdownMenuEl = document.querySelector('.dropdown-menu')
let firstThEl = document.querySelector('.changing-name');
let secondThEl = document.querySelector('.changing-rate');

let urlAdress = " https://v6.exchangerate-api.com/v6/40d62e170c028be72b38b1b1/latest/USD";

function apiUpdate(url){
    fetch(url)
    .then(response => response.json())
    .then(currency => {
        console.log(currency)
        dropdownEl.textContent = currency.base_code; 
        firstThEl.textContent = currency.base_code + ' Exchange rate'
        secondThEl.textContent =  currency.base_code;
        fillTable(currency)
  })
}

function fillTable(currency){
    let tbodyEl = document.body.querySelector('table>tbody')
    // Cleaning tbody
    tbodyEl.innerHTML = ' ';
    // Create Map with Object's and fill table in the tbody
    let currenciesMap = new Map(Object.entries(currency.conversion_rates))
    for( var cur of currenciesMap){
        tbodyEl.insertAdjacentHTML('beforeEnd', `
            <tr>                
                <th scope="row"> ${cur[0]} </th>    
                <td> ${cur[1]} </td>            
            </tr>        
        `);
    }
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

