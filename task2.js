function searchName(keyword , limit, cb){

const name = [
    'Abigail','Alexandra','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deirdre','Diana','Elizabeth',
    'Ella','Faith','Olivia','Penelope'
];


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
let searchResult = []

for(let i = 0; i < name.length; i++){
    const personName = name[i]
    let result = ""

    for(let i = 0; i < personName.length; i++){
        let converted = false
        for (let j = 0; j < upperCase.length; j++) {
            if(converted === false){
                if (personName[i] === upperCase[j]) {
                    result += lowerCase[j]
                    converted = true
                }
                if(j === 25){
                    if(personName[i] !== upperCase[j]){
                        result += personName[i]
                        converted = true
                    }
                }
            }
        }
    }

    let isFound = false
    for (let i = 0; i < result.length; i++) {
        let segment = ""
        for (let j = i; j < keyword.length + i; j++) {
            if(result[j] !== undefined){
                segment += result[j]
            }
        }
        if(segment === keyword){
            isFound = true
        }
        
    }
        if(isFound === true){
            searchResult = [...searchResult, personName]
        }
    }
        cb(searchResult, limit)
}

function limitResult(arr, lim) {
    let result = []
    for (let i = 0; i < lim; i++) {
        if(arr[i]){
            result = [...result, arr[i]]
        }
    }
    console.log(result)
}

searchName("an", 10, limitResult)
