

function isPositive(a) {
    
    if (a > 0 ) {
        return "YES"
    }else if(a === 0) {
        throw Error("Zero Error")
    }else if(a < 0 ) {
        throw  Error("Negative Error")
    }
  }
  