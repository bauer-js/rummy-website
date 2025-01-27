const elements = 5;
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const card7 = document.querySelector("#card7");
const card8 = document.querySelector("#card8");
const card9 = document.querySelector("#card9");
const card10 = document.querySelector("#card10");
const activeField = document.querySelector("#active");
const handField = document.querySelector("#hand");
const deckElement = document.querySelector("#draw");
const discardElement = document.querySelector("#dis");
const placeElement = document.querySelector("#place");


// List of objects that provide necessary details to program about cards
const cardList = [
    {
        fileName: "Clubs_ACE.png",
        value: "A",
        rank: "Clubs"
    },  {
        fileName: "Clubs_2.png",
        value: "2",
        rank: "Clubs"
    },  {
        fileName: "Clubs_3.png",
        value: "3",
        rank: "Clubs"
    },  {
        fileName: "Clubs_4.png",
        value: "4",
        rank: "Clubs"
    },  {
        fileName: "Clubs_5.png",
        value: "5",
        rank: "Clubs"
    },  {
        fileName: "Clubs_6.png",
        value: "6",
        rank: "Clubs"
    },  {
        fileName: "Clubs_7.png",
        value: "7",
        rank: "Clubs"
    },  {
        fileName: "Clubs_8.png",
        value: "8",
        rank: "Clubs"
    },  {
        fileName: "Clubs_9.png",
        value: "9",
        rank: "Clubs"
    },  {
        fileName: "Clubs_10.png",
        value: "10",
        rank: "Clubs"
    },  {
        fileName: "Clubs_J.png",
        value: "J",
        rank: "Clubs"
    },  {
        fileName: "Clubs_Q.png",
        value: "Q",
        rank: "Clubs"
    },  {
        fileName: "Clubs_K.png",
        value: "K",
        rank: "Clubs"
    },  {
        fileName: "Diamonds_ACE.png",
        value: "A",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_2.png",
        value: "2",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_3.png",
        value: "3",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_4.png",
        value: "4",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_5.png",
        value: "5",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_6.png",
        value: "6",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_7.png",
        value: "7",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_8.png",
        value: "8",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_9.png",
        value: "9",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_10.png",
        value: "10",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_J.png",
        value: "J",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_Q.png",
        value: "Q",
        rank: "Diamonds"
    },  {
        fileName: "Diamonds_K.png",
        value: "K",
        rank: "Diamonds"
    },  {
        fileName: "Hearts_ACE.png",
        value: "A",
        rank: "Hearts"
    },  {
        fileName: "Hearts_2.png",
        value: "2",
        rank: "Hearts"
    },  {
        fileName: "Hearts_3.png",
        value: "3",
        rank: "Hearts"
    },  {
        fileName: "Hearts_4.png",
        value: "4",
        rank: "Hearts"
    },  {
        fileName: "Hearts_5.png",
        value: "5",
        rank: "Hearts"
    },  {
        fileName: "Hearts_6.png",
        value: "6",
        rank: "Hearts"
    },  {
        fileName: "Hearts_7.png",
        value: "7",
        rank: "Hearts"
    },  {
        fileName: "Hearts_8.png",
        value: "8",
        rank: "Hearts"
    },  {
        fileName: "Hearts_9.png",
        value: "9",
        rank: "Hearts"
    },  {
        fileName: "Hearts_10.png",
        value: "10",
        rank: "Hearts"
    },  {
        fileName: "Hearts_J.png",
        value: "J",
        rank: "Hearts"
    },  {
        fileName: "Hearts_Q.png",
        value: "Q",
        rank: "Hearts"
    },  {
        fileName: "Hearts_K.png",
        value: "K",
        rank: "Hearts"
    },  {
        fileName: "Spades_ACE.png",
        value: "A",
        rank: "Spades"
    },  {
        fileName: "Spades_2.png",
        value: "2",
        rank: "Spades"
    },  {
        fileName: "Spades_3.png",
        value: "3",
        rank: "Spades"
    },  {
        fileName: "Spades_4.png",
        value: "4",
        rank: "Spades"
    },  {
        fileName: "Spades_5.png",
        value: "5",
        rank: "Spades"
    },  {
        fileName: "Spades_6.png",
        value: "6",
        rank: "Spades"
    },  {
        fileName: "Spades_7.png",
        value: "7",
        rank: "Spades"
    },  {
        fileName: "Spades_8.png",
        value: "8",
        rank: "Spades"
    },  {
        fileName: "Spades_9.png",
        value: "9",
        rank: "Spades"
    },  {
        fileName: "Spades_10.png",
        value: "10",
        rank: "Spades"
    },  {
        fileName: "Spades_J.png",
        value: "J",
        rank: "Spades"
    },  {
        fileName: "Spades_Q.png",
        value: "Q",
        rank: "Spades"
    },  {
        fileName: "Spades_K.png",
        value: "K",
        rank: "Spades"
    },  
];

