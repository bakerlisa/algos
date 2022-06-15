class Deck{
    constructor(){
        this.cards = []
        this.createDeck();
    }

    createDeck(){
        var suits = ['♣️', '🖤 ','♠️','♦️']
        var nums = ['A','2','3','4','5','6','7','8','9','J','Q','K']
        suits.forEach((suit) => {
            nums.forEach((num) => {
                this.cards.push(new Card(suit, num));
            })
            this.cards.push(new Card('🃏', 'J'));
        })

    }

    allcards(cards){
        console.log(this.cards)
    }

}

class Card{
    constructor(suit,color){
        this.suit = suit,
        this.color = color
    }
}

class BlackJack extends Deck{
    constructor(deck){
        super();
        this.deck = deck
    }

    shuffle(deck){
        
    }
}

class Player{
    constructor(name){
        this.name = name
    }
}



var deck = new Deck();
console.log(deck.allcards())

var game = new BlackJack(deck)
console.log(game.allcards())

var player1 = new Player("Lisa")
// console.log(player1.name)


