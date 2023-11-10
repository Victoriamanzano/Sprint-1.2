const emailInput = document.getElementById('emailInput');
const btnS8 = document.getElementById('btnS8');
const errorAccordion = document.getElementById('errorAccordion');

errorAccordion.style.display = 'none';

btnS8.addEventListener('click', () => {
  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(emailValue)) {
    emailInput.style.border = '1px solid #ccc'; 
    btnS8.classList.add('black-border');
    errorAccordion.style.display = 'block';
  } else {
    btnS8.classList.remove('black-border');
    errorAccordion.style.display = 'none';
    emailInput.value = '';
  }
});
