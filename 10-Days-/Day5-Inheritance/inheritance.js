// bu kısım zaten challenge da verildi
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */  
    Rectangle.prototype.area = function () {
        return this.w * this.h ;
    }

    class Square extends Rectangle {
        constructor(w) {
            super (w,w)           // super üst classtan bul demek gibi bir şey
        }

    }

/*
* Create a Square class that inherits from Rectangle and implement its class constructor
*/
