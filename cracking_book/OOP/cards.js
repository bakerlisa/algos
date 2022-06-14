class Deck{
    constructor(deck){
        this.deck = deck
    }

    createDeck(deck){
        var newCard;
        for(var i=0;i<=52;i++){
            for(var j=0; j<=4; j++){
                if(j % 2 === 0){
                    newCard = new Card(i,'red')
                }else{
                    newCard = new Card(i,'black')
                }
            }
        }
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

