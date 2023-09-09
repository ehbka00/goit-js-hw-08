import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = form.firstElementChild.firstElementChild;
const message = form.firstElementChild.nextElementSibling.firstElementChild;
const btn = form.lastElementChild;

form.addEventListener('keydown', throttle(saveFormData,500));
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!email.value || !message.value) {
        alert('Please, fill all inputs.');
    } else {
        console.log(localStorage.getItem('feedback-form-state'));
        localStorage.removeItem('feedback-form-state');
        form.reset();
    }
});

checkLocalStorage();

function saveFormData(form) {
    const data = {
        email: email.value,
        message: message.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function checkLocalStorage() {
    if (localStorage.getItem('feedback-form-state')) {
       const data = JSON.parse(localStorage.getItem('feedback-form-state'));
       email.value = data.email;
       message.value = data.message;
    }
}
