// Function Expression
// arrow function bekerja pada function expression
// const tampilNama2 = (nama) => { return `Halo, ${nama}`;}
// console.log('Erfan Gumelar');

// implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('Erfan Gumelar');

// tanpa parameter
// const tampilNama3 = () => 'Hello world!';
// console.log(tampilNama3());

// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = 'Erfan Gumelar';
//   this.umur = 33;
//   // console.log(this);
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//   }

// }

// const erfan = new Mahasiswa();

// Arrow Function
// method bisa langsung dibuat arrow function
// arrow function tidak memiliki konsep this
// pada function declaration maka akan terkena hoisting sehingga this = window

// const Mahasiswa = function () {
//   this.nama = 'Erfan Gumelar';
//   this.umur = 33;
  // console.log(this);
  // this.sayHello = () => {
  //   console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
  // }

  // function declaration kena hoisting
  // setInterval(function () {
  //   console.log(this.umur);
  // }, 1000);

//   setInterval( () => {
//     console.log(this.umur++);
//   }, 1000);

// }

// const erfan = new Mahasiswa();

// Studi kasus
const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if(this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  
  this.classList.toggle(satu);
  setTimeout( () => {
    this.classList.toggle(dua);
  }, 600);
});
