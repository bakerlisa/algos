class Deck{
    constructor(){
        this.cards = []
    }

    createDeck(deck){
        var suits = ['♣️', '🖤 ','♠️','♦️']
        var nums = ['A',2,3,4,5,6,7,8,9,'J','Q','K']

        
    }

    add(){

    }
    // add card to deck

    // shuffle
    // restart / new game


}

class Card extends Deck{
    constructor(suit,color){
        super();
        this.suit = suit,
        this.color = color
    }
}

class BlackJack extends Deck{
    // deal
    // move
}



var deck = new Deck();
console.log(deck.createDeck())

