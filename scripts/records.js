const recordForm = document.forms['form-record-form'];
const recordSubmit = document.getElementById('record-submit');
const indexToEdit = recordSubmit.dataset.indexToEdit;

function clearRecords() {
  localStorage.removeItem('tbRecords');
  listRecords();
  alert('All records have been deleted !');
}

function addNew() {
  recordSubmit.value = 'Add';
  location.href = '#page-record-form';
}

function addRecord() {
  const formCheck = checkRecordForm();
  const formElements = [...recordForm.elements];
  formElements.pop();
  if (formCheck) {
    const obj = {};
    formElements.forEach((el) => {
      obj[el.name] = el.value;
    });
    var tbRecords = JSON.parse(localStorage.getItem('tbRecords'));
    if (tbRecords === null) {
      tbRecords = [];
    }
    tbRecords.push(obj);
    tbRecords.sort((a, b) => compareDates(a.date, b.date));
    localStorage.setItem('tbRecords', JSON.stringify(tbRecords));
    alert('Information saved successfully !');
    clearRecordForm();
    listRecords();
  } else {
    alert('Please complete the form properly:\n');
    return false;
  }
}

recordForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (recordSubmit.value === 'Add') {
    addRecord();
    location.href = '#page-records';
  } else if (recordSubmit.value === 'Edit') {
    editRecord(recordSubmit.dataset.indexToEdit);
    location.href = '#page-records';
    recordSubmit.removeAttribute('data-index-to-edit');
  } else {
    return false;
  }
});

$(document).on('pageshow', '#page-records', function () {
  listRecords();
});

$(document).on('pageshow', '#page-record-form', function () {
  const submitBtnValue = recordSubmit.value;

  if (submitBtnValue === 'Add') {
    clearRecordForm();
  } else if (submitBtnValue === 'Edit') {
    showRecordForm(recordSubmit.dataset.indexToEdit);
  }
});

function loadUserInformation() {
  const storageUser = JSON.parse(localStorage.getItem('user'));
  const userInfoDiv = document.getElementById('user-info-div');

  if (storageUser) {
    $('#user-info-div').append(`Hello guys, i am ${storageUser.firstName} ${storageUser.lastName}. My goals in life are ${storageUser.goals}`);
    $('#user-info-div').append('<br><a href="#page-user-info" class="ui-btn ui-btn-inline">Edit User Info</a>');
  }
}

function clearRecordForm() {
  const formElements = [...recordForm.elements];
  formElements.pop();
  formElements.forEach((el) => {
    el.value = '';
  });

  return true;
}

function compareDates(date1, date2) {
  if (typeof date1 === 'string') {
    date1 = new Date(date1);
  }
  if (typeof date2 === 'string') {
    date2 = new Date(date2);
  }
  if (date1.getTime() > date2.getTime()) {
    return 1;
  } else {
    return -1;
  }
}

function listRecords() {
  var tbRecords = JSON.parse(localStorage.getItem('tbRecords'));
  if (tbRecords) {
    tbRecords.sort((a, b) => compareDates(a.date, b.date));

    $('#records-table').html('');
    tbRecords.forEach((row, i) => {
      $('#records-table').append(
        '<tr><td>' +
          parseInt(i + 1) +
          '</td><td>' +
          row.date +
          '</td><td>' +
          row.time +
          '</td><td>' +
          row.slider +
          `</td><td><a onclick='callEdit(${i})' class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext">Edit</a><a onclick='callDelete(
            ${i}
          )' class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext">Delete</a></td></tr>`
      );
    });
  } else {
    tbRecords = [];
    localStorage.setItem('tbRecords', JSON.stringify(tbRecords));
    $('#records-table').html('');
    alert('No tbRecords found');
  }
}

function showRecordForm(index) {
  const tbRecords = JSON.parse(localStorage.getItem('tbRecords'));
  console.log(tbRecords);
  const indexRecord = tbRecords[parseInt(index)];
  console.log(tbRecords, indexRecord);

  const formElements = [...recordForm.elements];
  formElements.pop();

  if (indexRecord) {
    formElements.forEach((el, i) => {
      el.value = indexRecord[el.name];
    });
  } else {
    alert('Failed to retrieve the record');
  }
}

function checkRecordForm() {
  [date, time, slider] = [...recordForm.elements];
  if (date.value === '' || time.value === '' || slider.value === '') {
    return false;
  } else {
    return true;
  }
}

function callEdit(index) {
  recordSubmit.dataset.indexToEdit = index;
  recordSubmit.value = 'Edit';
  location.href = '#page-record-form';
}

function callDelete(index) {
  console.log('del');
  deleteRecord(index);
  listRecords();
}

function deleteRecord(index) {
  const tbRecords = JSON.parse(localStorage.getItem('tbRecords'));
  tbRecords.splice(index, 1);
  if (tbRecords.length === 0) {
    localStorage.removeItem('tbRecords');
  } else {
    localStorage.setItem('tbRecords', JSON.stringify(tbRecords));
  }
}

function editRecord(index) {
  const formCheck = checkRecordForm();
  const formElements = [...recordForm.elements];
  formElements.pop();
  if (formCheck) {
    var tbRecords = JSON.parse(localStorage.getItem('tbRecords'));

    const obj = {};
    formElements.forEach((el) => {
      obj[el.name] = el.value;
    });

    console.log(tbRecords[index]);
    tbRecords[index] = obj;

    tbRecords.sort((date1, date2) => {
      compareDates(date1.date, date2.date);
    });
    console.log(tbRecords);

    localStorage.setItem('tbRecords', JSON.stringify(tbRecords));
    alert('Information saved successfully !');
    clearRecordForm();
    listRecords();
  } else {
    alert('Please complete the form properly:\n');
    return false;
  }
}
