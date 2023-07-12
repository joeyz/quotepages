$.ajax({
   type: "get",
   url: "https://type.fit/api/quotes",
   data: "data",
   dataType: "json",
   success: function (response) {
      console.log(response);
   }
});
var quotes = [
   "The only way to do great work is to love what you do. - Steve Jobs",
   "In the middle of difficulty lies opportunity. - Albert Einstein",
   "Believe you can and you're halfway there. - Theodore Roosevelt",
   "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
   "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
   "The best way to predict the future is to create it. - Peter Drucker",
 ];
 
 let quoteText = document.querySelector(".quote_text");
 
 function generateQuote() {
   var randomIndex = Math.floor(Math.random() * quotes.length);
   var quote = quotes[randomIndex]
   quoteText.innerHTML = '"' + quote + '"'
 }