function letter(){
    return 'A'
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

/*function Ausschnitt(letter = 'c') {

    const before = (alphabet.slice(alphabet.indexOf('a'), alphabet.indexOf(letter) ))
    const after = before.slice().reverse()
    const together = before.concat([letter]).concat(after)
    return together
}*/

function arrangement(elem, letter = 'c') {
    const innerSpace = '-'.repeat(alphabet.indexOf(elem))
    const outerSpace = '-'.repeat((alphabet.indexOf(elem)-alphabet.indexOf(letter))*(-1))
    return  `${outerSpace}${elem}${innerSpace}${elem}${outerSpace}`
}



module.exports = arrangement

