function loadKaniye() {

    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => showQuote(data))
}
const showQuote = (data) => {
    const quote = document.getElementById('quote');
    //console.log(data.quote);
    quote.innerText = data.quote;


}
