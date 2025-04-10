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
        return '\n Pateikta netinkamo tipo reiksme.';
    }

    if (list.length === 0) {
        return '\n Pateiktas Sarasas negali buti tuscias.';
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


console.log( didziausiasSkaiciusSarase( [ 1 ] ) );

console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );

console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );

console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );

console.log( didziausiasSkaiciusSarase( [] ) );

console.log('\n Funkcija pavadinimu “isrinktiRaides”: priima du kintamuosius: pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį antrasis nurodo kas kelintą raidę išrinkti patikrinti, ar pirmasis kintamasis yra teksto tipo: jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.” priešingu atveju tęsiame darbą patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių: jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.” priešingu atveju tęsiame darbą patikrinti, ar antrasis kintamasis yra skaičiaus tipo: jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.” priešingu atveju tęsiame darbą patikriname, ar antrojo kintamojo vertė yra didesnė už nulį: jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.” priešingu atveju tęsiame darbą patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį: jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.” priešingu atveju tęsiame darbą išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį) išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo gražina rezultatą');

function isrinktiRaides(tekstas, kasKelintaRaide) {
    
    if (typeof tekstas !== 'string') {
        console.log("\n Pirmasis kintamasis yra netinkamo tipo.");
        return;
    }

    if (tekstas === '' || tekstas.length > 100) {
        console.log("\n Pirmojo kintamojo reikšmė yra netinkamo dydžio.");
        return;
    }

    if (typeof kasKelintaRaide !== 'number') {
        console.log("\n Antrasis kintamasis yra netinkamo tipo.");
        return;
    }

    if (kasKelintaRaide <= 0) {
        console.log("\n Antrasis kintamasis turi būti didesnis už nulį.");
        return;
    }

    if (kasKelintaRaide > tekstas.length) {
        console.log("\n Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.");
        return;
    }

    let isrinktosRaides = '';
    for (let i = kasKelintaRaide - 1; i < tekstas.length; i += kasKelintaRaide) {
        isrinktosRaides += tekstas[i];
    }

    
    console.log(isrinktosRaides);
    return isrinktosRaides;
}


console.log(isrinktiRaides("JavaScript yra smagus!", 3)); 
console.log(isrinktiRaides("Tai testas", 5)); 
console.log(isrinktiRaides("Kalėdų senelis", 6)); 
console.log(isrinktiRaides("Labas", -1)); 
console.log(isrinktiRaides(12345, 2)); 

console.log('\n 2 užd Parašykite funkcija, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio krovinį, kai vienas žmogus gali pakelti x kg. Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali pakelti 2.4 kg');


function kiekZmoniuReikia(krovinioSvoris, vienoZmogausGalia) {
    if (vienoZmogausGalia <= 0) {
        console.log("Vienas žmogus turi galėti pakelti bent kažkiek svorio!");
        return;
    }

    const kiekZmoniu = Math.ceil(krovinioSvoris / vienoZmogausGalia);
    console.log(`Reikia ${kiekZmoniu} žmonių, kad pakeltų ${krovinioSvoris} kg krovinį, jei vienas gali pakelti ${vienoZmogausGalia} kg.`);
    return kiekZmoniu;
}

console.log(kiekZmoniuReikia(60, 5));

// ) Statybos. Yra planuojamas namo statymas. Parašykite funkciją, kuri, gavusi norimą namo aukštį, grąžintų kiek aukštų turės namas. Namo aukštis yra paduodamas tik sveiku skaičiumi. Vieno aukšto aukštis gali būti 2 arbe 2.5m aukščio. Vadinasi, 6 metrų namas turės 3 aukštus (po 2 m), o 5 metrų namas turės 2 aukštus (po 2.5). Taupant vietą yra dedamas prioritetas didesniam aukštų skaičiui - jei namo aukštis yra 10 metrų, jis turės 5 2m aukštus. Jei namas yra 7 metrų aukščio, jis turės 2 aukštus 2.5 aukščio ir vieną 2 metrų aukščio aukštą



console.log('\n Padarykite funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių, kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio pasirinkimai turi būti atsitiktiniai.');



