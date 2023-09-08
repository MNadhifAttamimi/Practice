function getLargestNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Fungsi untuk menyaring angka genap dalam array
function filterEvenNumber(arr) {
    return arr.filter((num) => num % 2 === 0);
}

// Fungsi untuk menjumlahkan semua angka dalam array
function sumArrayNumber(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Fungsi untuk mencari angka duplikat dalam array
function findDuplicates(arr) {
    const seen = {};
    const duplicates = [];

    for (const num of arr) {
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;
        }
    }

    return duplicates;
}

// Fungsi untuk mengurutkan array secara ascending
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Fungsi untuk menggabungkan dua array menjadi satu
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Fungsi untuk menghitung rata-rata dari angka dalam array
function calculateAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// Fungsi untuk memeriksa apakah semua angka dalam array positif
function allPositive(arr) {
    return arr.every((num) => num > 0);
}

// Fungsi untuk menghapus nilai-nilai duplikat dari array
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}

// Fungsi untuk mencari indeks pertama dari angka tertentu dalam array
const findIndexOf = (arr, target) => {
    return arr.indexOf(target);
}

module.exports = {
    getLargestNumber,
    filterEvenNumber,
    sumArrayNumber,
    sortArray,
    concatenateArrays,
    findDuplicates,
    calculateAverage,
    allPositive,
    removeDuplicates,
    findIndexOf,
};