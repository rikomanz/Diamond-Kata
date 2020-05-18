function letter(){
    return 'A'
}


function Ausschnitt(letter) {

    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (alphabet.slice(alphabet.indexOf('a'), alphabet.indexOf(letter) +1 ))
}


module.exports = Ausschnitt
