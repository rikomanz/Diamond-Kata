function letter(){
    return 'A'
}


function Ausschnitt(letter = 'c') {

    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const before = (alphabet.slice(alphabet.indexOf('a'), alphabet.indexOf(letter) ))
    const after = before.slice().reverse()
    const together = before.concat([letter]).concat(after)
    return together
}


module.exports = Ausschnitt
