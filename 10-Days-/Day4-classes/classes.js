class Polygon {
       constructor(sides){
           this.sides = sides 
       }

       
    perimeter() {
        let sum =0
        for (let i =0 ; i<this.sides.length ; i++){
            sum+= this.sides[i]

    }
    return sum ;
}
}