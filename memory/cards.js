function shuffle(array){
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

function Deck(skippedSuits, skippedNumbers, idOrder){
	this.cards = Array(); 

	this.populate = function(skippedSuits, skippedNumbers, idOrder){
		var l = 0; 
		for(k = 13; k >= 1; k--){
			if($.isArray(skippedNumbers) && $.inArray(k, skippedNumbers) >= 0)
				continue; 

			for(i = 1; i <= 4; i++){
				if($.isArray(skippedSuits) && $.inArray(i, skippedSuits) >= 0)
					continue; 
				//Adds cards to the deck 
				var card = new Card(i, k);
				if(idOrder == true)
					this.cards[card.id()] = card; 
				else
					this.cards[l] = card; 
				l++;
			}
		}
	};

	if(skippedSuits != 'empty')
		this.populate(skippedSuits, skippedNumbers, idOrder); 

	this.addCards = function(arr){
		this.cards.concat(arr);
	};

	this.getCards = function(){
		return this.cards; 
	};

	this.getCard = function(id){
		return this.cards[id];
	}

	this.get = function(index){
		return this.cards[index];
	}

	this.length = function(){
		return this.cards.length; 
	};

	this.shuffle = function(){
		//Randomizes the order of cards in the deck. 
		this.cards = shuffle(this.cards);
	};

	this.draw = function(number){
		if(number < 1)
			number = 1;
		else if(number > this.cards.length)
			number = this.cards.length; 
		//Removes the first number of cards in the deck and 
		var subdeck  = this.cards.slice(0, number); 
		this.cards = this.cards.slice(number);

		return subdeck; 
	};

	this.preload = function(){
	    $(this.cards).each(function(){
	    	if(this != null)
		       this.preload();
	    });
	};

	this.preload(); 
}

function Card(suit, number, hidden){
	//Takes suits 1-4
	//Numbers 1-13
	this.suit = suit; 
	this.number = number; 

	//Correct out of bounds suits
	if(this.suit > 4)
		this.suit = 4; 
	else if(this.suit < 1)
		this.suit = 1; 

	//Correct out of bounds numbers
	if(this.number > 13)
		this.number = 13; 
	else if(this.number < 1)
		this.number = 1; 
	
	if(hidden != null)
		this.isHidden = hidden;
	else
		this.isHidden = true; 

	suits = [null, 'clubs', 'spades', 'hearts', 'diamonds'];
	numbers = [null, 'two', 'three', 'four', 'five', 'six', 
				'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
	this.numberId = function(){
		if(this.number == 13)
			return 1; 
		return this.number + 1; 
	};

	this.suitId = function(){
		return this.suit; 
	};

	this.getColor = function(){
		if(this.suit <= 2)
			return 'black';
		return 'red';
	}

	this.matchColor = function(card){
		return this.getColor() == card.getColor(); 
	};

	this.getSuit = function(){
		return suits[this.suit];
	};

	this.getNumber = function(){
		return numbers[this.number];
	};

	this.width = function(){
		return 72; 
	};

	this.height = function(){
		return 96;
	}

	this.match = function(card){
		return this.matchSuit(card) && this.matchNumber(card); 
	};

	this.matchSuit = function(card){
		if(typeof(card) == 'object')
			return this.getSuit() == card.getSuit(); 
		return false;
	};

	this.matchNumber = function(card){
		if(typeof(card) == 'object')
			return this.getNumber() == card.getNumber(); 
		return false; 
	};

	this.getName = function(){
		return this.getNumber() + ' of ' + this.getSuit(); 
	};

	this.id = function(){
		return (13 - this.number) * 4 + this.suit - 1; 
	};

	this.hidden = function(set){
		if(set != null)
			this.isHidden = set;  
		return this.isHidden; 
	};

	this.getImage = function(){
		if(this.hidden())
			return this.getBack(); 
		return this.getFront();
	};

	this.getFront = function(){
		return 'cards/' + (this.id() + 1) + '.png';
	}

	this.getBack = function(){
		return 'cards/b2fv.png';
	};

	this.preload = function(){
	   $('<img/>')[0].src = this.getFront();
	};
}


function StopWatch(){

	var startTime = null; 
	var stopTime = null; 
	var running = false; 

	function getTime(){
		var day = new Date();
		return day.getTime();
	}

	this.start = function(){ 

		if (running == true)
	  	  return;
		else if (startTime != null) 
		    stopTime = null; 

		running = true;    
		startTime = getTime();

	};

	this.stop = function(){ 

		if (running == false)
		    return;    

		stopTime = getTime();
		running = false; 

	};

	this.reset = function(){
		startTime = null; 
		stopTime = null; 
		running = false;
	};

	this.duration = function(){ 
		var dif; 
		if (startTime == null)
			diff = 0; 
		else if (stopTime == null)
			diff = (getTime() - startTime);
		else
			diff = (stopTime - startTime);
		var seconds = Math.floor(diff / 1000);
		var subSeconds = Math.round((diff % 1000) / 10);
		return seconds + ':' + zeroFill(subSeconds, 2); 
	};
}
