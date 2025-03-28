// Užduotys su IF ir sąrašais(array)
console.log ('. Patikrinkite, ar sąraše yra tam tikras skaičius. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.');

function arYraSkaicius(arr, num) {
    if (arr.includes(num)) {
        return ('yra');
    } else {
        return ('nera');
    }
}

console.log( arYraSkaicius([1, 2, 3, 4, 5], 3));
console.log( arYraSkaicius([1, 2, 3, 4, 5], 8));

console.log('2. Patikrinkite, ar masyvas tuščias.');

function arTuscias(arr) {
    if (arr.length === 0) {
        return ('tuscias');
    } else {
        return ('netuscias');
    }
}
console.log(arTuscias([]));
console.log(arTuscias([1, 2, 3, 4]));

console.log('3. Nustatyti, ar sąraše yra teigiamas skaičius');

function arYraTeigiamas(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return ('yra');
        }
    }
    return ('nera');
}

console.log(arYraTeigiamas([1, -2, 3, -4]));
console.log(arYraTeigiamas([-1, -2, -3, -4]));
console.log(arYraTeigiamas([0, -2, -3, -4]));

console.log('4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai.');

function arLyginiai(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return ('Nelyginiai');
        }
    }
    return ('Lyginiai');
}

console.log(arLyginiai([2, 4, 6, 8]));
console.log(arLyginiai([1, 4, 5, 8]));
console.log(arLyginiai([2, 4, 6, 8]));

console.log('5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas');

function arYraNeigiamas(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return ('Yra');
        }
    }
    return ('Nera');
}
console.log(arYraNeigiamas([1, 2, 3, -4]));
console.log(arYraNeigiamas([1, 2, 3, 4]));
console.log(arYraNeigiamas([1, 2, 3, -4]));

console.log('6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį.');

function arPirmasYraDidesnis(arr) {
    if (arr.length > 0 && arr[0] > arr[arr.length - 1]) {
        return ('Didesnis');
    } else {
        return ('Mazesnis');
    }
}
console.log(arPirmasYraDidesnis([10, 5, 3, 2]));
console.log(arPirmasYraDidesnis([1, 5, 3, 2]));
console.log(arPirmasYraDidesnis([10, 5, 3, 2]));

console.log('7. Patikrinkite, ar sąrašo ilgis didesnis už 5.');

function arSarasasDidesnis(arr) {
    if (arr.length > 5) {
        return ('Didesnis');
    } else {
        return ('Mazesnis');
    }
}
console.log(arSarasasDidesnis([1, 2, 3, 4, 5, 6]));
console.log(arSarasasDidesnis([1, 2, 3, 4]));
console.log(arSarasasDidesnis([1, 2, 3, 4, 5,]));

console.log('8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji');

function arYraTekstas(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            return ('Ne viskas tekstas');
        }
    }
    return ('Visi yra tekstas');
}
console.log(arYraTekstas(['obuolys', 'bananas', 'vysnia']));
console.log(arYraTekstas(['obuolys', 'bananas', 'vysnia', 10]));
console.log(arYraTekstas([100,'obuolys', 'bananas', 'vysnia']));

console.log('9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10.');

console.log('10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai');
