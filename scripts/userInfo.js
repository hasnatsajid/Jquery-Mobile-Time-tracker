/*
  Name: Arefa Nila
  Date: 04-10-2022
  Assignment: week-5-lab
*/

var userForm = document.forms['form-user-info'];
var formElements = [...userForm.elements];

var localTable = localStorage.getItem('user');
if (localTable === undefined || localTable === null) {
  var data = {};
} else {
  var data = JSON.parse(localTable);
  formElements.forEach((el) => {
    el.value = data[el.name];
  });
}

document.getElementById('user-submit').addEventListener('click', function () {
  var obj = {};
  formElements.forEach((el) => {
    obj[el.name] = el.value;
  });
  localStorage.setItem('user', JSON.stringify(obj));
});
