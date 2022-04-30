// Closure
// Merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut
// inner function (closure*)
// function init () {
//   let nama = 'Erfan';
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
//   // console.dir(tampilNama);
// }

// init();

// menjalankan function sebagian
// function init () {
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }

// let panggilNama = init();
// panggilNama('Arshaka');

// cara menggunakan anonimus function (function Factories)
// function init () {
//   return function (nama) {
//     console.log(nama);
//   }
// }

// let panggilNama = init();
// panggilNama('Arshaka');

// kenapa harus pakai closure
// 1. untuk membuat function factories
// 2. untuk membuat private method

// function ucapkanSalam (waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// // selamatPagi('Erfan');
// console.dir(selamatMalam);

// let counter = 0;
// let add = function () {
//   return ++counter;
// }

// counter = 10;

// console.log(add());
// console.log(add());
// console.log(add());


// counter menggunakan closure
// immediately invoke function menggunakan kurung buka kurung tutup di function nya dan ditambah () untuk menjalankan function nya
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  } 
})();

counter = 100; // tidak akan mengganggu function nya

console.log(add());
console.log(add());
console.log(add());