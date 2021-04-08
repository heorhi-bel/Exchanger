var request = new XMLHttpRequest();
var urlAdress = " https://v6.exchangerate-api.com/v6/40d62e170c028be72b38b1b1/latest/USD";
request.open('GET' , urlAdress);
request.responseType = 'json'
request.send();

request.onload = function(){
    var currencies = request.response;
    console.log(currencies)
    setNameOfDropdown(currencies)
}


function setNameOfDropdown(currency){
    let actualLiEl = document.querySelector('.active');
    
    let dropdownEl = document.querySelector('.dropdown-toggle')
    dropdownEl.textContent = currency.base_code;
    
    let dropdownMenuEl = document.querySelector('.dropdown-menu')
    dropdownMenuEl.addEventListener('click', function(event){
        console.log('click')
        actualLiEl.classList.remove('active')
        actualLiEl = event.target
        actualLiEl.classList.add('active')

    })
}