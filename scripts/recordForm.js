/*
  Name: Arefa Nila
  Date: 04-10-2022
  Assignment: week-5-lab
*/

// document.getElementById('record-submit').addEventListener('click', function (e) {
//   var localTable = localStorage.getItem('recordsTable');
//   if (localTable === undefined || localTable === null) {
//     var data = [];
//   } else {
//     var data = JSON.parse(localTable);
//   }
//   var obj = {};
//   var form = document.forms['form-record-form'];
//   var formElements = [...form.elements];

//   formElements.forEach((el) => {
//     obj[el.name] = el.value;
//   });
//   data.push(obj);

//   $('#records-table').html('');
//   data.forEach((row, i) => {
//     //insert password
//     $('#records-table').append('<tr><td>' + parseInt(i + 1) + '</td><td>' + row.date + '</td><td>' + row.time + '</td><td>' + row.slider + '</td></tr>');
//   });

//   localStorage.setItem('recordsTable', JSON.stringify(data));
// });
