import './less/index.less'

// Your code goes here!

//keydown event
const logo = document.querySelector('.logo-heading');

function fKey(evt) {
    if (evt.key === 'f') {
        logo.textContent = "Hella Fun Freakin Bus";
    }
};
document.addEventListener('keydown', fKey);

//load event 
window.addEventListener('load', (evt) => {
    alert('This page is loaded! Just like you will be on this Hella Fun Freakin Bus!');
    
})




