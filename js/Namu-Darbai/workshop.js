
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





