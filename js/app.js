/*
 * Create a list that holds all of your cards
 */
const icons = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];
let initialCards = [...icons, ...icons];
let moves = 0;
let seconds = 0;
let openedCards = [];//an array to push opened cards, pop card if theres no match in 
const deck = document.querySelector(".deck");
let cards = [];
let matchedCards = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//update the deck and displays the new deck in HTML
 function displayCards(){
 	// initialize
 	// updateMoves(moves); 
 	// updateTimer(seconds); 
 	openedCards.length = 0;
 	const newCards = shuffle(initialCards);

 	//clear deck
 	deck.remove(deck);
 	// deck.innerHTML = '';
 	let updatedDeck = document.createElement("ul");
 	updatedDeck.className = 'deck';

 	//create cards
 	for (let newCard of newCards){
 		let li = document.createElement("li"); //create li inside ul
 		li.className = 'card';   //set the classname to .card
 		li.innerHTML = '<i class="fa ' + newCard + '"></i>'; //set .card's innerHTML to 
 		updatedDeck.appendChild(li);  //add new cards to updatedDeck
 	};

 	const container = document.querySelector('.container'); //body
 	container.appendChild(updatedDeck);  //add updated deck to the body
 	// flipCard(); 

 	//this is the array of shuffled cards that will be used for the rest of the code
 	cards = document.querySelectorAll('.card');

 	// function flipCard(){
	// for (const card of cards){
	// 	card.addEventListener('click', function(){
	// 		this.classList.add('open');
	// 		this.classList.add('show');
	// 		openedCards.push(card);
	// 	});
	// }
// };

 }



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//flip the card when clicked
function flipCard(){
	// if (openedCards.length < 2){

		//open card
		for (const card of cards){
			card.addEventListener('click', function(){
				this.classList.add('open');
				this.classList.add('show');
				openedCards.push(card);
			});
		};
	// }
}

//if isMatch==false (no matched card in openedCards), remove the card from openedCards
// function isMatch(){
// 	if (openedCards[0].className == openedCards[1].className){
// 		return true;
// 	}
// 	else {
// 		return false;
// 	};
// }

//checks if the card is not matched or already opened
// function isValid(card){
// 	return !(card.hasClass("open") || card.hasClass("match"));
// }

// function clicked(){
// 	deck.addEventListener("click", function(event){
// 		const targetCard = event.target;

// 		//if Valid, flip the card
// 		if (targetCard.tagName() === "li" && !openedCards.includes(targetCard)){
// 			flipCard(targetCard);

// 			if (openedCards.length % 2 === 0){
// 				openedCards.push(targetCard);
// 			}

// 			else {
// 				moves++;

// 				if (function isMatch(targetCard)){
// 					openedCards.push(targetCard);
// 				}
// 				else {
// 					const unmatchedCard = openedCards.pop();
// 				};

// 			};
// 		};
// 	});


// 	function flipCard(card){
// 		card.classList.toggle("open");
// 		card.classList.toggle("show");
// 	}

// 	function restart(){
// 		const re = document.querySelector(".restart");
// 		re.addEventListener("click", restart);

// 		newBoard(cards);
// 		clicked();
// 	}

// 	function updateMoves(){
// 		const mv = document.querySelector(".moves");
// 		mv.textContent = moves;
// 		updateStars(starRate(moves));
// 	}

// 	function starRate(moves){
// 		if (0 <= moves <=8){
// 			return 3;
// 		}
// 		else if (9 <= moves <= 16){
// 			return 2;
// 		}
// 		else if (17 <= moves <= 24){
// 			return 1;
// 		}
// 		else {
// 			return 0;
// 		}
// 	}

// 	function updateStars(stars){
// 		const rates = document.querySelector(".stars");
// 		rates.innerHTML = "";
// 		for (let i = 0; i < stars; i++){
// 			const starList = document.createELement("li");
// 			starList.innerHTML = "<i class="fa fa-star"></i>";
// 			rates.appendChild(starList);
// 		}; 
// 	}
// };
// 	newBoard(cards);
// 	clicked();

displayCards();
flipCard();
