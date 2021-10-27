function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = /(\d{1,})/g
    
    /*
     * Do not remove the return statement
     */
    return re;
}

// 1) \d ile integer istediğimizi belirttik
// 2) {1,} ifadesi ile en az 1 karakter ve sayı olduğu sürece geri kalan karakterleri de vermesini istedik
// 3) şuana kadar yaptıklarımızla -yani /(\d{1,})/ kodu böyle yapsaydık- bize sadece text içerisinde bu kuralı sağlayan ilk karakter kümesini verip bitiricekti. oysa biz bu kuralı sağlayan bütün kümelere ulaşmak istiyoruz.Bu nedenle sonuna global flag işareti olan "g" yi koyduk. 