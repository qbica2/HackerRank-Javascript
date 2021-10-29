// önce DOMları halledelim
let resDOM = document.querySelector(`#res`)
let btn0DOM = document.querySelector(`#btn0`)
let btn1DOM = document.querySelector(`#btn1`)
let btnClrDOM = document.querySelector(`#btnClr`)
let btnEqlDOM = document.querySelector(`#btnEql`)
let btnSumDOM = document.querySelector(`#btnSum`)
let btnSubDOM = document.querySelector(`#btnSub`)
let btnMulDOM = document.querySelector(`#btnMul`)
let btnDivDOM = document.querySelector(`#btnDiv`)

// bütün buttonlara click eventi ekleyelim

btn0DOM.addEventListener("click",clicked)
btn1DOM.addEventListener("click",clicked)
btnClrDOM.addEventListener("click",clicked)
btnEqlDOM.addEventListener("click",clicked)
btnSumDOM.addEventListener("click",clicked)
btnSubDOM.addEventListener("click",clicked)
btnMulDOM.addEventListener("click",clicked)
btnDivDOM.addEventListener("click",clicked)

let zero = 0
let one = 1 
//butonlara tıkladığımızda çalışacak fonksiyonumuzu tanımlayalım
function clicked(){
    //"0"a tıklandığında ekrana 0 yazdık burada önemli olan her tıkladığımızda yanyana eklemeye devam etmesi
    // aynı mantıkla bütün işlemleri yaptık
    if(this.id==`btn0`){
        resDOM.innerHTML+=zero 
    }
    else if(this.id ==`btn1`){
        resDOM.innerHTML+= one
    }
    else if(this.id==`btnClr`){
        resDOM.innerHTML= ""
    }
    else if(this.id==`btnEql`){
        //eşittire tıklandığında eğer iki sayı arasında bir oparatör olacak şekilde bir format yoksa
        //herhangi bir işlem yapmayacak
        // sayı + sayı formatıyla karşılaşırsa aşağıdaki koşul sağlanıp add binary fonksiyonu çalışacak
        if(resDOM.innerHTML.match(/(\d+)\+(\d+)/)){
            let numbers = resDOM.innerHTML.match(/(\d+)\+(\d+)/)
            resDOM.innerHTML= addbinary(numbers[1],numbers[2])
        }
        // sayı - sayı formatı
        else if(resDOM.innerHTML.match(/(\d+)\-(\d+)/)){
            let numbers = resDOM.innerHTML.match(/(\d+)\-(\d+)/)
            resDOM.innerHTML=subbinary(numbers[1],numbers[2])
        }
        // sayı * sayı formatı
        else if(resDOM.innerHTML.match(/(\d+)\*(\d+)/)){
            let numbers = resDOM.innerHTML.match(/(\d+)\*(\d+)/)
            resDOM.innerHTML=mulbinary(numbers[1],numbers[2])
        }
        // sayı / sayı formatı
        else if(resDOM.innerHTML.match(/(\d+)\/(\d+)/)){
            let numbers = resDOM.innerHTML.match(/(\d+)\/(\d+)/)
            resDOM.innerHTML=divbinary(numbers[1],numbers[2])
        }
    }
    else if(this.id==`btnSum`){
        resDOM.innerHTML+="+"
    }
    else if(this.id==`btnSub`){
        resDOM.innerHTML+="-"
    }
    else if(this.id==`btnMul`){
        resDOM.innerHTML+="*"
    }
    else if(this.id==`btnDiv`){
        resDOM.innerHTML+="/"
    }

}
// toplama çıkarma çarpma bölme fonksiyonlarımız
// bölme için sonucu parseIntle gösterdik çünkü integer sonuç istiyor challenge
function addbinary(a,b){
    return (parseInt(a,2)+parseInt(b,2)).toString(2)
}

function subbinary(a,b){
    return (parseInt(a,2)-parseInt(b,2)).toString(2)
}
function mulbinary(a,b){
    return (parseInt(a,2)*parseInt(b,2)).toString(2)
}
function divbinary(a,b){
    return parseInt((parseInt(a,2)/parseInt(b,2)).toString(2))
}