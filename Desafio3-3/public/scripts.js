const cards = document.querySelectorAll('.card');
// const modalOverlay = document.querySelector('.modal_overlay');
// const modal = document.querySelector('.modal');
// const closeModal = document.querySelector('.close_modal');
// const maximizeModal = document.querySelector('.maximize_modal')


for (let card of cards){
    const courseId = card.getAttribute('id');

    card.addEventListener('click', function(){
        window.location.href = `/courses/${courseId}`
    });
}

// closeModal.addEventListener('click', function(){
//     modalOverlay.classList.remove('active');
//     modalOverlay.querySelector('iframe').src = '';
// });


// maximizeModal.addEventListener('click', function() {
//         modal.classList.toggle('maximized');
// });

