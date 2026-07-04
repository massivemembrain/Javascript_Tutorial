let buttonElement = document.querySelector('.js-button');

function toggleButton(buttonType) {
    const currentElement = document.querySelector(buttonType);
    
    if (currentElement.classList.contains('is-toggled')) {
        currentElement.classList.remove('is-toggled')
    } else {
        buttonElement.classList.remove('is-toggled');
        currentElement.classList.add('is-toggled');
        buttonElement = currentElement;
    }
}