abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void
    {
        console.log("Kaydedildi")
    }

    abstract hesapla():void
}

class TuketiciKredi extends KrediBase
{
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı");
    }
    constructor()
    {
        super();
    }
}