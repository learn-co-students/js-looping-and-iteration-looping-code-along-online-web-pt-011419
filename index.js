// Code your solutions in this file
function writeCards(people, event) {
  let cards = [];

  for (let i = 0; i < people.length; i++) {
    cards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
  }

  return cards

}

function countdown(n) {
    while (n >= 0) {
      console.log(n--);
    }
}
