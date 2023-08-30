const { createData, readbyIdx, updateData, deleteData } = require("./CrudStrings")

describe('test crudStrings', () => {
    test('when create should success', () => {
        let bank = [];
        let result = createData(bank, 'apple')

        expect(result).toEqual(['apple'])
    })
})

test('when readbyIdx should success', () => {
    let bank = ['apple', 'mango', 'orange'];
    let result = readbyIdx(bank, 1)

    expect(result).toEqual('mango')
})

test('when updateData should success', () => {
    let bank = ['apple', 'mango', 'orange'];
    let result = updateData(bank, 2, 'pear')

    expect(result).toEqual(['apple', 'mango', 'pear'])
})

test('when deleteData should success', () => {
    let bank = ['apple', 'mango', 'orange'];
    let result = deleteData(bank, 0)

    expect(result).toEqual(['mango', 'orange'])
})
