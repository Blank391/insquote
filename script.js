const quotes = [
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', () => {
    const { quote, author } = getRandomQuote();
    document.getElementById('quote').textContent = quote;
    document.getElementById('author').textContent = `- ${author}`;
});

// Load a random quote on page load
window.onload = () => {
    const { quote, author } = getRandomQuote();
    document.getElementById('quote').textContent = quote;
    document.getElementById('author').textContent = `- ${author}`;
};
