// Definisi higher order function adalah function yang beroperasi pada function yang lain
// Baik itu digunakan dalam argument, maupun sebagai return value
// function sebagai argument disebut callback
// function yang memiliki callback disebut higher order function
// Kenapa harus menggunakan higher order function
// 1. Abstraksi -> untuk membuat kode yang dibuat lebih sederhana / simpel
// 2. Functional Programming

// Contoh penggunaaan
// 1. Array.prototype.map() -> menghasilkan array baru
// 2. Array.prototype.filter() -> menghasilkan array baru
// 3. Array.prototype.reduce() -> menghasilkan array baru

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//   if( angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);


// filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);

// filter versi arrow function
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


// reduce
// jumlahkan seluruh isi array
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
// const newAngka = angka.reduce((accumulator, currentValue) =>
// accumulator + currentValue, 5);
// console.log(newAngka);


// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) //8, 9, 9
  .map(a => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);