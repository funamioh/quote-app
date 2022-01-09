const quote = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");
const author = document.getElementById("author");
const tweetBtn = document.getElementById("tweetBtn");

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
  tweetBtn.addEventListener("click", shareTweet);

  function shareTweet(event) {
    var quoteText = quote.innerText;
    var quoteAuthor = author.innerText;

    const twitterUrl =
      `https://twitter.com/intent/tweet?text=${quoteText} -${quoteAuthor}`;
    window.open(twitterUrl, "_blank");
  }
}
