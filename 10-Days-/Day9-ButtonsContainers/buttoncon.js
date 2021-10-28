// btn5 i seçelim çünkü btn5 e tıklayacağız
let btn5DOM = document.querySelector("#btn5")

// bt5 e event ekledik
btn5DOM.addEventListener("click", rotate)  // tıkladığımızda rotate fonksiyonunu çalıştırıcak

// btn idlerimizin (5 hariç) 1den başlayarak saat  yönünde sıralanmış hali
const ARR = [1, 2, 3, 6, 9, 8, 7, 4]

let arr =[1, 2, 3, 6, 9, 8, 7, 4]   // işlemlerden sonra değişecek olan 

function rotate(){
    //pop ile diziden son elemanı atarken unshiftle aynı elemanı dizinin başına yerleştirdik
    arr.unshift(arr.pop())
    for (let i =0 ; i <ARR.length ; i ++){
        // bütün btn idlerine tek tek ulaşmak yerine döngü ile ulaştık
      let buttonsDOM= document.querySelector(`#btn${ARR[i]}`)
      // son olarak da tıklama eventlerinden sonra oluşan yeni dizimizi yerleştirdik
      buttonsDOM.innerHTML= arr[i]
    }
    
 
}