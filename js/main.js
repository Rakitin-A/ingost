
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);


// Modal
    
function addEvent(element, event, callback) {
    let previousEventCallBack = element["on" + event];
    element["on" + event] = function (e) {
        let output = callback(e);

        if (output === false) return false;

        if (typeof previousEventCallBack === 'function') {
            output = previousEventCallBack(e);
            if (output === false) return false;
        }
    }
}

let form = document.getElementById('form');
let successClose = document.getElementsByClassName('modal__window-close')[0];
let successWindow = document.getElementById('window');

successWindow.style.display = 'none';

// Закрываем попап
addEvent(successClose, "click", function () {
    successWindow.style.display = 'none';
});

//отображаем попап
addEvent(form, "submit", function () {
    successWindow.style.display = 'flex';
    return false;
});