function zaistiRaunda(zaidejoPasirinkimas) {
    const pasirinkimai = ['akmuo', 'popierius', 'sulinys'];
    const kompiuterioPasirinkimas = pasirinkimai[Math.floor(Math.random() * pasirinkimai.length)];

    zaidejoPasirinkimas = zaidejoPasirinkimas.toLowerCase();

    if (!pasirinkimai.includes(zaidejoPasirinkimas)) {
        console.log("Neteisingas pasirinkimas. Rinkitės: akmuo, popierius arba sulinys.");
        return;
    }

    console.log(`Jūs pasirinkote: ${zaidejoPasirinkimas}`);
    console.log(`Kompiuteris pasirinko: ${kompiuterioPasirinkimas}`);

    if (zaidejoPasirinkimas === kompiuterioPasirinkimas) {
        console.log("Lygiosios!");
    } else if (
        (zaidejoPasirinkimas === 'akmuo' && kompiuterioPasirinkimas === 'sulinys') ||
        (zaidejoPasirinkimas === 'popierius' && kompiuterioPasirinkimas === 'akmuo') ||
        (zaidejoPasirinkimas === 'sulinys' && kompiuterioPasirinkimas === 'popierius')
    ) {
        console.log("Jūs laimėjote!");
    } else {
        console.log("Kompiuteris laimėjo!");
    }
}

zaistiRaunda('akmuo');
console.log(zaistiRaunda('popierius'));
console.log(zaistiRaunda('popierius'));
console.log(zaistiRaunda('sulinys'));


console.log('\n 4. Kalėdų senelis pakeitė darbą ir tapo gimtadienio dėde. Vietoj gerų ir blogų vaikų, jis dosniai apdovanoja ypatingus gimtadienius (1, 5, 10, 15, 16, 18, 20 ir visi kiti jubiliejai) ir nelabai gerai apdovanoja paprastus gimtadienius. Padarykite du sąrašus - vieną su nuostabiomis dovanomis (vienaragis, pilis, mašina, ...), kitą su nefainomis dovanomis (kojinės, ananasas, jau skaityta knyga, ...). Padarykite funkciją, kuriai pateikus jūsų metus, ji pasveikins su gimtadieniu ir padovanos atitinkamą dovaną.');


console.log('\n Statome namą iš plytų. Vienos plytos plotis yra 0.2 metrai, o aukštis yra 0.1 metro. Parašykite funkcij , kuriai nurodžius namo išmatavimus (plotis, ilgis, aukštis), ji apskaičiuotųk iek plytų reikės dėti. (PVZ jei ilgis yra 1m, plotis 2m aukštis yra 2m, turime dėti 600 plytų)');

function skaiciuotiPlytas(plotis, ilgis, aukstis) {
    const plytosPlotis = 0.2; 
    const plytosAukstis = 0.1; 

    const sienosPlotas = 2 * (ilgis * aukstis + plotis * aukstis); 

    const plytosPlotas = plytosPlotis * plytosAukstis;

    const kiekis = Math.ceil(sienosPlotas / plytosPlotas);

    console.log(`\n Namo sienoms reikės maždaug ${kiekis} plytų.`);
    return kiekis;
}
console.log(skaiciuotiPlytas(2, 1, 2));
console.log(skaiciuotiPlytas(4, 2, 3));
console.log(skaiciuotiPlytas(1, 3, 5));


console.log('\n  Statyti namą kainuoja. Kiekvienas namas turi 1 duris, x plytų ir 6 langus kiekviename aukšte. Padarykite funkciją, kuriai pateikus plytų, langų ir durų kainą; bei namo plotį, ilgį ir aukštį - ji paskaičiuotų kiek eurų kainuotų pastatyti norimą namą.');

function skaiciuotiStatybosKaina(plytosKaina, langoKaina, duruKaina, plotis, ilgis, aukstis) {
    const plytosPlotis = 0.2; 
    const plytosAukstis = 0.1; 

    
    const sienuPlotas = 2 * (ilgis * aukstis + plotis * aukstis); 
    const vienosPlytosPlotas = plytosPlotis * plytosAukstis;
    const plytuKiekis = Math.ceil(sienuPlotas / vienosPlytosPlotas);

    
    const aukstuSkaicius = Math.floor(aukstis / 2); 
    const languKiekis = aukstuSkaicius * 6;

    const duruKiekis = 5;


    const bendraKaina =
        (plytuKiekis * plytosKaina) +
        (languKiekis * langoKaina) +
        (duruKiekis * duruKaina);

    console.log(`Statybos kaina: ${bendraKaina.toFixed(2)} EUR`);
    return bendraKaina;
}


console.log(skaiciuotiStatybosKaina(0.5, 100, 250, 5, 10, 6)); 
console.log(skaiciuotiStatybosKaina(2, 150, 400, 10, 20, 30)); 