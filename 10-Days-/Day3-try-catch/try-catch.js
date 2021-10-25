

function reverseString(s) {
    try {
        s = s.split("").reverse().join("")   // parçaladık ters çevirdik birleştirdik
         
  }catch(error) { 
        console.log("s.split is not a function");    // herhangi bir hata olması durumunda 
  
  }finally {
       console.log(s)        
    }
  
}