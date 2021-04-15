/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/parts/spinnerAdd.js":
/*!*********************************!*\
  !*** ./src/parts/spinnerAdd.js ***!
  \*********************************/
/***/ ((module) => {

async function spinnerAdd(){
    let tbodyEl = document.body.querySelector('table>tbody')
    let theadEl = document.body.querySelector('table>thead')
    let spinnerEl = document.body.querySelector('.spinner-border')

    spinnerEl.classList.remove('visually-hidden');
    tbodyEl.classList.add('visually-hidden')
    theadEl.classList.add('visually-hidden')
}

module.exports = spinnerAdd;

/***/ }),

/***/ "./src/parts/spinnerRemove.js":
/*!************************************!*\
  !*** ./src/parts/spinnerRemove.js ***!
  \************************************/
/***/ ((module) => {

async function spinnerRemove(){
    let tbodyEl = document.body.querySelector('table>tbody')
    let theadEl = document.body.querySelector('table>thead')
    let spinnerEl = document.body.querySelector('.spinner-border')
    
    spinnerEl.classList.add('visually-hidden');
    tbodyEl.classList.remove('visually-hidden')
    theadEl.classList.remove('visually-hidden')
}

module.exports = spinnerRemove;

/***/ }),

/***/ "./src/parts/tableFill.js":
/*!********************************!*\
  !*** ./src/parts/tableFill.js ***!
  \********************************/
/***/ ((module) => {

function tableFill(currency){
    let tbodyEl = document.body.querySelector('table>tbody')

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

module.exports = tableFill;

/***/ }),

/***/ "./src/parts/updating.js":
/*!*******************************!*\
  !*** ./src/parts/updating.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function updating(url){
    let dropdownEl = document.querySelector('.dropdown-toggle'),
        firstThEl = document.querySelector('.changing-name'),
        alertEl = document.body.querySelector('.alert'),

        tableFill = __webpack_require__(/*! ./tableFill */ "./src/parts/tableFill.js"),
        spinnerAdd = __webpack_require__(/*! ./spinnerAdd */ "./src/parts/spinnerAdd.js"),
        spinnerRemove = __webpack_require__(/*! ./spinnerRemove.js */ "./src/parts/spinnerRemove.js")

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
        tableFill(currency)
    })
}

module.exports = updating;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
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

    let spinnerAdd = __webpack_require__(/*! ./parts/spinnerAdd.js */ "./src/parts/spinnerAdd.js"),
        spinnerRemove = __webpack_require__(/*! ./parts/spinnerRemove.js */ "./src/parts/spinnerRemove.js"),
        tableFill = __webpack_require__(/*! ./parts/tableFill.js */ "./src/parts/tableFill.js"),
        updating = __webpack_require__(/*! ./parts/updating.js */ "./src/parts/updating.js");

    spinnerAdd();
    spinnerRemove();
    updating(urlAdress);

 
    // <- main functionality ->
    // <- main functionality ->
    if(sessionStorage.key(0) != null && sessionStorage.key(1) != null ){
        updating( sessionStorage.getItem('currencyChoice'))
    }else{ 
        updating(urlAdress); 
    }

    dropdownMenuEl.addEventListener('click', function(event){
        actualLiEl.classList.remove('active')
        actualLiEl = event.target
        actualLiEl.classList.add('active')
        dropdownEl.textContent = event.target.textContent.trim()

        urlAdress = urlAdress.slice(0, 68) + event.target.textContent.trim()
        updating(urlAdress)
        
    })
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map