const {
    createData,
    addObj,
    findData,
    updateAllData,
    updateData,
    deleteData,
    findByname,
} = require("./CrudObj");

describe("test Crud Objects", () => {
    test("when create new object should success", () => {
        let bank = [];
        let result = createData(bank, { id: 1, name: "samsul" });

        // menampilkan seluruh data
        expect(result).toEqual([{ id: 1, name: "samsul" }]);
    });

    test("when add new object should success", () => {
        let bank = [{ id: 1, name: "samsul" }];
        let result = addObj(bank, { id: 2, name: "bambang" });

        // menampilkan seluruh data
        expect(result).toEqual([
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ]);
    });

    test("when find a object should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];
        let result = findData(bank, 2); // menggunakan dataArray.find((value)=>value.id == id)

        // menampilkan hanya object yang dibutuhkan
        expect(result).toEqual({ id: 2, name: "bambang" });
    });

    test("when update data name should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];
        let result = updateAllData(bank, 1, {name:"arifin"});
        expect(result).toEqual([
            { id: 1, name: "arifin", age:19 },
            { id: 2, name: "bambang", age: 15 },
        ]);
    });
    test("when update age and name should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];
        let result = updateAllData(bank, 1, {name:"arifin", age:20});

        expect(result).toEqual([
            { id: 1, name: "arifin", age:20 },
            { id: 2, name: "bambang", age: 15 },
        ]);
    });

    test("when delete data should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];

        // menghapus ID 2
        // menggunakan objectArray.findIndex((value)=>value.id == id)
        let result = deleteData(bank, 1);
        expect(result).toEqual([{ id: 2, name: "bambang" }]);
    });

    test("when find a object by name should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];
        let result = findByname(bank, 'samsul'); // menggunakan dataArray.find((value)=>value.id == id)

        // menampilkan hanya object yang dibutuhkan
        expect(result).toEqual({ id: 1, name: "samsul" });
    });

    test("when find id is fended should success", () => {
        let bank = [
            { id: 1, name: "samsul", age: 19 },
            { id: 2, name: "bambang", age: 15 },
        ];
        let result = checkId(bank, 1); // menggunakan dataArray.find((value)=>value.id == id)

        // menampilkan hanya object yang dibutuhkan
        expect(result).toEqual(true);
    });
    test("when find id is not fended should success", () => {
        let bank = [
            { id: 1, name: "samsul", age:19 },
            { id: 2, name: "bambang", age:15 },
        ];
        let result = checkId(bank, 4); // menggunakan dataArray.find((value)=>value.id == id)

        // menampilkan hanya object yang dibutuhkan
        expect(result).toEqual(false);
    });
});