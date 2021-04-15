async function spinnerAdd(){
    let tbodyEl = document.body.querySelector('table>tbody')
    let theadEl = document.body.querySelector('table>thead')
    let spinnerEl = document.body.querySelector('.spinner-border')

    spinnerEl.classList.remove('visually-hidden');
    tbodyEl.classList.add('visually-hidden')
    theadEl.classList.add('visually-hidden')
}

module.exports = spinnerAdd;