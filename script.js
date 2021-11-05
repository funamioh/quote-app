const quote = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')
const author = document.getElementById('author')

let url = "https://type.fit/api/quotes";

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

function generateQuote() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    fetch(url, config)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let number = Math.floor(Math.random() * data.length);
    console.log(data[number])
    quote.innerHTML = data[number].text;
    author.innerHTML = data[number].author;
    
  })
  .catch(function(error){
  //if there is an error
  });
}