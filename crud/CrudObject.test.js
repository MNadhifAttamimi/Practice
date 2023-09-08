const {
    createData,
    addObj,
    findData,
    updateData,
    deleteData,
    findByname
} = require("./CrudObject");

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

    test("when update data should success", () => {
        let bank = [
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
        ];

        // mengubah ID 1 dengan nama Arifin
        // menggunakan objectArray.findByIdx((value)=>value.id === id)
        let result = updateData(bank, 1, "arifin");
        expect(result).toEqual([
            { id: 1, name: "samsul" },
            { id: 2, name: "bambang" },
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
});