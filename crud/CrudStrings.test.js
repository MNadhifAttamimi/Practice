const {
    createData,
    updateData,
    readByIdx,
    deleteData,
} = require("./CrudStrings");

describe.skip("test CRUDStrings", () => {
    test("create should success", () => {
        let bank = [];
        let result = createData(bank, "apple");

        expect(result).toEqual(["apple"]);
    });

    test("readyByIdx should success", () => {
        let bank = ["apple", "mango", "orange"];
        let result = readByIdx(bank, 1);

        expect(result).toEqual("mango");
    });

    test("updateData should success", () => {
        let bank = ["apple", "mango", "orange"];
        let result = updateData(bank, 2, "pear");

        expect(result).toEqual(["apple", "mango", "pear"]);
    });

    test("deleteData should success", () => {
        let bank = ["apple", "mango", "orange"];
        let result = deleteData(bank, 0);

        expect(result).toEqual(["mango", "orange"]);
    });
});