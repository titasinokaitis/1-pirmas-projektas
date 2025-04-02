console.log(' uzduotis: atviruku gamintojas nori tam tikras atviruko raides uzklijuoti blizganciu raidziu lipdukais Padekite gamintojui paskaiciuoti, kiek raidziu lipduku reikes jam nusipirkti  kas bus jei atviruku gamintojas nores visas balses ispuosti lipdukais');

let atvirukoTekstas = 'labai geras daiktas yra televizorius as su juo galiu matyti jus';
let atvirukoRaide = 'a';
let atvirukoSuma = 0;


function atvirukoLipdukai(Raide)
{
    atvirukoSuma = 0
    for (let i = 0; i < atvirukoTekstas.length; i++)
        if(atvirukoTekstas[i] === Raide)
        {
            atvirukoSuma += 1
        }
        return atvirukoSuma;
}

console.log(atvirukoLipdukai('a'));
console.log(atvirukoLipdukai('z'));
console.log(atvirukoLipdukai('e'));
console.log(atvirukoLipdukai('i'));

const atvirukoBalses = ['a', 'e', 'o', 'u', 'i'];

for (let i=0; i < atvirukoBalses.length; i++)
{
    console.log("Raide "  + atvirukoBalses[i] + " pasikartoka " + atvirukoLipdukai(atvirukoBalses[i]))
}


console.log('\nNoriu rasti, kaip daznai naturaliame tekste pasitaiko zodziu su tam tikra raide. Noriu rasyti teksta tol kol surasiu pirmasias n norimu raidziu.');

let manoRaide = 'a'
let tekstasIlgas = 'kazin kas tokio idomaus gali buti programavime. Daug dalyku, galbut, tik reikia juos rasti.'
let rastosRaides = 0
let norimasKiekis = 4
let einamasTekstas = '';

for (let i = 0; rastosRaides <= norimasKiekis; i++)
{
    einamasTekstas += tekstasIlgas[i];
    if (tekstasIlgas[i] === manoRaide)
    {
        rastosRaides += 1
    }
    if( i === tekstasIlgas.length - 1)
    {
        rastosRaides = 4
    }
    console.log(i);
}

console.log(einamasTekstas);
 console.clear();

 //Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų atstumai iki Vilniaus.

 const miestaiIrKilometrai = ['Kaunas', 100, 'KLaipeda', 310, 'Siauliai', 210, 'Panevezys', 135, 'Alytus', 110, 'Marijampole', 140, 'Utena', 95, 'Druskininkai', 132, 'Telsiai', 270];

 //Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x km/h greičiu per y valandų
const nuvaziuotasAtstumas =

 for ( let i = 0; i < miestaiIrKilometrai.length; i += 2){
    const miestas = miestaiIrKilometrai[i];
    const atstumas = miestaiIrKilometrai[i+1];

 }
