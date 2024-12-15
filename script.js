const cardItem = document.querySelectorAll('.card-item')

let counter = 0

function left() {
    if(counter == 0){
        counter = cardItem.length / 4 - 1
    }else {
        counter--
        scroll()
    }
    
}

function right() {
    if(counter == 0){
        counter = cardItem.length
    }else {
        counter++
        scroll()
    }
}

function scroll() {
    cardItem.forEach((card)=>{
        card.style.transform = `translateX(${counter * 1250}px)`
    })
}