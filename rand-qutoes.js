function randQuote() {
    let quotes = new Array();
    quotes[0] = "This is my dark world";
    quotes[1] = "The day I lost myself";
    quotes[2] = "Don't let anyone steal your heart";
    quotes[3] = "A war is going on inside my head";
    quotes[4] = "You live twice";
    quotes[5] = "How would you allow to win today ?";
    quotes[6] = "Don't bottle it up";
    quotes[7] = "Make me feel like I am home again";
    quotes[8] = "You are my obsession";
    quotes[9] = "Humans are an extraordinaly race";
    quotes[10] = "I must fix what's wrong with me";
    let quotesChoice = Math.floor(Math.random() * quotes.length);
    let choice = quotes[quotesChoice];

    let emojies = [];
    emojies[0] = "🧡";
    emojies[1] = "🤎";
    emojies[2] = "✨";
    emojies[3] = "💜";
    emojies[4] = "💕";
    emojies[5] = "🖤";
    emojies[6] = "💦";
    emojies[7] = "💞";
    emojies[8] = "🤍";
    emojies[9] = "💗";
    let emojiChoice = Math.floor(Math.random() * emojies.length);
    let emjChoice = emojies[emojiChoice];
    //let copyright = " Abdulhadi Al-Amshan .";
    document.getElementById('js-quote').innerHTML = String(choice) + emjChoice;
}
setInterval(
    randQuote, 5000);