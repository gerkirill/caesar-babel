import { caesar } from './src/caesar';

const input = document.querySelector('.input');
const output = document.querySelector('.output');
const key = document.querySelector('.key');

input.addEventListener('input', onInputChanged);
key.addEventListener('change', onInputChanged);

function onInputChanged() {
  console.log(input.value, key.value);
}