function selamVer(isim:string) {
    return "Merhaba " + isim;
}

let kisi1 = selamVer('curupeku');
console.log(kisi1);

let sayi : number
sayi = 10;
sayi = 10.5;

let sehir : string = "Adana"
sehir = "İstanbul";
sehir = 'Ankara';

let isCorrect : boolean = false
isCorrect = true;

let SayiDizisi : number[] = [1,2,3]

//Generic
let sayilar : Array<number> = [1,2,3]

//Tuple
let dizi : [number, string] = [2,"Ankara"]

enum Renk
{
    Kirmizi = 1,
    Siyah,
    Mavi
}

let renk : Renk = Renk.Kirmizi

let deger : any = "Ankara"
deger = 4;
deger = {}

//any bütün veri tiplrei

let xvoid : void = undefined // Kullanılmaz

function selamVer2() : void
{
    console.log("XX");
    //return 4 // Return olmaz
}

let yas : number;
yas = 10;

class Musteri
{
    
}