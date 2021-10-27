 // 25. satırdan sonrasını açarsanız oluşturmamız gereken fonksiyonu görürsünüz

 function getMaxLessThanK(n,k) {
    let max = 0 ;
    let a ;
    let b ; 
        for (a =1 ; a <n ; a++){
            for (b=a+1 ; b<= n ; b++){                                   // b>a olması için b=a+1 dedik
                if((Number(a & b) < k) && (Number(a & b) > max)) {       
                max = a & b;
                }   
            }
        }
    
     return max;
}

