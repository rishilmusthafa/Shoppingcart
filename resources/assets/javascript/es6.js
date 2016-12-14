(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var x = 0;
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
}).then(function fulfillHandler(data) {
  console.log(data);
}, function rejectHandler(jqXHR, textStatus, errorThrown) {
  // ...
}).catch(function errorHandler(error) {
  // ...
});

},{}]},{},[1]);

//# sourceMappingURL=es6.js.map
