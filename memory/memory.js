
function cardOnClick(card, game){
	var id = card.attr('id'); 
	var card_id = id.replace('card-', '');
	var card = game.getCard(card_id); 
	if(card.hidden() == false || $('.shown').length >= 2)
		//Doesn't do anything if the card's already been shown or there are too many shown cards
		return; 
	
	game.unhideCard(card_id);

	var shownCards = $('.shown'); 

	if(shownCards.length == 2){

		var ids = []; 
		var cards = [];
		shownCards.each(function(index){
			ids[index] = $(this).attr('id');
			cards[index] = game.getCard(ids[index]);
		});

		var id1 = ids[0]; 
		var id2 = ids[1];

		//alert(id1 + id2); 

		var card1 = cards[0]; 
		var card2 = cards[1]; 

		if(card1.match(card2)){
			game.matchCard(id1);
			game.matchCard(id2);

			//Checks to see if the game is won yet
			if(game.win()) {
				$('#correct').append('<a href="../frames/3.html">Next  &#187;</a>');
				$('#you-rock').html("Great, all the socks have been matched! ");
			}
		}else{
			game.hideCard(id1, 500);
			game.hideCard(id2, 500);
		}
	}


	//alert(card_id);
}



function Game(){
	var deck;

	var isGoing = true; //State of the game

	this.idFromString = function(str){
		if(typeof(str) == 'string')
			return str.replace('card-', '');
		return str; 
	}

	this.getCard = function(index){
		if(typeof(index) == 'string')
			index = this.idFromString(index);
		return this.deck.get(index);
	};

	this.showCard = function(id){
		id = this.idFromString(id);
		var card = this.getCard(id); 
		return '<img src="' + card.getImage() + '" id="card-' + id + 
				'" class="card" width="' + card.width() + '" height="' + card.height() + '" />'; 
	};

	this.getDeck = function(){
		this.deck = new Deck();
		this.deck.populate();
		this.deck.shuffle(); 
	};

	this.addCards = function(){
		this.getDeck();
		var num_rows = 4; 
		var num_cols = this.deck.length() / num_rows; 
		var k = 0;
		for(i = 0; i < num_rows; i++){
			$('#game').append('<br />');
			for(j = 0; j < num_cols; j++){
				$('#game').append(this.showCard(k));
				k++;
			}
		}

		var game = this; 
		$('.card').click(function(){

			cardOnClick($(this), game);
		});
	};

	this.removeCards = function(){
		$('#game').empty();
	};

	this.unhideCard = function(id){
		id = this.idFromString(id);
		var card = this.getCard(id);
		card.hidden(false);
		//alert(card.hidden());

		$('#card-' + id).attr('src', card.getImage());
		$('#card-' + id).addClass('shown');
	};

	this.hideCard = function(id, timeout){
		id = this.idFromString(id);
		var card = this.getCard(id);
		card.hidden(true);
		//alert(card.hidden() +  card.getImage());
		$('#card-' + id).removeClass('shown');

		setTimeout(function(){
			$('#card-' + id).attr('src', card.getImage());
		}, timeout);

		//$('#card-' + id).attr('src', card.getImage());
	};

	this.matchCard = function(id){
		id = this.idFromString(id);
		var card = this.getCard(id);
		$('#card-' + id).removeClass('shown');
		$('#card-' + id).addClass('matched');
	};

	this.win = function(){
		if($('.matched').length < this.deck.length())
			return false; 
		return true;
	};

}

$('document').ready(function(){
	

	var game = new Game(); 

	game.addCards(); 
/*
	$('#new-game').click(function(){
		game.restart(); 
	});matchCard

	setInterval(function(){
		$("#timer").html(game.duration());
	}, 100);
*/
	//$('#game').append(deck.length());
});