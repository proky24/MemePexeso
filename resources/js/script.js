const p = document.querySelector('p');
const button = document.querySelectorAll('button');


document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        p.classList.add('addSlideIn');
        p.innerText = 'Choose difficulty';
        p.style.textDecoration = 'underline';
    
    
        button[0].innerText = 'Easy';
        button[1].innerText = 'HARDCORE';
    
        setTimeout(() => {
            button.forEach((btn, index) => {
                const delay = index * 500;
    
                setTimeout(() => {
                    btn.classList.add('addFadeIn');
                }, delay);
    
            });
        }, 1000);
        
    }, 4100);

});

button[0].addEventListener('click', function() {
    window.location.href = '../easy.html';
});

button[1].addEventListener('click', function() {
    window.location.href = '../hard.html';
});
