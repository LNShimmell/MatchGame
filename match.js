//Deck of cards
var Deck = ['Cards/2S.png2', 'Cards/3S.png3', 'Cards/4S.png4', 'Cards/5S.png5', 'Cards/6S.png6', 'Cards/7S.png7', 'Cards/8S.png8', 'Cards/9S.png9', 'Cards/10S.png10', 'Cards/JS.png11', 'Cards/QS.png12', 'Cards/KS.png13', 'Cards/AS.png1',
    'Cards/2H.png2', 'Cards/3H.png3', 'Cards/4H.png4', 'Cards/5H.png5', 'Cards/6H.png6', 'Cards/7H.png7', 'Cards/8H.png8', 'Cards/9H.png9', 'Cards/10H.png10', 'Cards/JH.png11', 'Cards/QH.png12', 'Cards/KH.png13', 'Cards/AH.png1',
    'Cards/2C.png2', 'Cards/3C.png3', 'Cards/4C.png4', 'Cards/5C.png5', 'Cards/6C.png6', 'Cards/7C.png7', 'Cards/8C.png8', 'Cards/9C.png9', 'Cards/10C.png10', 'Cards/JC.png11', 'Cards/QC.png12', 'Cards/KC.png13', 'Cards/AC.png1',
    'Cards/2D.png2', 'Cards/3D.png3', 'Cards/4D.png4', 'Cards/5D.png5', 'Cards/6D.png6', 'Cards/7D.png7', 'Cards/8D.png8', 'Cards/9D.png9', 'Cards/10D.png10', 'Cards/JD.png11', 'Cards/QD.png12', 'Cards/KD.png13', 'Cards/AD.png1'];
// shuffle cards function
var DeckClone = Deck;
var DeckClone2 = ['Cards/2S.png2', 'Cards/3S.png3', 'Cards/4S.png4', 'Cards/5S.png5', 'Cards/6S.png6', 'Cards/7S.png7', 'Cards/8S.png8', 'Cards/9S.png9', 'Cards/10S.png10', 'Cards/JS.png11', 'Cards/QS.png12', 'Cards/KS.png13', 'Cards/AS.png1',
    'Cards/2H.png2', 'Cards/3H.png3', 'Cards/4H.png4', 'Cards/5H.png5', 'Cards/6H.png6', 'Cards/7H.png7', 'Cards/8H.png8', 'Cards/9H.png9', 'Cards/10H.png10', 'Cards/JH.png11', 'Cards/QH.png12', 'Cards/KH.png13', 'Cards/AH.png1',
    'Cards/2C.png2', 'Cards/3C.png3', 'Cards/4C.png4', 'Cards/5C.png5', 'Cards/6C.png6', 'Cards/7C.png7', 'Cards/8C.png8', 'Cards/9C.png9', 'Cards/10C.png10', 'Cards/JC.png11', 'Cards/QC.png12', 'Cards/KC.png13', 'Cards/AC.png1',
    'Cards/2D.png2', 'Cards/3D.png3', 'Cards/4D.png4', 'Cards/5D.png5', 'Cards/6D.png6', 'Cards/7D.png7', 'Cards/8D.png8', 'Cards/9D.png9', 'Cards/10D.png10', 'Cards/JD.png11', 'Cards/QD.png12', 'Cards/KD.png13', 'Cards/AD.png1',
    'Cards/2S.png2', 'Cards/3S.png3', 'Cards/4S.png4', 'Cards/5S.png5', 'Cards/6S.png6', 'Cards/7S.png7', 'Cards/8S.png8', 'Cards/9S.png9', 'Cards/10S.png10', 'Cards/JS.png11', 'Cards/QS.png12', 'Cards/KS.png13', 'Cards/AS.png1',
    'Cards/2H.png2', 'Cards/3H.png3', 'Cards/4H.png4', 'Cards/5H.png5', 'Cards/6H.png6', 'Cards/7H.png7', 'Cards/8H.png8', 'Cards/9H.png9', 'Cards/10H.png10', 'Cards/JH.png11', 'Cards/QH.png12', 'Cards/KH.png13', 'Cards/AH.png1',
    'Cards/2C.png2', 'Cards/3C.png3', 'Cards/4C.png4', 'Cards/5C.png5', 'Cards/6C.png6', 'Cards/7C.png7', 'Cards/8C.png8', 'Cards/9C.png9', 'Cards/10C.png10', 'Cards/JC.png11', 'Cards/QC.png12', 'Cards/KC.png13', 'Cards/AC.png1',
    'Cards/2D.png2', 'Cards/3D.png3', 'Cards/4D.png4', 'Cards/5D.png5', 'Cards/6D.png6', 'Cards/7D.png7', 'Cards/8D.png8', 'Cards/9D.png9', 'Cards/10D.png10', 'Cards/JD.png11', 'Cards/QD.png12', 'Cards/KD.png13', 'Cards/AD.png1'];
