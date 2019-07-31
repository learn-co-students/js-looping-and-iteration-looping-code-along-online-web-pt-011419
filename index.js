// Code your solutions in this file
let thankyouArray = []

function writeCards(stringsArray, eventName) {
    for (let i = 0; i < stringsArray.length; i++){
       thankyouArray.push(`Thank you, ${stringsArray[i]}, for the wonderful surprise gift!`)
    }
    return thankyouArray;
}

function countdown(int){
    while (int > 0){
        console.log(int);
        int -= 1;
    }
    console.log(int);
}