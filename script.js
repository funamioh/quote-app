const quote = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");
const author = document.getElementById("author");
const tweetBtn = document.getElementById("tweetBtn");

let url = "https://type.fit/api/quotes";

quoteBtn.addEventListener("click", generateQuote);

generateQuote();

function generateQuote() {
  var quoteText = "";
  var quoteAuthor = "";

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
      quoteText = data[number].text;
      quoteAuthor = data[number].author;
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
    const twitterUrl =
      `https://twitter.com/intent/tweet?text=${quoteText} -${quoteAuthor}`;
    window.open(twitterUrl, "_blank");
  }
}
