
let nums = [2,4,6,6,5]      // içeriği değiştirebilirsiniz

console.log(Math.max(...nums)       //math max ile dizideki en büyük sayıyı bulduk
)

function getSecondLargest(nums) {
     let filterednums = nums.filter(function(notmax){   //filterla en büyük sayının olduğu ögeleri(2tane 6) 
         return notmax < Math.max(...nums);             // çıkarıp yeni dizi elde ettik 
     })
     let secondLargets= Math.max(...filterednums)       // artık yeni dizimizin en büyük sayısına 
     return secondLargets ;                             // ulaşabiliriz
     
}



