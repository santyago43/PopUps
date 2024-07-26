const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card__product'),
      modalClose = document.querySelectorAll('.modal__close'),
      modalCard = document.querySelectorAll('.modal__card');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
};

// * Mostrar modal
cardBtn.forEach((cardBtn, i) =>{
    cardBtn.addEventListener('click', () => {
        activeModal(i)
    })
});

// * Ocultar modal
modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
});

// * Ocultar modal al hacr click en el fondo
modal.forEach((modal) => {
    modal.addEventListener('click', () => {
        modal.classList.remove('activeModal')
    })
});

modalCard.forEach((modalCard) => {
    modalCard.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
    })
});