console.log('\n1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą');

let suma = 0;
for (let i = 5; i <= 15; i++) {
    suma += i;
}
console.log("Suma nuo 5 iki 15 yra:", suma);

console.log('\n2. Parašykite for ciklą, kuris į console išvestų visas žodžio Vakaras raides po vieną');

const zodis = "Vakaras";
for (let i = 0; i < zodis.length; i++) {
    console.log(zodis[i]);0
}

console.log('\n3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę');

for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
}

console.log('\n4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į ekraną išvestų žodį ‘BOOM’');

for (let i = 5; i >= 1; i--) {
    if (i === 1) {
        console.log("BOOM");
    } else {
        console.log(i);
    }
}

console.log('\n5. Parašykite for ciklą, kuris sudėtų visus lyginius skaičius nuo 3 iki 18');

let sksuma = 0;
for (let i = 3; i <= 18; i++) {
    if (i % 2 === 0) {
        sksuma += i;
    }
}
console.log("Lyginių skaičių nuo 3 iki 18 suma:", sksuma);

console.log('\n6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.');

const sarasas = ['Obuolys', 'Bananas', 'Vyšnia', 'Apelsinas', 'Kriaušė'];
for (let i = 0; i < sarasas.length; i++) {
    console.log(sarasas[i]);
}

console.log('\n7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano vardas - ’ console log eilutės pradžioje');

const vardas = ['Marius', 'Algis', 'Vakaris', 'Agne', 'Rasa'];
for (let i = 0; i < vardas.length; i++) {
    console.log('Mano vardas - ' + vardas[i]);
}

console.log('\n8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.');

const sarasas1 = [10, 5, 'Obuolys', 8, 'Bananas', 15, 3];
let suma1 = 0;
for (let i = 0; i < sarasas1.length; i++) {
    if (typeof sarasas1[i] === 'number') {
        suma1 += sarasas1[i];
    }
}
console.log('Skaičių suma:', suma1);

console.log('\n9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki pirmo');
const sarasas2 = [10, 5, "Obuolys", 8, "Bananas", 15, 3];
for (let i = sarasas2.length - 1; i >= 0; i--) {
    console.log(sarasas2[i]);
}

console.log('\n10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės (1, 2, 5, 10, 20, 50, 100, 200, 500)');

const sarasas3 = [10, 5, 'Obuolys', 8, 'Bananas', 15, 3, 1, 2, 20, 50, 100, 200, 500];
const piniguReiksmes = [1, 2, 5, 10, 20, 50, 100, 200, 500];

for (let i = 0; i < sarasas3.length; i++) {
    if (typeof sarasas3[i] === "number" && piniguReiksmes.includes(sarasas3[i])) {
        console.log(sarasas3[i] + ' €');
    }
}

console.log('\n11. Parašykite for ciklą, kuris iš sąrašo Raidės [ L, a, b, a, s] sudėliotų kintamąjį Žodis, kurio reikšmė yra Labas');

const raides = ['L', 'a', 'b', 'a', 's'];
let zodis1 = '';

for (let i = 0; i < raides.length; i++) {
    zodis1 += raides[i];
}

console.log('Žodis:', zodis1);


console.log('\n12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas raidę.');

const zodis2 = "Programavimas";

for (let i = 0; i < zodis2.length; i++) {
    console.log(zodis2[i]);
}

console.log('\n13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į consolę reikšmę.');

let sandauga = 1;

for (let i = 2; i <= 10; i++) {
    sandauga *= i;
}

console.log('Skaičių nuo 2 iki 10 sandauga:', sandauga);

console.log('\n14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą.');

let suma3 = 0;

for (let i = 1; i <= 30; i += 2) {
    suma3 += i;
}

console.log('Nelyginių skaičių nuo 1 iki 30 suma:', suma3);

console.log('\n15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10.');
for (let i = 20; i >= 10; i--) {
    console.log(i);
}


console.log('\n16. Parašykite for ciklą, kuris į console išvestų sąrašoRaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’] elementus vienas po kito nuo galo iki pradžios');

const raidesAtbulai = ['s', 'a', 'b', 'a', 'L'];
for (let i = raidesAtbulai.length - 1; i >= 0; i--) {
    console.log(raidesAtbulai[i]);
}

console.log('\n17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas = ‘samivamargorP’ atskiras raides vieną po kitos');

const zodisAtbulas = 'samivamargorP';
for (let i = 0; i < zodisAtbulas.length; i++) {
    console.log(zodisAtbulas[i]);
}


console.log('\n18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasiiš 7, papildomai į consolę yra išvedamas žodis ‘lucky’');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        console.log('lucky');
    }
}

console.log('\n19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)');

const dvigubinti = [2, 3, 6, 8];
for (let i = 0; i < dvigubinti.length; i++) {
    console.log(dvigubinti[i] * 2);
}


console.log('\n20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestųvisus skaičius, kurie yra mažesni už 100');

const daugSkaiciu = [2, 14, 10, 1000, 503, 8, 0];
for (let i = 0; i < daugSkaiciu.length; i++) {
    if (daugSkaiciu[i] < 100) {
        console.log(daugSkaiciu[i]);
    }
}

console.log('\n21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra');

const magija = "abrakadabra";
let aSkaicius = 0;

for (let i = 0; i < magija.length; i++) {
    if (magija[i] === 'a') {
        aSkaicius++;
    }
}
console.log("Raidžių 'a' skaičius žodyje abrakadabra:", aSkaicius);

console.log('\n22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14] elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą.');

const pridesiuSkaiciu = [2, 8, 88, 14];

for (let i = 0; i < pridesiuSkaiciu.length; i++) {
    console.log(pridesiuSkaiciu[i] + 2);
}

console.log('\n23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome yra raidžių e ');

const ilgasZodis = "Nebeprisikiškiakopūstėliaudavome";
let eSkaicius = 0;

for (let i = 0; i < ilgasZodis.length; i++) {
    if (ilgasZodis[i] === 'e') {
        eSkaicius++;
    }
}

console.log("Raidžių 'e' skaičius žodyje Nebeprisikiškiakopūstėliaudavome:", eSkaicius);


console.log('\n24.Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio Nebeprisik iškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra: PVZ: Žodžiui Keletą būtų išvedama: e raidė yra 2 vietoje e raidė yra 4 vietoje');


console.log('\n25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.');

let Lobis = 150;

for (let i = 20; i >= 15; i--) {
    Lobis -= i;
    console.log(`Turtas mažėja: ${Lobis}`);
}

