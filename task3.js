function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if (nilaiAwal < nilaiAkhir) {
        if (dataArray.length > 5) {
            let hasil = []
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir){
                    hasil.push(dataArray[i])
                    hasil.sort((a,b) => a-b)
                }
            }if(hasil.length == 0){
                return "Nilai tidak ada"
            }
            return hasil;
            // console.log(temp)
        }
        else{
            return "Jumlah angka dalam data array harus lebih dari 5"
        }
    }else {
        return ("Nilai akhir harus lebih besar dari nilai awal")
    }

}
const hasil = seleksiNilai(50,20,[2,25,4,14,17,30,8])
console.log(hasil)