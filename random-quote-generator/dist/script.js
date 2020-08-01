var quotes = [
  
'Change the world by being yourself. -Amy Poehler',
'Try to be a rainbow in someone’s cloud. -Maya Angelou',
'Wanting to be someone else is a waste of who you are. -Kurt Cobain',
'May your choices reflect your hopes, not your fears. -Nelson Mandela',
'Happiness depends upon ourselves. -Aristotle',
'When words fail, music speaks. -Shakespeare'
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}