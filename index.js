function writeCards(namesArray, eventName) {
  let thankYouArray = [];
  
  for (let i = 0; i < namesArray.length; i++) {
    thankYouArray[i] = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    
  }
  return thankYouArray;
}

function countdown (someInteger) {
  let counter = someInteger;
  
  while (counter >= 0) {
   console.log(counter);
   
   counter--;
  }
}