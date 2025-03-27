document.addEventListener('DOMContentLoaded', init);



function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');
    // const element = document.querySelector('.alert');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    // document.addEventListener('click', (e) => {
    //     if (!element.contains(e.target)){
    //         element.style.display = 'none'
    //     }
    // })
    // NIE DZIALA I WTEDY NIE WYRZUCA BLEDU PO KLIKNIECIU click

}

function setRandomPosition(element, error = null) {

    try {
        element.style.top = Math.random() * 600 + 'px';
        element.style.left = Math.random() * 800 + 'px';

        if(error) {
            throw error;
        }

    } catch(err) {
        const element = document.querySelector('.alert');
        const alertMessage = element.querySelector('.alert__message');
        element.style.display = 'block';
        alertMessage.textContent = `${err.message}`

    }
    
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}

