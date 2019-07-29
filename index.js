// const stringNames = ['Lisa', 'Kaitlin', 'Jan']
// const eventName = 'surprise'

function writeCards(stringNames, eventName) {
    let thankYouArray = []
    for (let i = 0; i < stringNames.length; i++) {
        thankYouArray.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
    }

    return thankYouArray
    
}

function countdown(integer) {
    while (integer >= 0) {
        console.log(integer--)
    }
}