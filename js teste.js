let firstcard = 10
let secondcard = 4;

let cards = [firstcard, secondcard]
let sum = firstcard + secondcard
let hasblackjack = false
let isalive = true
let message = ""





let s = document.getElementById("s")


let elmessage = document.getElementById("message")

let cardel = document.getElementById("c")

function startgame() {
    rendergame()
}

function rendergame() {
     

    s.textContent = "sum : " + sum
    cardel.textContent = "Cards : "
    
    for (let i = 0; i < cards.length ; i++){
        cardel.textContent +=  cards[i] + "-" 
    }

    if (sum <= 20) {
        message = "do you want to draw a new card"
    }else if (sum === 21) {
        message = "whoo!you've got blackjack"
        hasblackjack = true
    }else {
        message = "you're out of the game!"
        isalive = false
    }

    elmessage.textContent = message
    
}


function newcard() {

cards.push(7)
 sum += cards[2]
  rendergame()
}
