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

let activatedCount = 0;
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
        position: "#card1",
        value: "",
        locked: false,
        active: false,
        var: card1
    },
    {
        position: "#card2",
        value: "",
        locked: false,
        active: false,
        var: card2
    },
    {
        position: "#card3",
        value: "",
        locked: false,
        active: false,
        var: card3
    },
    {
        position: "#card4",
        value: "",
        locked: false,
        active: false,
        var: card4
    },
    {
        position: "#card5",
        value: "",
        locked: false,
        active: false,
        var: card5
    },
    {
        position: "#card6",
        value: "",
        locked: false,
        active: false,
        var: card6
    },
    {
        position: "#card7",
        value: "",
        locked: false,
        active: false,
        var: card7
    },
    {
        position: "#card8",
        value: "",
        locked: false,
        active: false,
        var: card8
    },
    {
        position: "#card9",
        value: "",
        locked: false,
        active: false,
        var: card9
    },
    {
        position: "#card10",
        value: "",
        locked: false,
        active: false,
        var: card10
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

// page elements


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



function deal() {
    for (let i = 0; i <= 9; i++) { // for loop to modify hand array and set the image source on webpage. this loop is player only.
        hand[i].value = deck[0]; // adds the first card from the deck array to a hand.
        deck.shift();
        changeImg(hand[i].position, deck[0]);
        console.log(hand[i].value);
    }

}

function changeImg(position, card) { // Changes the card image on the website
    const toBeChanged = document.querySelector(position);
    toBeChanged.src = ("/frontend/images/deck-of-cards/" + card + ".png")
}
shuffleAlgorithm(cardList);
deal();

console.log(deck.length);
function clicked(pos, active) {
    if(active === false) {
        if (activatedCount < 4) {
            hand[pos].active = true;
            activatedCount++;
 //           card1.style.height="80%";
            activeField.insertAdjacentElement('afterbegin', hand[pos].var);
            console.log(activatedCount);

        } else {
            console.log(activatedCount);
        };
        
    } else {
        hand[pos].active = false;
        handField.insertAdjacentElement('afterbegin', hand[pos].var);
            console.log(activatedCount);
        activatedCount--;
        console.log(activatedCount);

    };
}
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