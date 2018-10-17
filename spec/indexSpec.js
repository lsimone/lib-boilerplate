const {default: sum} = require('../lib/index')

describe('test sum', () => {

    beforeAll(done => {
        setTimeout(() => {
            console.log('doing weird async stuff')
            done()
        }, 1000)
    })

    it('sums correctly', () => {
        expect(sum(2, 2)).toBe(4)
    })
})
