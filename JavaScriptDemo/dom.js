//document.getElementById("bio").innerHTML = "Bu yazı DOM ile yazıldı"

// var intro1 = document.getElementById("firstintro");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;


// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0];

// let tumElemanlar = sehirler.getElementsByTagName("li");

// for (let i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML);
// }

// let classElements = document.getElementsByClassName("intro1");
// alert(classElements[0].innerHTML = "Değişti");

// Query selector p'lerden intro 1i kullananlar

// var queryElement = document.querySelectorAll("p.intro1");
// alert(queryElement.length);

// let nameElements = document.getElementsByName("musteriAdi");
// alert(nameElements[0].value);

// let clickDemo = document.getElementById("clickTest");
// clickDemo.addEventListener("click", rengiDegistir);

// function rengiDegistir()
// {
//     document.getElementById("div1").style.color = "blue";
//     let nameElements = document.getElementsByName("musteriAdi");
//     nameElements[0].value = "Alp";
// }


// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba JS");
baslik.appendChild(node);
var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");

div1.insertBefore(baslik, p2)

alert("P2 siliniyor");
div1.removeChild(p2);

alert("değişiyor")
var p1 = document.getElementById("p1");
div1.replaceChild(baslik, p1);