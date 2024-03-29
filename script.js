const quotes = [
    'great code',
    'great UML diagrams',
    'sweet Emac skills',
    'a magnetized needle and a steady hand',
    'beating the Turing test',
    'changing your middle name to \'Blockchain\'',
    'great Levenshtein distance algorithm skills',
    'being in 30 Slack teams at once',
    'an huge list of overly-prescriptive linter rules',
    'a fancy editor color scheme ',
    'calling 2018 \'the year of the Linux desktop\'',
    'trying to remember the arguments to tar',
    'changing your job title on LinkedIn',
    'putting a load balancer in front of it',
    'knowing how to exit vim',
    'changing your font to Operator Mono',    
    'knowing how to center a div',
    'strongly held opinions',
    'breaking the build',
    'posting goat gifs',
    'babysitting the deploy',
    'amazing indentation skills',
    'building elaborate dashboards',
    'operating on three hours of sleep',
    'deleting trailing whitespace',
    'great variable names',
    'covering your laptop in stickers',
    'owning dozens of unused domain names',
    'changing stuff and seeing what happens',
    'finding something to lean on during standup',
    'passing the Voight-Kampff test',
    'quoting Uncle Bob',
    'commenting out broken unit tests',
    'riding the Ballmer Peak',
    'jumping up and shouting \'yes!\'',
    'saying \'It depends...\'',
    'turning it off and on again',
    'writing haikus in your git commits',
    'paying for Winzip',
    'saying \'There\'s an XKCD about this...\'',
    'spending $44 billion buying a message board',
    'ASCII art in your code comments',
    'producing tech debt at a 10x rate',
    'turning on dark mode',
    'terrible metaphors',
    'having three monitors',
    'having a sweet Teams background',
    'going into Tosche Station to pick up some power converters',
    'saying \'Well, there\'s your problem\'',
    'a healthy disdain for your own code'
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = '"It takes more than ' + quotes[randomIndex] + ' to be a great software engineer."';
    document.getElementById('random-quote').textContent = randomQuote;
}

window.addEventListener('load', displayRandomQuote);