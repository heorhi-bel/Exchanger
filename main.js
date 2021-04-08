var request = new XMLHttpRequest();
request.open('GET' , " https://v6.exchangerate-api.com/v6/40d62e170c028be72b38b1b1/latest/USD");
request.responseType = 'json'
request.send();


request.onload = function(){
    var currencies = request.response;
    console.log(currencies)
        
}
