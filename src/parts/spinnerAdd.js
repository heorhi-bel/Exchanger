async function spinnerAdd(){
    spinnerEl.classList.remove('visually-hidden');
    tbodyEl.classList.add('visually-hidden')
    theadEl.classList.add('visually-hidden')
}

module.exports = spinnerAdd;