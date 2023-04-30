function deger<T>(x: T): T {
  return x;
}

let sayi = deger<number>(2);
let sehir = deger<string>("Ankara");

class GenericClass<T> 
{
    degisken:T;
    fonksiyon(parametre: T) : T
    {
        return parametre;
    }
}

let sinif = new GenericClass<string>
sinif.fonksiyon("TET");
