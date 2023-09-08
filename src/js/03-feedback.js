import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = form.firstElementChild.firstElementChild;
const message = form.firstElementChild.nextElementSibling.firstElementChild;
const btn = form.lastElementChild;

form.addEventListener('keydown', throttle(saveFormData,500));
btn.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    if (localStorage.getItem('formData')) {
        console.log(localStorage.getItem('formData'))
    } 
});

checkLocalStorage();

function saveFormData(form) {
    const data = {
        email: email.value,
        message: message.value
    }

    localStorage.setItem('formData', JSON.stringify(data));
}

function checkLocalStorage() {
    if (localStorage.getItem('formData')) {
       const data = JSON.parse(localStorage.getItem('formData'));
    //    email.value = data.email;
       email.value = 'email';
       message.value = 'message';
    //    message.value = data.message;
    }
}
