/* FOR (loop) - ciklas
*/

for(let i = -5; i <  5; i++) {
    console.log('number:', i);
}
console.log('-------------');

for(let i = -5; i <=  5; i++) {
    console.log('number:', i);
}

console.log('-------------');


for(let i = 5; i >= 0; i--) {
    console.log('number:', i);
}

console.log('-------------');

let k = 5;
k = k + 1;
k += 1;
k++;
++k;

let m = 5;
m = m - 1 ;
m =- 1;
m--;

//0, 1, 2, 3, 4, ....
// 0, 2, 4, 6, 8 ....

for (let i = 0; i < 11; i +=2 ) {
    console.log('kas du', i);
}

console.log('-------------');

for (let k = 0; k < 10; k ++ ) {
    console.log(k/10);
}
console.log('-------------');

console.log(0.1 + 0.2);
console.log(10 + 20);
console.log((399 + 20) /100);

console.log('-------------');

console.log('Labas');
console.log('Labas');
console.log('Labas');
console.log('Labas');
console.log('Labas');

console.log('-------------');

for (let i = 1; i <=4; i++) {
    console.log('Labas');
}

console.log('-------------');

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum2 = 0;
 
for (let i=0; i< marks.length; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log(sum2);

console.log('-------------');

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    const s = `Studento vardas yra ${names[i]}`;
    console.log(s);

}

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const s = `Vardas "${name}" yra sudarytas is ${name.length} raidziu`;
   
    console.log(s);
}