// Hands. Do not modify position value
let hand = [
    {
        position: "#card1",
        filePath: "",
        value: "",
        rank: "",
        locked: false,
        active: false,
        var: card1
    },
    {
        position: "#card2",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card2
    },
    {
        position: "#card3",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card3
    },
    {
        position: "#card4",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card4
    },
    {
        position: "#card5",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card5
    },
    {
        position: "#card6",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card6
    },
    {
        position: "#card7",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card7
    },
    {
        position: "#card8",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card8
    },
    {
        position: "#card9",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card9
    },
    {
        position: "#card10",
        filePath: "",
        value: "",
        rank: "",

        locked: false,
        active: false,
        var: card10
    }
];



let activeCards = []; // Array to determine active card positions

let enemyHand = [
    {
        position: "cardE1",
        value: "",
        locked: false
    },
    {
        position: "cardE2",
        value: "",
        locked: false
    },
    {
        position: "cardE3",
        value: "",
        locked: false
    },
    {
        position: "cardE4",
        value: "",
        locked: false
    },
    {
        position: "cardE5",
        value: "",
        locked: false
    },
    {
        position: "cardE6",
        value: "",
        locked: false
    },
    {
        position: "cardE7",
        value: "",
        locked: false
    },
    {
        position: "cardE8",
        value: "",
        locked: false
    },
    {
        position: "cardE9",
        value: "",
        locked: false
    },
    {
        position: "cardE10",
        value: "",
        locked: false
    }
];

let activeEnemyCards = [];

// page elements


// Object modification: 
//myCollection.data[i]={key:value};


// Decks

let deck = [];
let discardDeck = [];
// Shuffle

function shuffleAlgorithm(array) {

    for(let i = array.length -1; i >= 0; i--) {
        const position = Math.floor((i + 1) * Math.random()); // Gets a random position in the array

        deck[i] = array[position]; // Adds to the array by pulling from the param array using position variable.
        array.splice(position, 1); // Removes the element from the param array ensuring it doesn't appear again.
    }
    return deck;
}



function deal() {
    for (let i = 0; i <= 9; i++) { // for loop to modify hand array and set the image source on webpage. this loop is player only.
        hand[i].filePath = deck[0].fileName;
        hand[i].value = deck[0].value;
        hand[i].rank = deck[0].rank; 
        // deck.shift();
        changeImg(hand[i].position, hand[i].filePath);

    }

}

function changeImg(position, card) { // Changes the card image on the website
    const toBeChanged = document.querySelector(position);
    toBeChanged.src = ("./frontend/images/cards/" + card);
}

shuffleAlgorithm(cardList);
deal();


