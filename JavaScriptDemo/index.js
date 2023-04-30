var kullanicilar = [
    {
        email: "aeren53.ae@gmail.com",
        sifre: "12345"
    },
    {
        email: "aemre53.ae@gmail.com",
        sifre: "12345"
    }
]

var twitler = [
    {
        email: "aeren53.ae@gmail.com",
        twit: "Jesus istifa"
    },
    {
        email: "aeren53.ae@gmail.com",
        twit: "Ali Koç istifa"
    },
    {
        email: "aemre53.ae@gmail.com",
        twit: "Unazoki Marataq"
    }
]

var email = prompt("Email gir");
var sifre = prompt("sifre gir");
giris()

function giris()
{
    if(email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)
    {
        twitler.forEach(element => {
            if(element.email == email) console.log(element.twit);
        });
    }
    else if(email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
    {
        twitler.forEach(element => {
            if(element.email == email) console.log(element.twit);
        });
    }
    else
    {
        console.log("Giriş yapamadınız");
    }
}