let calculation = localStorage.getItem('equation') || '';
updateCalculation('');

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-equation')
    .innerHTML = calculation;
  localStorage.setItem('equation', calculation);
}