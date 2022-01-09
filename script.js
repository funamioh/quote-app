const quote = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");
const author = document.getElementById("author");

let url = "https://type.fit/api/quotes";

quoteBtn.addEventListener("click", generateQuote);

generateQuote();

function generateQuote() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch(url, config)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var number = Math.floor(Math.random() * data.length);
      console.log(data[number]);
      var quoteText = data[number].text;
      var quoteAuthor = data[number].author;
      quote.innerHTML = quoteText;
      if (quoteAuthor === null) {
        author.innerHTML = "- " + "Anonymous" + " -";
      } else {
        author.innerHTML = "- " + quoteAuthor + " -";
      }
    })
    .catch(function (error) {
      //if there is an error
    });
}

const tweetBtn = document.getElementById("tweetBtn");

tweetBtn.addEventListener("click", shareTweet);

shareTweet();

function shareTweet(event) {
  let tweetURL = "https://twitter.com/intent/tweet?text=";
  let quoteURI = encodeURIComponent(
    `"${quote.quoteText}" - ${quote.quoteAuthor}`
  );
  tweetURL += quoteURI;

  window.open(tweetURL, "_new");
}
