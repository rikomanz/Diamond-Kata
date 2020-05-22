const Ausschnitt = require('./DiamondKata')
const arrangement = require ('./DiamondKata')
const diamond = require ('./DiamondKata')

test ('ergebnis', () => {
    expect(diamond()).toEqual('---A---/n--B--B--/n-C---C-/nD----D/n-C---C-/n--B--B--/n---A---')
})
