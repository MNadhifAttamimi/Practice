const { createData, updateData, findById, deleteData } = require("./CrudObj");

describe('Test Crud Objects', () => {
    test('when create new obj should success', () => {
    let bank=  [];
    let result = createData(bank, {id: 1, name: 'Samsul'});

    //menapmpilkan seluruh data
    expect(result).toEqual([{ id: 1, name: 'Samsul'}])
});

test('when add new object should success', () => {
    let bank = [{ id: 1, name: 'Samsul' }];
    let result = createData(bank, {id: 2, name: 'Bambang'})


expect(result).toEqual([
    { id: 1, name: 'Samsul' },
    { id: 2, name: 'Bambang' }
 ])
});

test('when find a object should success', () => {
    let bank = [
        {id: 1, name: 'Samsul'},
        {id: 2, name: 'Bambang'}
    ]
    let result = findById(bank, 2);//menggunakan dataArray.find((value))=>value.id == id)

    //menampilkan hanya object yang dibutuhkan
    expect(result).toEqual({ id: 2, name: 'Bambang' })
});

test('when update data should success', () => {
    let bank = [
        { id: 1, name: 'Samsul' },
        { id: 2, name: 'Bambang' }
    ];

    //mengubah ID 1 dengan nama Arifin
    //menggunakan objectArray.findIndex
    let result = updateData(bank, 1, 'Arifin');
    expect(result).toEqual([
        { id: 1, name: 'Samsul' },
        { id: 2, name: 'Bambang' }
    ]);
  });
})

test('when delete data should success', () => {
    let bank = [
        { id: 1, name: 'Samsul' },
        { id: 2, name: 'Bambang' }
    ];
    let result = deleteData(bank, 2);
    expect(result).toEqual([{ id: 1, name: 'Samsul'}])
})