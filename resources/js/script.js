const p = document.querySelectorAll('p');
const button = document.querySelectorAll('button');
const howToPlay = document.getElementById('howToPlay');
const animation = document.getElementById('animation');


document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        p[0].classList.add('addSlideIn');
        p[0].innerText = 'Choose difficulty';
        p[0].style.textDecoration = 'underline';
    
    
        button[0].innerText = 'Easy';
        button[1].innerText = 'HARD';
        button[1].style.color = 'red';
        button[1].style.marginTop = '10px';
        button[1].style.marginBottom = '10px';
    
        setTimeout(() => {
            button.forEach((btn, index) => {
                const delay = index * 500;
    
                setTimeout(() => {
                    btn.classList.add('addFadeIn');
                }, delay);
            });

                setTimeout(() => {
                    howToPlay.innerText = 'How to play?';
                    howToPlay.classList.add('addFadeIn');    
                    p[1].classList.add('addFadeIn');
                    p[1].innerText = 'Choose TWO cards and wait for the program to compare them if you found a pair if not the cards will flip back and you get to choose again.';
                }, 1200);
        }, 1000);
        
    }, 4100);

});

button[0].addEventListener('click', function() {
    window.location.href = '../easy.html';
});

button[1].addEventListener('click', function() {
    window.location.href = '../hard.html';
});
