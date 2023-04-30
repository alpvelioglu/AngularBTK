class Personel
{
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet(){
        console.log("Personel Kaydedildi" + this.ad);
    }
}

const personel = new Personel("Alp","Eren");
personel.kaydet(); 
console.log(personel.ad)
console.log(personel.soyad)
// personel.xx = "Alp"
// console.log(personel.xx); // adi, xxx yazsak da gösterecek javascript - yazar