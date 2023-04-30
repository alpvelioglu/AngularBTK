class Ev // Referans tip yani instance lazım newleyek
{
    odaSayisi:number;
    pencereSayisi:number;
    kat:number;
    yemekYe()
    {
        console.log("Yemek Yiyildi");
    }

    constructor(odaSayisi:number, pencereSayisi:number, kat:number)
    {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
}

let ev = new Ev(3,4,5);
console.log(ev.kat);

class Kisi
{
    kaydet()
    {
        console.log("Kişi Kaydedildi");
    }
}

class Musteri extends Kisi
{
    satisYap()
    {
        console.log("Satış Yapıldı");
    }
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
}

class Personel extends Kisi
{
    maasOde()
    {
        console.log("Maas Odendi");
    }
}

let musteri = new Musteri()
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();