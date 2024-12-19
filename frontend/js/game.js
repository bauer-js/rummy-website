

// #.2 = Hearts, #.4 = Diamonds, #.5 = Spades, #.7 = Clubs
const cardList = ["A.2", "A.4", "A.5", "A.7", 
     "2.2", "2.4", "2.5", "2.7", 
     "3.2", "3.4", "3.5", "3.7",
     "4.2", "4.4", "4.5", "4.7", 
     "5.2", "5.4", "5.5", "5.7",
     "6.2", "6.4", "6.5", "6.7",
     "7.2", "7.4", "7.5", "7.7",
     "8.2", "8.4", "8.5", "8.7",
     "9.2", "9.4", "9.5", "9.7",
     "10.2", "10.4", "10.5", "10.7",
     "J2", "J4", "J5", "J7",
     "Q2", "Q4", "Q5", "Q7",
     "K2", "K4", "K5", "K7"];
// Hands. Do not modify position value
let hand = [
    {
        position: "card1",
        value: "",
        locked: false
    },
    {
        position: "card2",
        value: "",
        locked: false
    },
    {
        position: "card3",
        value: "",
        locked: false
    },
    {
        position: "card4",
        value: "",
        locked: false
    },
    {
        position: "card5",
        value: "",
        locked: false
    },
    {
        position: "card6",
        value: "",
        locked: false
    },
    {
        position: "card7",
        value: "",
        locked: false
    },
    {
        position: "card8",
        value: "",
        locked: false
    },
    {
        position: "card9",
        value: "",
        locked: false
    },
    {
        position: "card10",
        value: "",
        locked: false
    }
];

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

// Object modification: 
//myCollection.data[i]={key:value};


// Decks

let deck = [];

// Shuffle

function shuffleAlgorithm(array) {

    for(let i = array.length -1; i >= 0; i--) {
        const position = Math.floor((i + 1) * Math.random()); // Gets a random position in the array
        deck[i] = array[position]; // Adds to the array by pulling from the param array using position variable.
        array.splice(position, 1); // Removes the element from the param array ensuring it doesn't appear again.
    }
    return deck;
}

