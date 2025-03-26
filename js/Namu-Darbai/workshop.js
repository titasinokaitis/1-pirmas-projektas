
/* Sarasas kintamuju*/


const mokinys1 = ['Tadas', 8, 9, 10, 4, 7];
const mokinys2 = ['Rimas', 2, 2, 3, 4, 1];
const mokinys3 = ['Gabija', 8, 9, 10, 4, 7];

function MokinioVidurkis (mokinys){
    console.log('Mokinio vardas:' + mokinys[0])
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys[5])/5
    if(vidurkis>=3.5)
    {
        console.log(mokinys[0] + ' islaike. Jo vidurkis: ' + vidurkis);
    }
    else
    {
        let vidurkisnaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + ' neislaike. Jo dabartinis vidurkis: ' + vidurkis);
        console.log(vidurkisnaujas);
        if(vidurkisnaujas >=3.5)
            
    {
        console.log(mokinys[0] + ' islaikytu kursa jeigu gautu viena 10' );}
    
            else
            console.log(mokinys[0] + ' neislaikys ir su papildomu 10 ');
        
    }
{
}

}

MokinioVidurkis (mokinys1)
MokinioVidurkis (mokinys2)
MokinioVidurkis (mokinys3)

/*2 užduotis - filmų rekomendacija:

Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, 
antras narys yra filmo žanras,
 o trečias narys yra skaičiaus tipo filmo įvertis.
Susikurkite 2 kintamuosius kurie
 -pirmas nurodo jūsų mėgstamą žanrą ir antras nurodo jūsų norimą matyti filmo įvertį.
Padarykite funkciją, kuri iš pasirinktų 3 filmų, 
pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų.
 Jei joks filmas netinka, turi tai pranešti.
*/

// Filmai: [pavadinimas, žanras, įvertis]
const filmas1 = ["Inception", "Sci-Fi", 9];
const filmas2 = ["The Dark Knight", "Action", 10];
const filmas3 = ["Interstellar", "Sci-Fi", 8];
const filmas4 = ["Titanic", "Romance", 7];
const filmas5 = ["The Godfather", "Crime", 10];

// Pageidaujamas žanras ir įvertis
const megstamasZanras = "Sci-Fi";
const norimasIvertis = 8;

function rekomenduotiFilmus(filmai, zanras, ivertis) {
    const tinkamiFilmai = filmai.filter(filmas => filmas[1] === zanras && filmas[2] >= ivertis);
    
    if (tinkamiFilmai.length > 0) {
        console.log("Jums gali patikti šie filmai:");
        tinkamiFilmai.forEach(filmas => console.log(filmas[0]));
    } else {
        console.log("Deja, neradome jums tinkamų filmų.");
    }
}

// Testas
rekomenduotiFilmus([filmas1, filmas2, filmas3], megstamasZanras, norimasIvertis);
