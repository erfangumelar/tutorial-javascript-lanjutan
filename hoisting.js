// 2.1 EXECUTION AudioContext, HOISTING & SCOPE

// console.log(nama); //undefined
// var nama = 'Erfan';

// 1. creation phase pada Global Context
// nama variabel = undefined
// nama function = fn ()
// hoisting
// window = global object
// this = window

// 2. execution phase


// console.log(sayHello());

// var nama = 'Erfan';
// var umur = 33;

// function sayHello() {
//   return (`Halo, nama saya ${nama}, saya ${umur} tahun.`)
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Erfan Gumelar';
// var username = '@erfangumelar';

// function cetakURL (username) {
//   console.log(arguments);
//   var instagramURL = 'http://instagram.com';
//   return instagramURL + username;
// }

// console.log(cetakURL('@riani', '@maryam'));


// Latihan soal
function satu() {
  var nama = 'Erfan';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'Riani';
satu();
dua('Arshaka');
console.log(nama);