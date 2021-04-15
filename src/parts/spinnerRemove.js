async function spinnerRemove(){
    let tbodyEl = document.body.querySelector('table>tbody')
    let theadEl = document.body.querySelector('table>thead')
    let spinnerEl = document.body.querySelector('.spinner-border')
    
    spinnerEl.classList.add('visually-hidden');
    tbodyEl.classList.remove('visually-hidden')
    theadEl.classList.remove('visually-hidden')
}

module.exports = spinnerRemove;