function clicked(pos, active,) {
    if(active === false) {
        if (activeCards.length < 4) {
            hand[pos].active = true;
            activeCards.push(pos);

            activeField.insertAdjacentElement('afterbegin', hand[pos].var);
            if (activeCards.length > 0) {
                placeElement.innerText = "Show";
            }
            console.log(activeCards.length);
        } else {
        };
        
    } else {
        hand[pos].active = false;
        handField.insertAdjacentElement('afterbegin', hand[pos].var);
        const toBeRemoved = activeCards.indexOf(pos);
        activeCards.splice(toBeRemoved, 1)
        if (activeCards.length === 0) {
            placeElement.innerText = "Rummy";
        }
        console.log(activeCards.length);

    };
}

function discard(deckInfo, player) { //TODO: add code that reshuffles the deck once the discard pile has too many cards. May need a variable to adjust for cards that are locked.
    if (activeCards.length === 1) { // Checks if more than one card is selected
        
        // Variables, exclusive to this block
        let discardCard = {};
        let cardPos;
        
        if (player === true) { // if it is the player's turn
            for (let i = 0; i <= 9; i++) { // Checks which card is active
                if (hand[i].active === true) { // Sets discardCard and card position info
                    discardCard.filePath = hand[i].filePath;
                    discardCard.value = hand[i].value;
                    discardCard.rank = hand[i].rank;
                    cardPos = i;
                }
        }
        discardDeck.unshift(discardCard); // Adds discard to the deck
        discardElement.style.display = "block";
        changeImg("#dis", discardDeck[0].filePath);
        if (deckInfo === 'deck') { // Checks what deck it is then pulls fronm said deck
            hand[cardPos].filePath = deck[0].fileName;
            hand[cardPos].value = deck[0].value;
            hand[cardPos].rank = deck[0].rank; 
            deck.shift();
            changeImg(hand[cardPos].position, hand[cardPos].filePath);
            if (deck.length === 0) {
                shuffleAlgorithm(discardDeck);
            }
        } else if (deckInfo === 'discard') { // Pulls from discard deck
            console.log(discardDeck[1])
            hand[cardPos].filePath = discardDeck[1].fileName;
            hand[cardPos].value = discardDeck[1].value;
            hand[cardPos].rank = discardDeck[1].rank;
            changeImg(hand[cardPos].position, discardDeck[1].filePath);
            discardDeck.splice(1, 1);

            console.log(cardPos);
        }
        }
        clicked(cardPos, true);
    } else if (activeCards.length > 1) {
        console.log("too many cards selected")
    }
}

function locked(cardPosition, turn) {
    let toBeHidden;

        hand[cardPosition].locked = true;
        toBeHidden = document.querySelector(hand[cardPosition].position);
    toBeHidden.style.display = "none";
}

function lockCards(lock, whoIs) { // lock variable is an array of the card positions to lock.
    if (whoIs === "player") {
        for (let i = 0; i < lock.length; i++) {
            const lockingCard = lock[i];
            hand[lock[i]].locked = true;
            toBeHidden = document.querySelector(hand[lock[i]].position);
            toBeHidden.style.display = "none";

        }
    activeCards = [];
    }

    
}

