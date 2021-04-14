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

module.exports = fillTable;