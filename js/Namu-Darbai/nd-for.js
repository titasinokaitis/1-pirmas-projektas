console.log ('1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.');

for(let i = 0; i <= 10; i++) {
    console.log('number:', i);
}

console.log('2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.');
for(let i = 10; i >= 0; i--) {
    console.log('number:', i);
}


console.log('3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.');
for(let i = 0; i <= 20; i+=2) {

    console.log('number:', i);
}


console.log('4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.');
for(let i = 1; i <= 20; i+=2) {

    console.log('number:', i);
}

console.log('5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).');

for(let i = 0; i <= 10;  i++) {

    console.log('number:', (i**2));
}
console.log('6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.).');

for(let i = 0; i <= 10; i++) {

    console.log('number:', (i**3));
}
console.log('7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).');
for (let n = 7; n <= 7; n++) {
    console.log('n', n);

    for(let i = 1; i <= 7; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}


console.log('8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.).');

for (
    

    let n = 0 ; n <= 5; n++) {
        
    console.log('*');
}
//9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).
//10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.
//11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.
//12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.
//13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!.