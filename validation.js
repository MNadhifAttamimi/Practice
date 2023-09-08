const nameValidation = (name) => {

    name = name.trim();

    if(name.length <= 3) {
        return {error:true, message:"Nama harus lebih dari 3"}
    }

    if(!isNaN(parseInt(name))) {
        return {error:true, message:"Nama tidak boleh diisi dengan angka"}
    }

    if(name.length > 20) {
        return {error:true, message:"Nama tidak boleh diisi lebih dari 20"}
    }

    return {error:false, message:'Confirm', data:name}
};

const ageValidation = (age) => {
    if(age <= 12) {
        return {error:true, message:"Underage"}
    }

    if(age >= 90) {
        return {error:true, message:"Moreage"}
    }
    
    return {error:false, message:'Confirm', data:age}
}

module.exports = { nameValidation, ageValidation}