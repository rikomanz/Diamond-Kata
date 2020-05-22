const Ausschnitt = require('./DiamondKata')
const arrangement = require ('./DiamondKata')
const diamond = require ('./DiamondKata')
/*
test ("gib richtigen Aussschnitt", () => {
    expect(Ausschnitt('c')).toEqual(['a','b','c','b','a'])
})*/
/*
test ('sd', () => {
    expect(arrangement('b')).toEqual('-b-b-')
    expect(arrangement('a')).toEqual('--aa--')
})*/

test ('ss', () => {
    expect(diamond().toEqual('--a--'))
})