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

function Deck() {
	this.cards = Array();

	this.populate = function(){
		this.cards = new Array(
			new Card(1), new Card(1),
			new Card(2), new Card(2),
			new Card(3), new Card(3),
			new Card(4), new Card(4),
			new Card(5), new Card(5),
			new Card(6), new Card(6),
			new Card(7), new Card(7),
			new Card(8), new Card(8)
			);
	};

	this.getCards = function(){
		return this.cards; 
	};

	this.getCard = function(id){
		return this.cards[id];
	};

	this.get = function(index){
		return this.cards[index];
	};

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

function Card(number){
	this.number = number; 
	this.isHidden = true;

	this.hidden = function(h) {
		if(h != null)
			this.isHidden = h;
		return this.isHidden;
	}

	this.getNumber = function(){
		return this.number; 
	};

	this.width = function(){
		return 100; 
	};

	this.height = function(){
		return 100;
	}

	this.match = function(card){
		return this.getNumber() == card.getNumber(); 
	};

	this.getImage = function(){
		if(this.hidden())
			return this.getBack(); 
		return this.getFront();
	};

	this.getFront = function(){
		return 'socks/sock' + (this.getNumber()) + '.png';
	}

	this.getBack = function(){
		return 'socks/shadowSock.png';
	};

	this.preload = function(){
	   $('<img/>')[0].src = this.getFront();
	};
}

