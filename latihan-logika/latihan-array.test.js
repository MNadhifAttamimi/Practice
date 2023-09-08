
const {
    getLargestNumber,
    filterEvenNumber,
    sumArrayNumber,
    findDuplicates,
    sortArray,
    concatenateArrays,
    calculateAverage,
    allPositive,
    removeDuplicates,
    findIndexOf,
} = require("./latihan-array");

describe("Array Operations", () => {
    test("1. Menemukan angka terbesar dalam array", () => {
        expect(getLargestNumber([5, 8, 2, 10, 3])).toBe(10);
    });
    test("2. Filter angka genap di array", () => {
        expect(filterEvenNumber([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
    test("3. Menjumlahkan semua angka dalam array", () => {
        expect(sumArrayNumber([1, 2, 3, 4, 5])).toBe(15);
    });
    test("4. Mencari angka duplikat dalam array", () => {
        expect(findDuplicates([1, 2, 3, 2, 4, 5, 5])).toEqual([2, 5]);
    });
    test("5. Mengurutkan array secara ascending", () => {
        expect(sortArray([3, 1, 4, 2, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("6. Menggabungkan dua array menjadi satu", () => {
        expect(concatenateArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("7. Menghitung rata-rata dari angka dalam array", () => {
        expect(calculateAverage([10, 20, 30, 40, 50])).toBe(30);
    });
    test("8. Mengecek apakah semua angka dalam array positif", () => {
        expect(allPositive([1, 2, 3, -4, 5])).toBe(false);
    });
    test("9. Menghapus nilai-nilai duplikat dari array", () => {
        expect(removeDuplicates([1, 2, 3, 2, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("10. Mencari indeks pertama dari angka tertentu dalam array", () => {
        expect(findIndexOf([10, 20, 30, 40, 50], 30)).toBe(2);
    });
});