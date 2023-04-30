var sayi = 10;
var sehir = "Ankara";

sayi = 11;
sehir = "Istanbul";

var sehir = "Adana";

let il ="Ankara";
il = "Bursa";
// let il hata verir

function mesajVer()
{
    let isim = "Alp";
    console.log(sehir);
}

mesajVer();
// console.log(isim); // Hata verecek scope kavramı

for (var i = 0; i < 10; i++) {
    
} // let i dersen i ye scope dışında erişemezsin, var dersen erişebiliyorsun. SAÇMA

console.log(i);

const soyad = "eren"
// soyadı bir daha değişemezsin

const sehirler = ["Ankara", "İstanbul"];
sehirler.push("İzmir"); // Bunu ekleyecek referans tipi ve değer tipi const eşitlenemez