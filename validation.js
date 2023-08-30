const { number } = require("yargs")

const nameValidation = (name) => {
    name = name.trim();

    if(name.length < 3 ) {
        return {error:true, message: 'Nama harus lebih dari 3'}
    }

     
    if (!isNaN(parseInt(name)) ) {
        return { error: true, message: 'Nama tidak boleh angka' }
    }

    if (name.length > 20) {
        return { error: true, message: 'qwertyuiopasdfgh'}
    }


    return {
        error: false,
        message: 'OK',
        data: name
    }


};

const ageValidation = (age) => {
    if (age > 12) {
        return { error: true, message: 'umur harus lebih dari 12'}
    }
}

module.exports = {nameValidation, ageValidation }