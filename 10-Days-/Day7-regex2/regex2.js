function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = /(Mr|Mrs|Ms|Dr|Er)(\.)[a-zA-Z]+$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}

// 1) "Mr Mrs Ms Dr Er" hangisi varsa seçicek 
// 2) regex te nokta kullanmanın iki yolu var. ya  "(\.)"  ya da "[.]" 
// 3) devamında küçük büyük a dan z ye her karakter gelebilmesini sağladık ve + ile aynı kuralla verilecek textin sonuna kadar devam edebilmeyi sağladık.
// 4) $ işareti ile bitirdik. "$" koymasaydık ne olurdu? örneğin verilen text Dr.osman???121 gibi bir şey olsaydı biz bunun "Dr.osman" kısmına ulaşabildiğimiz için true döndürücektik .