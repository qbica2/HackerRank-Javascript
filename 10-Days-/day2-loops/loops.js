
// let s = ["a","b","c","i","a"]   // diziyi istediğiniz gibi oluşturabilirsiniz
let s = ["j","a","v","a","s","c","r","i","p","t","l","o","o","p","s"] 
function vowelsAndConsonants(s) {
    // ünlüler dizisi oluşturalım
    let vowels = ["a","e","i","o","u"]
    //ünsüzler dizisi oluşturalım  
    let consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
    // dizideki her bir eleman için ünlü dizisinde var mı yok mu diye kontrol ediyoruz
 for (let i = 0; i < s.length; i++) {
     if(vowels.includes(s[i])==true){
         console.log(`${s[i]}`)
     }   
 }
  // dizideki her bir eleman için ünsüz dizisinde var mı yok mu diye kontrol ediyoruz
  //challenge gereği bu işlemi yapmadan önce önceki döngünün tamamlanması gerekiyor
 for (let i = 0; i < s.length; i++){
     if(consonants.includes(s[i])==true){
        console.log(`${s[i]}`)
     }
 }
}
vowelsAndConsonants(s);


