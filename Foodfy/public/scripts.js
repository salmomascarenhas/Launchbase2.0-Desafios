const overModal = document.querySelector('.over-modal');
const modalClose = document.querySelector('.modal-close');
const cards = document.querySelectorAll('.card');

for(let card of cards){
    const id = card.getAttribute('id');
    
    card.addEventListener('click' ,() => {
        // window.location.href = `/recipes?id=${id}`; 
        overModal.classList.add('active');    
    });
}

modalClose.addEventListener('click', () => {
    overModal.classList.remove('active');
});