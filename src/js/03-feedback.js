import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// console.dir(form);

let onDataForm = {};

const onElForm = () => {
  const savedMsg = localStorage.getItem('feedback-form-state');
  onDataForm = JSON.parse(savedMsg) ?? {};
  const formDataKeys = Object.keys(onDataForm);

  if (savedMsg) {
    formDataKeys.map(key => {
      form.elements[key].value = onDataForm[key];
    });
  }
};

const onInputForm = evt => {
  onDataForm[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(onDataForm));
};

const onSubmitForm = evt => {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(onDataForm);

  evt.target.reset();
};

onElForm();
form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);
