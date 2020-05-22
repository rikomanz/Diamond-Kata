const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const letter = 'D'
const before = (alphabet.slice(alphabet.indexOf('A'), alphabet.indexOf(letter)))
const after = before.slice().reverse()
const letter_list = before.concat([letter]).concat(after)


function arrangement(elem) {
    const innerSpace = '-'.repeat(alphabet.indexOf(elem) + 1)
    const outerSpace = '-'.repeat((alphabet.indexOf(elem) - alphabet.indexOf(letter)) * (-1))
    if (elem === 'A') {
        return `${outerSpace}${elem}${outerSpace}`
    }
    else {
        return `${outerSpace}${elem}${innerSpace}${elem}${outerSpace}`
    }
}


function diamond(){
    result = letter_list.map(arrangement).join('/n')
    return result
}


module.exports = diamond