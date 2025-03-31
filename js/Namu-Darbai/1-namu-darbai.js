/* JavaScript mini užduotys*/



/*Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

console.log( 'Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis, Po kiekvieno jų inicijavimo, išvesti į console')
const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = 3;
console.log(c);

console.log ( 'Sukurti 3 kintamuosius su teksto tipo reikšmėmis, Po kiekvieno jų inicijavimo išvesti į console')

const a1 = 'Rytas';
console.log(a1);
const b1 = 'Diena';
console.log(b1);
const c1 = 'Vakaras';
console.log(c1)

console.log('Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis, Po kiekvieno jų inicijavimo, išvesti į console')
const Num1 = [11, 22, 33, 44, 55];
const Num2 = [10, 20, 30, 40, 50];
const Num3 = [100, 200, 300, 400, 500];

console.log(Num1);
console.log(Num2);
console.log(Num3);


console.log('Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console')
const Sarasas1 = ['Labas', 'Sveiki', 'Laba Diena', 'Hi', 'Hello'];
const Sarasas2 = ['Ate', 'Iki', 'Viso gero', 'Bye', 'Good Bye'];
const Sarasas3 = ['Maistas', 'Valgyti', 'Kava', 'Arbata', 'Cukrus'];

console.log(Sarasas1);
console.log(Sarasas2);
console.log(Sarasas3);

/* Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

*/

console.log('Susumuoti visus skaičiaus tipo kintamuosius. Rezultatą išvesti į console');
console.log(a + b + c);

console.log('Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas. Rezultatą išvesti į console');
const zodziai = (a1 + " " + b1 + " "  + c1)
console.log(zodziai);

console.log('Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5')

    let logic1 = (Num1[0] - Num1[1] + Num1[2] - Num1[3] + Num1[4]);
    let logic2 = (Num2[0] - Num2[1] + Num2[2] - Num2[3] + Num2[4]);
    let logic3 = (Num3[0] - Num3[1] + Num3[2] - Num3[3] + Num3[4]);

    console.log(logic1);
    console.log(logic2);
    console.log(logic3);

console.log('Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas');

let atbulas1 = (Sarasas1[4]  + ',' +' ' + Sarasas1[3]  +  ',' +' '  +  Sarasas1[2] + ',' +' '+ Sarasas1[1] + ',' + ' '+ Sarasas1[0] + ' ' );
let atbulas2 = (Sarasas2[4] + ',' + ' '+  Sarasas2[3] + ',' + ' '+ Sarasas2[2] + ',' + ' '+ Sarasas2[1] + ',' + ' '+ Sarasas2[0] + ' ' );
let atbulas3 = (Sarasas3[4] + ',' + ' '+  Sarasas3[3] + ',' + ' '+ Sarasas3[2] + ',' + ' '+ Sarasas3[1] + ',' + ' '+ Sarasas3[0] + ' ' );

console.log(atbulas1);
console.log(atbulas2);
console.log(atbulas3);

/*Kintamųjų palyginimas
Priklausomai nuo sąlygos, 
susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), 
tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, 
išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus

*/

let Sk1 = Num1[0];
let Sk2 = Num1[1];

if (Sk1 < Sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (Sk1 > Sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log(a1.length);
console.log(b1.length);
console.log(c1.length);

let ilgis1 = a1.length
let ilgis2 = b1.length
let ilgis3 = c1.length

if (ilgis1 >= ilgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgis1 < ilgis3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

let sarIlgis1 = Sarasas1[1].length
let sarIlgis2 = Sarasas1[2].length

if (sarIlgis1 < sarIlgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('Funkcija pavadinimu “tusciaFunkcija”: nepriima jokių kintamųj neatlieka jokios vidinės logikos gražina boolean tipo reikšmę “false”');


const tuscia = false
function tusciaFunkcija (){ return tuscia;
   
}
console.log(tusciaFunkcija());

console.log(' Funkcija pavadinimu “daugyba”: priima du skaičiaus tipo kintamuosius atskirame kintamajame įsimena sandaugos reikšmę gražina saudaugos rezultatą');

const a11 = 10
const b11 = 20
const c11 = 30

function daugyba (a11, b11, c11,) {return a11 * b11 ;}
console.log(daugyba(a11,b11));
console.log(daugyba(b11,c11));
console.log(daugyba(a11,c11));



console.log('Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”: priima vieną kintamąjį jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.” priešingu atveju, funkcija tęsia darbą į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį gražina skaitmenų kiekį');

function skaitmenuKiekisSkaiciuje (n) {
    if (typeof n !== 'number') {
        return 'Pateikta netinkamo tipo reiksme.';
    }

    if (!isFinite(n)) {
        return 'Pateikta Netinkamo tipo reiksme.';
    }

    const numberAsString = '' + n;
    let count = numberAsString.length;

    if (n % 1 !== 0) {
        count--;
    }
    if (n < 0) {
        count--;
    }

    return count;
}

//TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
//rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
//rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
//rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log('Funkcija pavadinimu “didziausiasSkaiciusSarase”: priima vieną kintamąjį jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.” jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.” priešingu atveju, funkcija tęsia darbą pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias gražina didžiausią surastą skaičių ');

function didziausiasSkaiciusSarase (list) {
    if (!Array.isArray(list)) {
        return 'Pateikta netinkamo tipo reiksme.';
    }

    if (list.length === 0) {
        return 'Pateiktas Sarasas negali buti tuscias.';
    }

    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }

        if (list[i] > biggest) {
            biggest = list[i];
        }
    }

    return biggest;
}

//TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
//rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
//rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
//rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
//rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//rezultatas: -1
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”

console.log('Funkcija pavadinimu “isrinktiRaides”: priima du kintamuosius: pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį antrasis nurodo kas kelintą raidę išrinkti patikrinti, ar pirmasis kintamasis yra teksto tipo: jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.” priešingu atveju tęsiame darbą patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių: jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.” priešingu atveju tęsiame darbą patikrinti, ar antrasis kintamasis yra skaičiaus tipo: jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.” priešingu atveju tęsiame darbą patikriname, ar antrojo kintamojo vertė yra didesnė už nulį: jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.” priešingu atveju tęsiame darbą patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį: jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.” priešingu atveju tęsiame darbą išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį) išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo gražina rezultatą');




