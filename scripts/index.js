/*
  Name: Arefa Nila
  Date: 04-10-2022
  Assignment: week-5-lab
*/

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const bksp = document.querySelector('.bksp');

const password = document.getElementById('password-login');

password.addEventListener('keypress', function (e) {
  if (e.which < 48 || e.which > 57) {
    e.preventDefault();
  }
});

zero.addEventListener('click', function (e) {
  password.value = password.value + '0';
});
one.addEventListener('click', function (e) {
  password.value = password.value + '1';
});
two.addEventListener('click', function (e) {
  password.value = password.value + '2';
});
three.addEventListener('click', function (e) {
  password.value = password.value + '3';
});
four.addEventListener('click', function (e) {
  password.value = password.value + '4';
});
five.addEventListener('click', function (e) {
  password.value = password.value + '5';
});
six.addEventListener('click', function (e) {
  password.value = password.value + '6';
});
seven.addEventListener('click', function (e) {
  password.value = password.value + '7';
});
eight.addEventListener('click', function (e) {
  password.value = password.value + '8';
});
nine.addEventListener('click', function (e) {
  password.value = password.value + '9';
});
bksp.addEventListener('click', function (e) {
  password.value = password.value.slice(0, -1);
});
