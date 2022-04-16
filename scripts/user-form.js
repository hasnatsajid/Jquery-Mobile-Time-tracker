const userForm = document.forms['form-user-info'];
const formElements = [...userForm.elements];

function checkUserForm() {
  [firstName, lastName, pass, goals] = [...formElements];

  if (firstName.value !== '' && lastName.value !== '' && pass.value.length < 10 && /^\d+$/.test(pass.value) && goals.value !== '') {
    return true;
  } else {
    return false;
  }
}

function showUserForm() {
  var localTable = localStorage.getItem('user');
  if (localTable) {
    var data = JSON.parse(localTable);
    formElements.forEach((el, i) => {
      el.value = data[el.name];
    });
  } else {
    console.log(localTable);
  }
}

function saveUserForm() {
  const obj = {};
  const checked = checkUserForm();
  if (checked) {
    formElements.forEach((el) => {
      obj[el.name] = el.value;
    });
    localStorage.setItem('user', JSON.stringify(obj));
    if (localStorage.getItem('user')) {
      location.href = '#page-menu';
    } else {
      alert('Failed to save');
    }
  } else {
    alert(`Complete the form properly:\nName fields should not be empty\nPassword should be numeric\nGoals should not be empty`);
  }
  console.log(obj);
}
