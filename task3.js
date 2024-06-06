const SeleksiNilai = function(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
    if (dataArray.length < 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }

    let result = []

    for (let i = 0; i < dataArray.length; i++) {
        const num = dataArray[i]
        if (num > nilaiAwal) {
            if(num < nilaiAkhir){
result = [...result, num]
            }
        }
        
    }


    if (result.length === 0) {
        console.log("Nilai tidak ditemukan")
    }else{
        // sorting algorithm
        quickSort(result, 0, result.length - 1)
        console.log(result)
    }
}    

// sorting algorithm quickSort()
function quickSort(arr, batasBawah, batasAtas){
    if(batasBawah < batasAtas){
        const num = partisi(arr, batasBawah, batasAtas)
        quickSort(arr, batasBawah, num -1)
        quickSort(arr, num + 1, batasAtas)
    }
}

function partisi(arr, batasBawah, batasAtas) {
    const pembagi = arr[batasAtas];
    let i = (batasBawah - 1);
    for (let j = batasBawah; j < batasAtas; j++) {
        if (arr[j] < pembagi) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[batasAtas]] = [arr[batasAtas], arr[i + 1]];
    return i + 1;
}

    SeleksiNilai(5,20,[2,25,4,14,17,30,8])


// quickSort() merupakan algoritma yang berbasis divide and conquer
// algoritma ini memilih elemen pivot atau pembagi dari array yang mengatur
// ulang elemen - elemen sehingga elemen yang lebih kecil dari pembagi
// berada disebelah kiri, dan elemen yang lebih besar disebelah kanan
// kenapa saya memilih quickSort(). karena memiliki kompleksitas waktu yang baik, efisien
// untuk dataset yang besar, implementasi yang efisien untuk kebutuhan kode diatas.

// bubbleSort() adalah salah satu algoritma pengurutan sederhana yang bekerja dengan cara 
// membandingkan dan menukar elemen-elemen secara berpasangan dalam sebuah array
// sehingga elemen-elemen yang lebih besar bergerak ke akhir array
// bubbleSort ini merupakan algoritma pengurutan yang sederhana, namun
// efisiensinya lebih rendah dari pada sorting algoritma yang lain seperti quickSort()
// terutama pada dataset yang besar