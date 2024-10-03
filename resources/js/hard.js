let pexesoArray = [];
let beforeArray = [];
let livesArray = [];

for(let i = 1; i <= 2; i++) {
    livesArray.push({
        img: '/resources/ImgsLives/' + i + '.png'
    });
}

const livesContainer = document.getElementById('lives');
for(let i = 0; i < 1; i++){
    const img = document.createElement('img');
    img.classList.add('live');
    img.setAttribute('src', livesArray[0].img);
    img.setAttribute('id', `${i}`);
    livesContainer.appendChild(img);
}

for(let i = 1; i <= 15; i++) {
    beforeArray.push({
        img: '/resources/imgs/' + i + '.jpg'
    });
}


pexesoArray = beforeArray.concat(beforeArray); 

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

shuffle(pexesoArray);

/*while(beforeArray.length > 0) {
    let rnd = Math.floor(Math.random() * beforeArray.length);
    pexesoArray.push(beforeArray[rnd]);
    beforeArray.splice(rnd, 1);
}*/

let count = 1;
let id = 1;
let guessedId1 = '';
let guessedId2 = '';

document.addEventListener('DOMContentLoaded', () => {    
    const containerPexeso = document.getElementById('containerPexeso');
            
            pexesoArray.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const cardInner = document.createElement('div');
                cardInner.classList.add('cardInner');

                
                const cardFront = document.createElement('div');
                cardFront.classList.add('cardFront');
                const h3 = document.createElement('h3');
                h3.innerText = 'Meme Pexeso';
                cardFront.appendChild(h3);

                const cardBack = document.createElement('div');
                cardBack.classList.add('cardBack'); 
                const imgElement = document.createElement('img');
                imgElement.setAttribute('src', item.img);
                imgElement.setAttribute('id', `${id++}`);
                imgElement.classList.add('meme');
                cardBack.appendChild(imgElement);
                
                
                cardInner.appendChild(cardFront);
                cardInner.appendChild(cardBack);
                card.appendChild(cardInner);   
                
                containerPexeso.appendChild(card);
                
                cardFront.addEventListener('click', () => {
                    
                    if(guessedId1 !== ''){
                        guessedId2 = imgElement.getAttribute('id');
                        console.log('guess 2 is: ' + guessedId2);
                        cardInner.classList.add('isFlipped');
                        
                        setTimeout(() => {
                            if(guessedId1 === guessedId2){
                                alert('You found a pair');
                                guessedId1 = '';
                                guessedId2 = '';
                            } else {
                                alert('You did not find a pair');
                                setTimeout(() => {
                                    const cards = document.querySelectorAll('.isFlipped');
                                    cards.forEach(cardInner => {
                                        cardInner.classList.remove('isFlipped');
                                    });
                                }, 500);
                                guessedId1 = '';
                                guessedId2 = '';
                                if(count != 0){
                                    let minusLive = livesContainer.querySelector(`:nth-child(${count})`);
                                    minusLive.removeAttribute('src');
                                    minusLive.setAttribute('src', '/resources/ImgsLives/3.png');
                                    livesContainer.classList.add('shake');
                                    setTimeout(() => {
                                        livesContainer.classList.remove('shake');
                                        livesContainer.classList.add('shakeNervously');
                                    }, 500);
                                } else {
                                    setTimeout(() => {
                                        alert('You lost');
                                        window.location.reload();
                                    }, 1000);
                                }
                                count--;
                            }
                        }, 1000);

                    } else {
                        guessedId1 = imgElement.getAttribute('id');
                        console.log('guess 1 is: ' + guessedId1);
                        cardInner.classList.add('isFlipped');
                    }

                });


                /*cardInner.addEventListener('click', () => {
                    /*if(flippedCards.length < 2 && !cardInner.classList.contains('isFlipepd')){
                        cardInner.classList.add('isFlipped');
                        flippedCards.push(imgElement);

                        if(flippedCards.length === 2) {
                            const [firstCard, secondCard] = flippedCards;
                            const firstCardImg = firstCard.querySelector('.meme');
                            const secondCardImg = secondCard.querySelector('.meme');

                            if(firstCardImg && secondCardImg) {
                                const firstCardSrc = firstCardImg.src;
                                const secondCardSrc = secondCardImg.src;
                                
                                console.log(firstCardSrc + ' ' + secondCardSrc);
    
                                if(firstCardSrc === secondCardSrc) {
                                    console.log('You found a pair');
                                    flippedCards = [];
                                } else {
                                    console.log('You did not find a pair');
                                    setTimeout(() => {
                                        firstCard.classList.remove('isFlipped');
                                        secondCard.classList.remove('isFlipped');
                                    }, 1000);
                                }
                            }

                        }
                    }*/


                    /*cardInner.classList.add('isFlipped');
                    flippedCards.push(imgElement);

                    if(flippedCards.length == 2){
                        console.log(flippedCards[0].src + ' ' + flippedCards[1].src);
                        if(flippedCards[0].src === flippedCards[1].src){
                           console.log('You found a pair');
                        }else if(flippedCards[0].src !== flippedCards[1].src){
                            console.log('You did not find a pair');
                            flippedCards.forEach(card => card.parentElement.parentElement.classList.remove('isFlipped'));
                        }
                        flippedCards.length = 0;
                    }

                    if(flippedCards.length !== 2 && !cardInner.classList.contains('isFlipped')){
                        let flippedImg = document.querySelector('.cardBack img').src;
                        flippedCards.push(flippedImg);
                        console.log(flippedCards);
                        cardInner.classList.add('isFlipped');

                        if(flippedCards.length === 2){
                            const firstCard = flippedCards[0];
                            const secondCard = flippedCards[1];

                            if(firstCard === secondCard){
                                console.log('You found a pair');
                                flippedCards = [];
                            } else {
                                console.log('You did not find a pair');
                                flippedCards = [];
                                setTimeout(() => {
                                    const cards = document.querySelectorAll('.isFlipped');
                                    cards.forEach(cardInner => {
                                        cardInner.classList.remove('isFlipped');
                                    });
                                }, 1500);
                            }
                        }
                    }


                    


                    /*count++;
                    if(count == 3){
                        console.log(imgElement.src + ' ' + document.querySelector('.isFlipped img').src);
                        if(imgElement.src === document.querySelector('.isFlipped img').src){
                            console.log('You found a pair');
                            console.log(imgElement.src);
                            console.log(document.querySelector('.isFlipped img').src);
                        }else{
                            console.log('You did not find a pair');
                            console.log(imgElement.src);
                            console.log(document.querySelector('.isFlipped img').src);
                        }
                        const cards = document.querySelectorAll('.cardInner');
                        cards.forEach(card => {
                            card.classList.remove('isFlipped');
                        });
                        count = 0;
                    }
                });*/

            });
});

