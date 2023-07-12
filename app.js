let quoteText = document.querySelector(".quote_text");
let quoteAuthor = document.querySelector(".quote_author");
let quotes = getQuotes();

function generateQuote()
{
   var randomIndex = Math.floor(Math.random() * quotes.length);
   var quote = quotes[randomIndex];
   quoteText.innerHTML = '"' + quote.text + '"';
   quoteAuthor.innerHTML = '~' + quote.author;
}

function getQuotes() {
   $.ajax({
      async: true,
      crossDomain: true,
      url: "https://type.fit/api/quotes",
      method: "GET",
      success: function (response)
      {
         return quotes = JSON.parse(response);
      }
   });
}