var difficulty;
var cardCount = 0;
var grabCard = false;
var NameofCard = '';
function shuffle(Deck) {
    var j, x, i;
    for (i = Deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = Deck[i];
        Deck[i] = Deck[j];
        Deck[j] = x;
    }
    return Deck;
}
var score = 0;
//first function called by the only button on the home screan takes
//difficulty value from the table and logically picks the coresponding game.
function createNewGame() {
    difficulty = document.getElementById('fDifficulty').value;
    var body = document.getElementById('clear');
    body.innerHTML = '';
    if (difficulty == 1) { //Value 1 plays one full deck of cards any suit of the same value matches
        Easy();
        cardCount = 0;
    }
    if (difficulty == 2) { //value 2 plays two full decks of cards any suit of the same value matches
        Medium();
        cardCount = 0;
    }
    gameMenue();
}
function gameMenue() {
    var body = document.getElementById('clear');
    body.innerHTML += "<div id=\"resetTable\"><table style=\"border:2px solid blue\">\n        <thead>\n            <th>\n            Too hard? Change the difficulty\n            </th>\n        </thead>\n        \n        <tr>\n            <td>\n                Select Difficulty\n            </td>\n            <td><select name=\"Difficulty\" id=\"fDifficulty\">\n                <option type=\"number\" value=\"1\">Easy</option>\n                <option type=\"number\" value=\"2\">Hard</option>\n            </select></td>\n        </tr>\n        <tr><td>\n            <button class=\"button\" onclick=\"createNewGame()\">New Game</button>\n            </td>\n            <td><button class=\"button\" onclick=\"hide()\">Start</button></td>\n        </tr>\n        <tr>\n            <td>\n                <img src=\"Cards/aces.png\" alt=\"guess\" width=\"100px\">\n            </td>\n            <td>Score:<input id=\"score\" type=\"number\" readonly></td>\n        </tr>\n        \n    </table></div>";
}
function Easy() {
    shuffle(Deck);
    var body = document.getElementById('clear');
    var row = '<div>';
    var last = '';
    var i = Deck.length;
    for (var j = 0; Deck.length > j; j++) {
        --i;
        cardCount++;
        var idx = Deck[j].lastIndexOf('g') + 1; // seperates the img string from the value string
        var img = Deck[j].slice(0, idx); // becomes the value
        var valueofCard = Deck[j].substring(idx, Deck[j].length);
        if (i % 26 != 0) {
            row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"40px\" value=\"" + valueofCard + "\" type=\"string\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img>";
        }
        if (i % 26 == 0) {
            row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"40px\" value=\"" + valueofCard + "\" type=\"string\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img></div><div>";
        }
    }
    body.innerHTML += row;
}
function Medium() {
    shuffle(DeckClone2);
    console.log('shuffled success');
    var body = document.getElementById('clear');
    var row = '<div>';
    var i = DeckClone2.length;
    for (var j = 0; DeckClone2.length > j; j++) {
        --i;
        cardCount++;
        var idx = DeckClone2[j].lastIndexOf('g') + 1;
        var img = DeckClone2[j].slice(0, idx);
        //var valueofCard = Deck[j].substring(idx,Deck[j].length)    
        if (i % 26 != 0) {
            row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"40px\" value=\"" + img + "\" type=\"string\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img>";
        }
        if (i % 26 == 0) {
            row += "<img src=\"" + img + "\" name=\"" + img + "\"  alt=\"guess\" width=\"40px\" value=\"" + img + "\" type=\"string\" id=\"" + cardCount + " onclick=\"flip(" + cardCount + ")\"></img></div><div>";
        }
    }
    body.innerHTML += row;
}
function hide() {
    var lookHere = document.getElementById('clear').outerHTML;
    var replace = document.getElementById('clear');
    replace.innerHTML = '';
    if (difficulty == 1) {
        for (var card = 0; DeckClone.length > card; card++) { //finds all the images and changes them to back of card
            var idx = DeckClone[card].lastIndexOf('g') + 1;
            var img = DeckClone[card].slice(0, idx);
            var newbody = lookHere.replace("src=\"" + img + "\"", 'src="Cards/backofcard.png"');
            replace.innerHTML = newbody;
            lookHere = newbody;
        }
    }
    if (difficulty == 2) {
        for (var card = 0; DeckClone2.length > card; card++) { //finds all the images and changes them to back of card
            var idx = DeckClone2[card].lastIndexOf('g') + 1;
            var img = DeckClone2[card].slice(0, idx);
            var newbody = lookHere.replace("src=\"" + img + "\"", 'src="Cards/backofcard.png"');
            replace.innerHTML = newbody;
            lookHere = newbody;
        }
    }
}
function flip(id) {
    var cardtochange = document.getElementById(id).outerHTML;
    var replace = document.getElementById(id).name;
    var final = document.getElementById(id);
    if (cardtochange.includes('Cards/backofcard.png')) {
        var idx = cardtochange.replace('Cards/backofcard.png', replace);
        var xcard = document.getElementById(id).name;
        final.outerHTML = idx;
        if (NameofCard == xcard) {
            score += 10;
            var highscore = document.getElementById('score');
            highscore.value = score;
        }
        grabCard = !grabCard;
        NameofCard = replace;
        /*if(grabCard == false){
            checkNameofCard(replace)
        }*/
    }
    if (!(cardtochange.includes('Cards/backofcard.png'))) {
        var idx = cardtochange.replace("src=\"" + replace + "\"", 'src="Cards/backofcard.png"');
        final.outerHTML = idx;
    }
}
