document.addEventListener('DOMContentLoaded', function(){


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

    let spinnerAdd = require("./parts/spinnerAdd.js"),
        spinnerRemove = require("./parts/spinnerRemove.js"),
        tableFill = require("./parts/tableFill.js"),
        updating = require("./parts/updating");

    spinnerAdd();
    spinnerRemove();
    tableFill();
    updating(urlAdress);

 
    // <- main functionality ->
    // <- main functionality ->
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
})
