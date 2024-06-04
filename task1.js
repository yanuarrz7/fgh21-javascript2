// 1. method Push()
// method push digunakan untuk menambah satu atau
// lebih data baru di akhir sebuah array
// contoh :

const number = [1,2,3]
number.push(4)
console.log(number)
// outputnya : [1,2,3,4]

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 2. method Pop()
// method pop adalah kebalikan dari push.
// method pop ini digunakan untuk menghapus item terakhir dari sebuah array.
// method pop ini tidak perlu menggunakan argumen.
// Contoh :

const myNum = [1, 2, 3]
myNum.pop()
console.log(myNum)
// outputnya : [1, 2]

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 3. method Unshift()
// jika push ini digunakan untuk menambah item baru di akhir sebuah array, 
// maka method unshift digunakan untuk menambah item baru di awal sebuah array.
// contoh :

const num = [3, 4]
num.unshift(1, 2);
console.log(num)
// outputnya : [1, 2, 3, 4]

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 4. method Shift()
// shift ini adalah kebalikan dari unshift.
// digunakan untuk menghapus item pertama dari sebuah array
// contoh :

const numb = [1, 2, 3]
numb.shift();
console.log(numb)
// outputnya : [2, 3]

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 5. method Includes()
// method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.
// contoh array nya : const buah = ['mangga', 'jeruk', 'apel']
// contoh :

const buah = ['mangga', 'jeruk', 'apel']
const hasil = buah.includes('jeruk', 1)
console.log(hasil)
// outputnya true, dikarenakan jeruk berada di index ke 0. jika kita ganti value 1 menjadi 0, maka hasilnya false
// karena yang berada di index ke 0 adalah mangga

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 6. method Slice()
// method ini digunakan untuk memotong array menjadi array baru atau sub-array
// atau bisa disebut juga untuk memilih satu atau beberapa item dari sebuah array
// contoh :

const fruit = ['mangga','jeruk','apel']
const result = fruit.slice(-2)
console.log(result)
// karena index awal adalah 0 maka yang disalin adalah elemen di index ke 0 sampai ke
// elemen sebelum index terakhir, index ke 2 atau yang terakhir tidak ikut disalin, maka
// yang tercetak adalah index ke 0 dan 1 yaitu mangga dan jeruk.
// bisa juga menggunakan index negatif (-2). maka yang akan di cetak adalah 2 elemen terakhir
// dalam hal ini adalah jeruk dan apel

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// 7. method Join()
// digunakan untuk menggabungkan elemen array menjadi nilai string
// contoh data : angka = [1,2,3,4,5,6]
// contoh :

const angka = [1,2,3,4,5,6]
console.log(angka.join("-"))
// output : 1-2-3-4-5-6

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 8. method Reverse()
// digunakan untuk membalikan urutan data dari dalam sebuah array
// contoh :

const data = [1,2,3,4,5,6]
data.reverse()
console.log(data)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 9. method forEach()
// digunakan untuk melakukan perulangan di dalam array
// contoh : 

const newData = ['a','x','g','s','t']
newData.forEach((item)=> {
    console.log(item)
})

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 10. method Filter()
// digunakan untuk melakukan filter data dengan kondisi tertentu pada setiap elemen
// dari array yang ada
// contoh : 

const genap = [1,2,3,4,5,6,7,8,9,10]
// tentukan kondisi untuk membuat array baru yang isinya adalah bilangan yang habis dibagi 2
const genapFilter = genap.filter(item => item % 2 == 0)
console.log(genapFilter)