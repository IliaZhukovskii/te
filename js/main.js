function openModal(){
    let modal = document.querySelector('.modal-overlay')
    modal.classList.add('showModal')

    document.body.addEventListener('click', (event) =>{
        let target = event.target
        if (!target.closest('.modal') && !target.closest('.main-block__info-button')) {
            closeModal()
        }
      })

      document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            closeModal()
        }
    }
}

function closeModal(){
    let modal = document.querySelector('.modal-overlay')
    modal.classList.remove('showModal')
}