async function spinnerRemove(){
    spinnerEl.classList.add('visually-hidden');
    tbodyEl.classList.remove('visually-hidden')
    theadEl.classList.remove('visually-hidden')
}

module.exports = spinnerRemove;