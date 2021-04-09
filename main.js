"use strict"

let actualLiEl = document.querySelector('.active');
let dropdownEl = document.querySelector('.dropdown-toggle')
let dropdownMenuEl = document.querySelector('.dropdown-menu')
let firstThEl = document.querySelector('.changing-name');
let tbodyEl = document.body.querySelector('table>tbody')
let theadEl = document.body.querySelector('table>thead')
let spinnerEl = document.body.querySelector('.spinner-border')
let alertEl = document.body.querySelector('.alert')

let urlAdress = " https://v6.exchangerate-api.com/v6/40d62e170c028be72b38b1b1/latest/USD";

function apiUpdate(url){
    spinnerAdd();
    fetch(url)
    .then(
        successResponse => {
          if (successResponse.status != 200) {
            alertEl.classList.remove('visually-hidden')
            return null;
          } else {
                return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
    )
    .then(currency => {
        // <--- RENEW session storage --->
        sessionStorage.setItem('currencyChoice', url);
        // <--- SPINNER REMOVER WITH EASY DELAY --->
        setTimeout(() => {
            spinnerRemove();
        }, 100); 
        // <--- --->
        dropdownEl.textContent = currency.base_code; 
        firstThEl.textContent = currency.base_code + ' Exchange rate'
        fillTable(currency)
  })
}


function fillTable(currency){
    let i = 0;
    // Cleaning tbody
    tbodyEl.innerHTML = ' ';
    // Create Map with Object's and fill table in the tbody
    let currenciesMap = new Map(Object.entries(currency.conversion_rates))
    for( var cur of currenciesMap){
        // Condition for every 12'th element adding in the table
        if(!(i % 12 == 0)){
            i++
            continue;
        }
        //Adding new elemnt of conversion in the table
        tbodyEl.insertAdjacentHTML('beforeEnd', `
            <tr>                
                <th scope="row"> ${cur[0]} </th>    
                <td> ${cur[1]} </td>            
            </tr>        
        `);
         // condition for cyckle
         if(i<160){
            i++
        }else{ break; }
    }
}

async function spinnerRemove(){
    spinnerEl.classList.add('visually-hidden');
    tbodyEl.classList.remove('visually-hidden')
    theadEl.classList.remove('visually-hidden')
}
async function spinnerAdd(){
    spinnerEl.classList.remove('visually-hidden');
    tbodyEl.classList.add('visually-hidden')
    theadEl.classList.add('visually-hidden')
}

// <- main functionality ->
// <- main functionality ->
// <- main functionality ->
// sessionStorage.setItem('key-test-Heorhi', 123)
// alert(sessionStorage.key(0))
if(sessionStorage.key(0) != null && sessionStorage.key(1) != null ){
    apiUpdate( sessionStorage.getItem('currencyChoice'))
}else{ 
    apiUpdate(urlAdress); 
}

dropdownMenuEl.addEventListener('click', function(event){
    actualLiEl.classList.remove('active')
    actualLiEl = event.target
    actualLiEl.classList.add('active')
    dropdownEl.textContent = event.target.textContent.trim()

    urlAdress = urlAdress.slice(0, 68) + event.target.textContent.trim()
    apiUpdate(urlAdress)
    
})

