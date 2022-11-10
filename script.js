'use strict';


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// btnsOpen is a 'node list' its like an array of all three show-modal btns
const btnOpenModal = document.querySelectorAll(".show-modal");

function configModal(hide) {
    switch(hide) {
        case true:
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            break;
        case false:
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
            break;
    }
}

//loop threw the show-modal buttons
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function(){
        // modal.classList.remove('hidden');
        // overlay.classList.remove('hidden');
        configModal(false);
    })
}

// instead of creating anonoumous function just pass in name of the "event handeler function"
btnCloseModal.addEventListener('click', configModal);
overlay.addEventListener('click', configModal);

// handle key presses aka "global event"
// this will be called on any key press
// to find out which key was pressed pass in the 'event' object
// and get the value of the key pressed
document.addEventListener('keydown', function(event){
    if (event.key === 'Escape' && !modal.classList.contains('hidden')){
        configModal(true);
    }
})
