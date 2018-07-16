
//Deck of cards
let Deck:string []= ['Cards/2S.png2', 'Cards/3S.png3','Cards/4S.png4','Cards/5S.png5','Cards/6S.png6','Cards/7S.png7','Cards/8S.png8','Cards/9S.png9','Cards/10S.png10','Cards/JS.png11','Cards/QS.png12','Cards/KS.png13','Cards/AS.png1',
                     'Cards/2H.png2', 'Cards/3H.png3','Cards/4H.png4','Cards/5H.png5','Cards/6H.png6','Cards/7H.png7','Cards/8H.png8','Cards/9H.png9','Cards/10H.png10','Cards/JH.png11','Cards/QH.png12','Cards/KH.png13','Cards/AH.png1',
                     'Cards/2C.png2', 'Cards/3C.png3','Cards/4C.png4','Cards/5C.png5','Cards/6C.png6','Cards/7C.png7','Cards/8C.png8','Cards/9C.png9','Cards/10C.png10','Cards/JC.png11','Cards/QC.png12','Cards/KC.png13','Cards/AC.png1',
                     'Cards/2D.png2', 'Cards/3D.png3','Cards/4D.png4','Cards/5D.png5','Cards/6D.png6','Cards/7D.png7','Cards/8D.png8','Cards/9D.png9','Cards/10D.png10','Cards/JD.png11','Cards/QD.png12','Cards/KD.png13','Cards/AD.png1' ];
// shuffle cards function
let DeckClone:string[] = Deck;
let difficulty:number;
let cardCount: number = 0;
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
//first function called by the only button on the home screan takes
//difficulty value from the table and logically picks the coresponding game.
function createNewGame(){
    difficulty = document.getElementById('fDifficulty').value;
    var body = document.getElementById('clear');
    body.innerHTML = '';
    if(difficulty ==1){//Value 1 plays one full deck of cards any suit of the same value matches
    Easy();
    cardCount=0;
    }
    if(difficulty == 2){//value 2 plays two full decks of cards any suit of the same value matches
        Easy();
        Easy();
        cardCount=0;
    }
    if(difficulty == 3){//Value 3 plays 2 deck of cards, but only exact matches can be score points
        Medium();       // example: ace of spaces can only match with another ace of spades.
        Medium();
        cardCount=0;
    }
    if(difficulty == 4){//Same as value 3, but double the decks!!
        Medium();
        Medium();
        Medium();
        Medium();
        cardCount = 0;
    }
    gameMenue();
}    
        



    function gameMenue(){
        var body = document.getElementById('clear');
        body.innerHTML  += `<div><table style="border:2px solid blue">
        <thead>
            <th>
            Too hard? Change the difficulty
            </th>
        </thead>
        
        <tr>
            <td>
                Select Difficulty
            </td>
            <td><select name="Difficulty" id="fDifficulty">
                <option type="number" value="1">Easy</option>
                <option type="number" value="2">Medium</option>
                <option type="number" value="3">Hard</option>
                <option type="number" value="4">HardCore!</option>
            </select></td>
        </tr>
        <tr><td>
            <button class="button" onclick="createNewGame()">New Game</button>
            </td>
            <td><button class="button" onclick="hide()">Start</button></td>
        </tr>
        <tr>
            <td>
                <img src="Cards/aces.png" alt="guess" width="100px">
            </td>
        </tr>
        
    </table></div>`;
    }

function Easy(){
    shuffle(Deck);
    var body = document.getElementById('clear');
    let row = '<div>';
    let last = '';
    let i = Deck.length;
    for(var j = 0; Deck.length>j; j++){
        --i;
        cardCount++;
        var idx = Deck[j].lastIndexOf('g') + 1; // seperates the img string from the value string
        var img = Deck[j].slice(0,idx); // becomes the value
        var valueofCard = Deck[j].substring(idx,Deck[j].length)    
        if(i%13 != 0){ 
            row +=`<img src='${img}' name="${img}" alt="guess" width="50px" value="${valueofCard}" type="string" id="${cardCount}" onclick="flip(${cardCount})"></img>`;
            }
        if( i%13 == 0){
            row += `<img src='${img}' name="${img}" alt="guess" width="50px" value="${valueofCard}" type="string" id="${cardCount}" onclick="flip(${cardCount})"></img></div><div>`;
        }
    }
    body.innerHTML+= row;
}

function Medium(){
    shuffle(Deck);
    var body = document.getElementById('clear');
    let row = '<div>';
    let last = '';
    let i = Deck.length;
    for(var j = 0; Deck.length>j; j++){
        --i;
        cardCount++;
        var idx = Deck[j].lastIndexOf('g') + 1;
        var img = Deck[j].slice(0,idx);
        //var valueofCard = Deck[j].substring(idx,Deck[j].length)    
        if(i%13 != 0){ 
            row +=`<img src='${img}' name="${img}" alt="guess" width="50px" value="${img}" type="string" id="${cardCount}" onclick="flip(${cardCount})"></img>`;
            }
        if( i%13 == 0){
            row += `<img src="${img}" name="${img}"  alt="guess" width="50px" value="${img}" type="string" id="${cardCount} onclick="flip(${cardCount})"></img></div><div>`;
        }
    }
    body.innerHTML += row;
}

function hide(){ //hides all cards!
    var lookHere = document.getElementById('clear').outerHTML;
    var replace = document.getElementById('clear');
    replace.innerHTML = '';


    for(var card = 0;DeckClone.length>card; card++){//finds all the images and changes them to back of card
        var idx = DeckClone[card].lastIndexOf('g') + 1;
        var img = DeckClone[card].slice(0,idx);
        var newbody = lookHere.replace(img,'Cards/backofcard.png');
        replace.innerHTML= newbody;
        lookHere = newbody;
        
    }
    

}

function flip(id){
    var cardtochange = document.getElementById(id).outerHTML;
    var replace = document.getElementById(id).name;
    var final = document.getElementById(id);
    var idx = cardtochange.replace('Cards/backofcard.png', replace);
    final.outerHTML = idx;
}