const dizi = [1,2,3,4]
const kareDizisi = []

dizi.forEach(sayi => {
    kareDizisi.push(sayi * sayi);
})

kareDizisi.forEach(x => {
    console.log(x);
});

// MAP -- Yeni bir diziye aktarıyoruz

const mapDizi =  dizi.map(sayi => sayi * 3);

console.log(mapDizi)

// Filter

const filtreliDizi = dizi.filter(x => x > 2);

console.log(filtreliDizi);

// Reduce

const toplam = dizi.reduce((acc, sayi) => {
    return acc + sayi;
},10)

console.log(toplam)