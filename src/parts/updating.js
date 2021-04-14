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

module.exports = apiUpdate;