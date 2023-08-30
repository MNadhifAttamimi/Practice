const { describe } = require("yargs");
const { nameValidation } = require("./validation");
const { ageValidation } = require("./validation");


describe('testing name validation', () => {  
    test('when input less 3 character should error', () => {
        let result = nameValidation('ab');

    
        expect(result).toEqual({ error: true, message: 'Nama harus lebih dari 3' });
    });

    test('when input number character should error', () => {
        let result = nameValidation('1234567890');


        expect(result).toEqual({ 
            error: true,
            message: 'Nama tidak boleh angka' });
    });

    test('when input 20 character should error', () => {
        let result = nameValidation('qwertyuiopasdfghjklzxcvbnm');


        expect(result).toEqual({
            error: true,
            message: 'qwertyuiopasdfgh'
        });
    });

    test('when input only space should error', () => {
        let result = nameValidation('      ');


        expect(result).toEqual({
            error: true,
            message: 'Nama harus lebih dari 3'
        });
    })

        test('should success', () =>{
            let result = nameValidation('Nadhif')

            expect(result).toEqual({
            error: false,
            message: 'OK',
            data: 'Nadhif'
        })
    })

    test('should success', () => {
        let result = nameValidation('bambam')

        expect(result).toEqual({
            error: false,
            message: 'OK',
            data: 'bambam'
        })
    })
})

describe('test ageValidation', () => {
    let result = ageValidation(10)

    expect(result).toEqual({error: true, message: 'umur harus lebih dari 12'})
})

