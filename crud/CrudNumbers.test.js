const { createData, readAll, readbyIdx, updateData, deleteData } = require("./CrudNumbers");

describe.skip('test crud numbers', () => {
    test('when create should success', () => {
        let bank = [];
        let result = createData(bank, 5)

        expect(result).toEqual([5])
    })
})

test('when readAll should success', () => {
    let bank = [3, 4, 5];
    let result = readAll(bank)

    expect(result).toEqual([3, 4, 5])
})

test('when readbyIdx should success', () => {
    let bank = [3, 4, 5];
    let result = readbyIdx(bank, 2)

    expect(result).toEqual(5)
})

test('when updateData should success', () => {
    let bank = [3, 4, 5];
    let result = updateData(bank, 1, 8)

    expect(result).toEqual([3, 8, 5])
})

test('when deleteData should success', () => {
    let bank = [2, 3, 4, 5];
    let result = deleteData(bank, 2)

    expect(result).toEqual([2, 3, 5])
})

test("when update name should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 16 },
            { id: 2, name: "bambang", age: 16 },
        ];

    // mengubah ID 1 dengan nama Arifin
    // mengubah ID 1 dengan nama Arifin
    // menggunakan objectArray.findByIdx((value)=>value.id === id)
    // menggunakan objectArray.findByIdx((value)=>value.id === id)
    let result = updateData(bank, 1, "arifin", 17);
        expect(result).toEqual([
            { id: 1, name: "arifin", age: 17 },
            { id: 2, name: "bambang", age: 16 },
        ]);
    });


