const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
/*
function Ausschnitt(letter = 'c') {

    const before = (alphabet.slice(alphabet.indexOf('a'), alphabet.indexOf(letter) ))
    const after = before.slice().reverse()
    const together = before.concat([letter]).concat(after)
    return together
}*/

const letter = 'd'
const before = (alphabet.slice(alphabet.indexOf('a'), alphabet.indexOf(letter)))
const after = before.slice().reverse()
const letter_list = before.concat([letter]).concat(after)


function arrangement(elem, letter) {
    const innerSpace = '-'.repeat(alphabet.indexOf(elem) + 1)
    const outerSpace = '-'.repeat((alphabet.indexOf(elem) - alphabet.indexOf(letter)) * (-1))
    if (elem = 'a') {
        return `${outerSpace}${elem}${outerSpace}`
    }
    else {
        return `${outerSpace}${elem}${innerSpace}${elem}${outerSpace}`
    }
}


function diamond(elem){
    result = letter_list.map(arrangement())
}


module.exports = diamond(), arrangement()