const allEqual = arr => arr.every(val => val === arr[0]);
let meldsThreePlayer = [];
let meldsFourPlayer = []
function showRummy(handField, activeCardsArray, whoIs, meldsFieldThree, meldsFieldFour) {
    if (activeCardsArray.length === 0) { // Rummy function
        console.log("rummy");
        

    } else if (activeCardsArray.length === 3 && meldsThreePlayer.length != 6) { // Three meld function
        console.log("meld of three");
        let meldHand = [];
        for (let i = 0; i < 3; i++) {
            meldHand.push(handField[activeCardsArray[i]]); // Tested, works correctly
            console.log(meldHand[i]);
        }
        const cardValues = meldHand.map((card) => { // Gets card values
            return card.value;
        })
        const cardRanks = meldHand.map((card) => { // Gets card ranks
            return card.rank;
        })

        // Checks if it is a set

        const allMeldValueTrue = allEqual(cardValues); 

        // Checks if it is a run

        const allMeldRankTrue = allEqual(cardRanks); 


        // Conditions to decide whether it is a set or run.

        console.log(allMeldValueTrue);
        if (allMeldValueTrue === true) {
            if (whoIs === "player") {
                lockCards(activeCardsArray, "player");
                for (let n = 0; meldHand.length != n; n++) {
                    meldsThreePlayer.push(meldHand[n]); // Tested, IT WORKS WOOOOOO
                }
                console.log(meldsThreePlayer);
            } else if (whoIs === "enemy") {
        
            }
        } else if (true) {

        }





    } else if (activeCardsArray.length === 4 && meldsFieldFour.length != 4) { // Four meld function
        console.log("meld of four");

        let meldHand = [];
        for (let i = 0; i < 4; i++) {
            meldHand.push(handField[activeCardsArray[i]]); // Tested, works correctly
            console.log(meldHand[i]);
        }
        const cardValues = meldHand.map((card) => { // Gets card values
            return card.value;
        })
        const cardRanks = meldHand.map((card) => { // Gets card ranks
            return card.rank;
        })

        // Checks if it is a set

        const allMeldValueTrue = allEqual(cardValues); 

        // Checks if it is a run

        const allMeldRankTrue = allEqual(cardRanks); 


        // Conditions to decide whether it is a set or run.

        console.log(allMeldValueTrue);
        if (allMeldValueTrue === true) {
            if (whoIs === "player") {
                lockCards(activeCardsArray, "player");
                for (let n = 0; meldHand.length != n; n++) {
                    meldsFourPlayer.push(meldHand[n]); // Tested, IT WORKS WOOOOOO
                }
                console.log(meldsFourPlayer);
            } else if (whoIs === "enemy") {
                
            }
        } else if (true) {
            
        }



    } else {
        console.log("not enough cards selected");
    }


}

/* function showRummy(activatedCountCheck, handCheck, meldsThreeCheck, meldsFourCheck, whoIs) { // Show cards or Rummy cards (Rummy = all cards shown at once)
    let activeCards = [];
    let cardPositions = [];
    if (activatedCountCheck === 0) { // Rummy function

    } else if (activatedCountCheck === 3 && meldsThreeCheck <= 2) {
        for (let i = 0; i <= 9; i++) { //Check active cards
            if (handCheck[i].active === true) {
                activeCards.push(handCheck[i]);
                cardPositions.push([i]);
            }
        }
        
        // Checks if active cards are a set
        let setValue = activeCards[0].value;
        let matching = 0;
        for (let i = 0; i > 2; i++) {
            if (activeCards[i].value === setValue) {
                matching++;
            } 
        }
        if (matching >= 2 && whoIs === "player") {
            for (let i = 0; i > cardPositions.length; i++) { // Changes the locked status on card using locking function and adds to melds

            }
        } else if (matching >= 2 && whoIs === "enemy") {

        }

    } else if (activatedCountCheck === 4 && meldsFourCheck === 0) {

    } 
} */


    
// note to self: learn e.preventDefault and how it works
card1.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(0, hand[0].active);
}))
card2.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(1, hand[1].active);
}))
card3.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(2, hand[2].active);
}))
card4.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(3, hand[3].active);
}))
card5.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(4, hand[4].active);
}))
card6.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(5, hand[5].active);
}))
card7.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(6, hand[6].active);
}))
card8.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(7, hand[7].active);
}))
card9.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(8, hand[8].active);
}))
card10.addEventListener("click", ((e) => {
    e.preventDefault();
    clicked(9, hand[9].active);
}))
deckElement.addEventListener("click", ((e) => {
    e.preventDefault();
    discard('deck', true);
}))
discardElement.addEventListener("click", ((e) => {
    e.preventDefault();
    discard('discard', true);
}))
placeElement.addEventListener("click", ((e) => {
    e.preventDefault();
    showRummy(hand, activeCards, "player", meldsThreePlayer, meldsFourPlayer);
})) 