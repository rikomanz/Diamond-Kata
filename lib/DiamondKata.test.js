const Ausschnitt = require('./DiamondKata')

test ("gib richtigen Aussschnitt", () => {
    expect(Ausschnitt('c')).toEqual(['a','b','c','b','a'])
})