/*
funkcija, kuri gavusi zodi, is jo padaro korektiska varda.
*/

function validName (name) {
    const firstLetter = name[0].toUpperCase();
    const restLetters = name.slice(1).toLowerCase();

    let properName = firstLetter + restLetters;


    return properName;

}

console.log(validName('jonas'), '-->', 'Jonas');
console.log(validName('maRYTE'), '-->', 'Maryte');
console.log(validName('PeTrAs'), '-->', 'Petras');
console.log(validName('ONA'), '-->', 'Ona');