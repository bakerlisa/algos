class Deck{
    constructor(){
        this.cards = []
        this.createDeck();
    }

    createDeck(deck){
        var suits = ['♣️', '🖤 ','♠️','♦️']
        var nums = ['A','2','3','4','5','6','7','8','9','J','Q','K']
        suits.forEach((suit) => {
            nums.forEach((num) => {
                console.log("new card")
                this.cards.push(new Card(suit, num));
            })
        })
        
    }

    allcards(cards){
        console.log(cards)
    }


    // add card to deck

    // shuffle
    // restart / new game


}

class Card{
    constructor(suit,color){
        this.suit = suit,
        this.color = color
    }
}

class BlackJack extends Deck{
    // deal
    // move
}



var deck = new Deck();
console.log(deck.allcards())

