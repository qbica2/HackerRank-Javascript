function modifyArray(nums) {
    let newArray = [];                 // yeni arrayimiz
    nums.forEach(nums=> {              // nums arrayinin her elamını foreachle dönüp tek çift olma durumuna
        if(nums%2==0){                 // göre 2 ya da 3 ile çarptık ve yeni arrayimize push ettik
            newArray.push(nums*2)      
        }
        else if(nums%2 == 1){
            newArray.push(nums*3)
        }
    })
    return newArray;           // yeni arrayimizi döndürdük
   }