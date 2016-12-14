"use strict"
let x= 0;
console.log(x);
function ajax(options) {
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}
ajax({
  url: "https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1",
  type: 'get',
  contentType: 'application/json; charset=utf-8',
  data: {
    something: something,
    anotherthing: anotherthing
  }
}).then(
  function fulfillHandler(data) {
    console.log(data);
  },
  function rejectHandler(jqXHR, textStatus, errorThrown) {
    // ...
  }
).catch(function errorHandler(error) {
  // ...
});
