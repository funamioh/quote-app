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
      let number = Math.floor(Math.random() * data.length);
      console.log(data[number]);
      const quoteText = data[number].text;
      const quoteAuthor = data[number].author;
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
  const twitterUrl =
    "https://twitter.com/intent/tweet?text=${quoteText} -${quoteAuthor}";
  window.open(twitterUrl, "_blank");
}
