function topla(x,y) {
    return x+y;    
}

function topla2(x:number, y:number): number {
    return x+y;
}

let topla3 = function(x:number, y:number) : number{
    return x + y;
}

function topla4(x:number, y:number = 4): number {
    return x+y;
}

function topla5(x:number, y?:number): number { // Defaultlar sonda olmalı
    if(y)
    {
        return x+y;
    }
    else return x;
}

function davetEt(ilkDavetli:string,...digerleri:string[]) : string{ // ilkDavetli yazmaya da gerek yok
    return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Alp","Eren","Ahmet","Emre"))

console.log(topla(2,3));
console.log(topla("Ankara", 5));
console.log(topla2(5,3));
console.log(topla3(6,8));
console.log(topla4(3));