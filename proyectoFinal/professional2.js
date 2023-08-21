class Professional{
    constructor( name, age, weight, height, isRetired, nationality, oscarsNumber, profession,photo){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
    ////metodos
    printProfessional() {
        console.log( `
        Name: ${this.name}
        Age: ${this.age}
        Weight: ${this.weight}
        Height: ${this.height}
        Is Retired: ${this.isRetired}
        Nationality: ${this.nationality}
        Oscars Number: ${this.oscarsNumber}
        Profession: ${this.profession}\n`);
    }
}