/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// at
console.log('\nat');

console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length - 1]);

console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));

// includes
console.clear();
console.log('\nincludes');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));

console.log('Ačiū'.includes('č'));
console.log('Ačiū'.includes('Č'));

console.log('-----');

console.log('Bepasikulversciaudamasis'.includes('a'));
console.log('Bepasikulversciaudamasis'.includes('aaa'));
console.log('Bepasikulversciaudamasis'.includes('kul'));
console.log('Bepasikulversciaudamasis'.includes('ciauda'));
console.log('Bepasikulversciaudamasis'.includes('cauda'));
console.log('Bepasikulversciaudamasis'.includes('Bepasikulversciaudamasis'));

// startsWith
console.clear();
console.log('\nstartsWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('Pom'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));
console.log(' Pomidoras'.startsWith(' Pom'));

// endsWith
console.clear();
console.log('\nendsWith');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));
console.log('Pomidoras'.endsWith('ras'));
console.log('Pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));
console.log('Pomidoras'.endsWith(' Pomidoras'));
console.log(' Pomidoras'.endsWith(' Pomidoras'));

// indexOf
console.clear();
console.log('\nindexOf');
//           012345678
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('p'));
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('xXx'));
console.log('Pomidoras'.indexOf('mido'));

console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('---');

const k = 'Kulverstukas';
console.log(k.indexOf('u'));
console.log(k.indexOf('u', 2));

console.log(k.indexOf('u', k.indexOf('u') + 1));

console.log(k.indexOf('s'));
console.log(k.indexOf('s', k.indexOf('s') + 1));

console.log(k.indexOf('e'));
console.log(k.indexOf('e', k.indexOf('e') + 1));

console.clear();

// repeat
console.log ('\nrepeat');

console.log('a');
console.log('a'.repeat(5));

const symbol = 'labas ';
const megaSymbol = symbol.repeat(10);
console.log(symbol);
console.log(megaSymbol);

function stringRepeat (text, count) {
    let result = '';
    for(let i = 0; i < Math.floor(count); i++){
        result += text;
    }
    return result;
}

console.log(stringRepeat('rikiki ', 3.99999));
console.log(stringRepeat('apci ', 4));

// replace
console.log ('\nreplace');

const summer = 'vasara'.replace ('a', '-');

console.log(summer);

const summer2 = 'vasara'.replace ('a', '-').replace('a', '-');

console.log(summer2);

const summer3 = 'vasara'.replace('a', '-').replace('a', '-').replace;('a', '-').replace('a', '-');

console.log(summer3);

const cloud = 'debeselis'.replace('e', '*'.repeat(3));
console.log(cloud);

const template = 'VARDAS ejo i parduotuve pirkti DAIKTAS';
const name = 'Jonas';
const item = 'pomidoras';
const shop = template.replace('VARDAS', name).replace('DAIKTAS', item);
console.log(shop);

const template2 = 'Klaseje sedi: V1, V2, V3, V4';
const classmates = template2.replace('V1', 'Jonas').replace('V2', 'Maryte').replace('V3', 'Petras').replace('V4', 'Ona');
console.log(classmates);

//replaceAll

console.log('\nreplaceAll');

console.log('vasara');
console.log('vasara'.replace('a', '-'));
console.log('vasara'.replaceAll('a', '-'));

const template3 = 'VARDAS saunuolis. VARDAS grazuolis. VARDAS smalsuolis. VARDAS murzius.';
const multiName = template3.replaceAll('VARDAS', 'Petras');
console.log(multiName);

console.log('ananasas'.replace('a',''));

// Labas rytas, Lietuva!
const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll('', '').length;
console.log(hiNormalSize);

// toUpperCase
console.log('\ntoUpperCase');

console.log('labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('jsbdyu55, jibdhu, efiue65565'.toUpperCase());

// toLowerCase
console.log('\ntoLowerCase');

console.log('labas'.toLowerCase());
console.log('Labas'.toLowerCase());
console.log('jsbdyu55, jibdhu, efiue65565'.toLowerCase());

//slice
console.log('\nslice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(3));
console.log('pomidoras'.slice(4));

console.log('pomidoras'.slice(0, 1));
console.log('pomidoras'.slice(0, 2));
console.log('pomidoras'.slice(0, 3));
console.log('pomidoras'.slice(0, 4));

console.log('pomidoras'.slice(0, -1));
console.log('pomidoras'.slice(0, -2));
console.log('pomidoras'.slice(0, -3));
console.log('pomidoras'.slice(3, -3));

console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));
console.log('pomidoras'.slice(-2, -6));

//trim
console.clear();
console.log('\ntrim');

console.log(`"${'pomidoras'.trim()}"`);
console.log(`"${'           pomidoras'.trim()}"`);
console.log(`"${'pomidoras           '.trim()}"`);
console.log(`"${'         pomidoras           '.trim()}"`);
console.log(`"${'    labas     rytas  Lietuva          '.trim()}"`);

console.log(`"${'    labas     rytas  Lietuva          '.trimStart()}"`);
console.log(`"${'    labas     rytas  Lietuva          '.trimEnd()}"`);


//split
console.clear();
console.log('\nsplit');

const t1 = 'zodis';
const t1Parts = t1.split();
const t1Parts2 = t1.split('o');
const t1Parts3 = t1.split('d');

console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

const t2 = 'kultivatorius';
const t2Parts = t2.split('t');

console.log(t2Parts);

const t3 = 'Labas rytas Lietuva';
const t3Parts = t3.split(' ');

console.log(t3Parts);

console.log('duona'.split('o'));
console.log('duona'.split('u'));
console.log('duona'.split('d'));

console.log('ana'.split('a'));

console.log('vasara'.split('a'));
console.log('vasara'.split(''));

console.log(' '.split(''));
console.log(''.split(''));

const t4 = 'Labas. Ka tu. Ka tu veiki.';
console.log(t4.split('.').length - 1);

console.log('pomidoras'.split('dor'));
console.log('ananasas'.split('na'));

//charCodeAt
console.clear();
console.log('\ncharCodeAt');
console.log('A'.charCodeAt(0));
console.log('Ą'.charCodeAt(0));
console.log('a'.charCodeAt(0));
console.log('ą'.charCodeAt(0));

if('A' > 'a') {
    console.log('daugiau');

} else {
    console.log('maziau');
}
if ('labas' > 'labai'){
    console.log('daugiau');
} else {
    console.log('maziau');
}

const s1 = String.fromCharCode(2600);
console.log(s1);

const s2 = String.fromCharCode(26000);
console.log(s2);
