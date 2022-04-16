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

const passcode = document.getElementById('password-login');

passcode.addEventListener('keypress', function (e) {
  if (e.which < 48 || e.which > 57) {
    e.preventDefault();
  }
});

function addValueToPassword(button) {
  if (button === 'bksp') {
    passcode.value = passcode.value.slice(0, -1);
  } else {
    passcode.value = passcode.value + button;
  }
}

function loginHandle() {
  const passcodeValue = document.getElementById('password-login').value;
  const realPasscode = getPassword();

  if (passcodeValue === realPasscode) {
    location.href = '#page-disclaimer';
    localStorage.setItem('agreedToLegal', true);
  } else {
    alert('Incorrect password');
  }
}

function agreedToLegal() {
  if (JSON.parse(localStorage.getItem('agreedToLegal')) === true) {
    console.log('agreed');
    const user = localStorage.getItem('user');
    if (user) {
      location.href = '#page-menu';
    } else {
      location.href = '#page-user-info';
    }
  } else {
    console.log('not agreed');
  }
}

function getPassword() {
  localStorage.setItem('mod', 'mod');
  if (localStorage.getItem('mod') != null) {
    localStorage.removeItem('mod');

    // checks user in localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user.passcode;
    } else {
      return '2345';
    }
  } else {
    alert('Local Storage not available');
  }
}
