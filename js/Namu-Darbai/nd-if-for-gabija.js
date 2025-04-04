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

 // Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ). 
    //     Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x km/h greičiu per y valandų
    //     Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)
    //     Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų. Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia. Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų
    //     Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui: geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri pagal kelio sąlygas ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki kiekvieno miesto.
        

    const ManoMiestai = ["kaunas", 89, 'klaipėda', 307, 'marijampolė', 159, 'utena', 100]


    function kurTolimiausiai (miestai, greitis, laikas)
    {
        let maxA = 0;
        let kelias = greitis * laikas;
        let maxM = 0;

        for(let i = 0; i<miestai.length; i+=2)
        {
            //console.log(miestai[i]);
            if(miestai[i+1]<= kelias && miestai[i+1]> maxA)
            {
                maxA = miestai[i+1];
                maxM = i;
            }
        }
        console.log(miestai[maxM] + ' ' + miestai[maxM+1]);

    }

    kurTolimiausiai(ManoMiestai, 80, 2)



    function ArSpetume (miestai, miestas, laikas) //s = v*t 
    {

        for(let i = 0; i<miestai.length; i+=2)
        {
            if(miestai[i]===miestas)
            {
                if(miestai[i+1]/laikas <= 120)
                {
                    console.log("spesim " + miestai[i+1]/laikas)
                }
            }
            else
            {
                console.log("miesto neradau")
            }
        }
    }

    ArSpetume(ManoMiestai, 'marijampolė', 2)


    function ArUzteks (miestai, pinigai, Kkaina, deginam)
    {
        let kuras = 30 + pinigai/Kkaina;
        let atstumas = kuras / deginam;
        let maxA = 0
        let maxM = 0
        for(let i = 0; i<miestai.length; i+=2)
            {
                //console.log(miestai[i]);
                if(miestai[i+1]<= atstumas && miestai[i+1]> maxA)
                {
                    maxA = miestai[i+1];
                    maxM = i;
                }
            }

        console.log(miestai[maxM] + ' ' + maxA)

    }

    ArUzteks(ManoMiestai, 10, 0.5, 0.5)


const KelioSalygos = ['geras', 'prastas', 'taisomas', 'prastas'];

function realusLaikas (miestai, salyga)
{
    for(let i = 0; i<miestai.length; i+=2)
        {
            if(salyga[i/2]==='geras')
            {
                console.log(miestai[i+1])
            }
            if(salyga[i/2]==='prastas')
                {
                    console.log(miestai[i+1]*1.5)
                }
                if(salyga[i/2]==='taisomas')
                    {
                        console.log(miestai[i+1]*2)
                    }
        }
}

realusLaikas(ManoMiestai, KelioSalygos)
