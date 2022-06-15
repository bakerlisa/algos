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

    shuffle(cards){
        this.cards.sort(function() {return 0.5 - Math.random()});
    }

}

class Card{
    constructor(suit,number){
        this.suit = suit,
        this.number = number
    }
}

class BlackJack extends Deck{
    constructor(deck){
        super();
        this.deck = deck
    }

   
}

class Player{
    constructor(name){
        this.name = name
    }
}



var deck = new Deck();
// console.log(deck.allcards())

var blackjack = new BlackJack(deck)
blackjack.shuffle(deck)
console.log(blackjack.allcards(deck))

var player1 = new Player("Lisa")
// console.log(player1.name)


