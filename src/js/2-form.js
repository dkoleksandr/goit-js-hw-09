document.addEventListener('DOMContentLoaded', function () {
  const feedback = localStorage.getItem('feedback-form-state');

  if (feedback) {
    const formData = JSON.parse(feedback);

    document.querySelector('input').value = formData.email;
    document.querySelector('textarea').value = formData.message;
  }
});

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onChangeForm);
form.addEventListener('submit', onSubmitForm);

let email = '';
let message = '';

function onChangeForm(event) {
  if (event.target.nodeName === 'INPUT') {
    email = `${event.target.value}`;
  } else if (event.target.nodeName === 'TEXTAREA') {
    message = `${event.target.value}`;
  }

  const data = {
    email,
    message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmitForm(event) {
  event.preventDefault();

  const inputValues = {
    email: event.target.elements.email.value,
    message: event.target.elements.message.value,
  };

  console.log(inputValues);

  localStorage.removeItem('feedback-form-state');
  document.querySelector('input').value = '';
  document.querySelector('textarea').value = '';
}
