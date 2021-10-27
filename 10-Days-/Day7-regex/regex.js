function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
let re = /^(a|e|i|o|u).+\1$/
    /*
     * Do not remove the return statement
     */
    return re;
}

// bilmemiz gerekenler 
// 1) regex yapıları "/" ile başlar "/" ile biter
// 2) satır başındaki karakteri belirlemek için ^ işareti kullanılır
// 3) (a|e|i|o|u) burada | işaretini ya da anlamında kullandık. a-e-i-o ya da u dan herhangibi biri 
// şuana kadar yani /^(a|e|i|o|u) / kodumuz bu haldeyken biz sadece kelimenin ilk karakterine ulaştık.
// ama challenge gereği bizim aynı kelimenin son karakterine de ulaşmamız gerekiyor.
// 4) .+  burada sadece "." koysaydık "a,e,i,o,u" dan herhangi biriyle başlayan ikinci karakterinin ne olduğu önemli olmayan 2elemanlı bir karakter dizisi seçicekti.( satır sonuna denk gelmedi ise) + ile birlikte biz satırın sonuna kadar her elemanı seçmiş oluyoruz. böylece artık son elamana ulaşabileceğiz.
// 5) \1$  "$" ile artık son elamanımıza ulaştık. "\1" ile 1.yapıda ne yaptıysan aynısını uygulamasını istedik.
// 5. maddede "\1" yerine (a|e|i|o|u) bu ifadeyi yazabilirdik ama yazmamalıyız  