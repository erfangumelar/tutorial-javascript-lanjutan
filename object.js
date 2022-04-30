// Cara membuat object pada javascript
// 1. Object Literal
// let mahasiswa1 = {
//   nama: 'Erfan Gumelar',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }
// }

// let mahasiswa2 = {
//   nama: 'Riani Maydita',
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }
// }

// 2. Function Declaration
// function Mahasiswa (nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Main`)
//   }
//   return mahasiswa;
// }

// let erfan = Mahasiswa('Erfan', 10);
// let arshaka = Mahasiswa('Arshaka', 20);

// cara yang lebih efektif lagi
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Main`)
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur`)
//   }
// }

// function Mahasiswa (nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;
  
//   return mahasiswa;
// }

// let erfan = Mahasiswa('Erfan', 10);
// let arshaka = Mahasiswa('Arshaka', 20);

// 3. Constructor Function
// Keyword new
// function Mahasiswa (nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Main`)
//   }
// }

// let erfan = new Mahasiswa('Erfan', 50);

// 4. Object.create
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Main`)
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur`)
//   }
// }

// function Mahasiswa (nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
  
//   return mahasiswa;
// }

// let erfan = Mahasiswa('Erfan', 10);
// let arshaka = Mahasiswa('Arshaka', 20);

// Prototype
// function Mahasiswa (nama, energi) {
//   this.nama = nama;
//   this.energi = energi;   
// }

//   Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }

//   Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Main`)
//   }

// let erfan = new Mahasiswa('Erfan', 50);

// Versi Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  }

  main (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat Main`)
  }

}

let erfan = new Mahasiswa('Erfan', 50);