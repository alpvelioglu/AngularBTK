for (let i = 1; i <= 10; i++) {
    console.log(i);
}

var sehirler = ["Ankara", "İstanbul", "İzmir", "Adana"]

for (let index = 0; index < sehirler.length; index++) {
    console.log(sehirler[index]);
}

sehirler.forEach(element => {
   console.log(element); 
});

let i = 1;
while (i < 11) {
    console.log(i);
    i++;
}
