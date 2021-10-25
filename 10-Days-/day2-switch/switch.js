function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]) {
        case 'a' :
        case 'e' :
        case 'i' :
        case 'o' :
        case 'u' :
            letter= "A" ;
            break;
        
        case 'b' :
        case 'c' :
        case 'd' :
        case 'f' :
        case 'g' :
            letter = "B" ;
            break;

        case 'h' :
        case 'j' :
        case 'k' :
        case 'l' :
        case 'm' :
            letter = "C" ;
            break;

        case 'n' :
        case 'p' :
        case 'q' :
        case 'r' :
        case 's' :
        case 't' :
        case 'v' :
        case 'w' :
        case 'x' :
        case 'y' :
        case 'z' :
            letter = "D" ;
           break ;
        
     default : 
    
    }
    return letter;
}

// buradaki işlemleri yapıp kendiniz test edebilirsiniz
// const string = prompt("bir şeyler yaz")
// let letter ;
// switch(string[0]) {
//     case 'a' :
//     case 'e' :
//     case 'i' :
//     case 'o' :
//     case 'u' :
//         letter= "A" ;
//         console.log(letter)
//         break;
    
//     case 'b' :
//     case 'c' :
//     case 'd' :
//     case 'f' :
//     case 'g' :
//         letter = "B" ;
//         console.log(letter)
//         break;
//     case 'h' :
//     case 'j' :
//     case 'k' :
//     case 'l' :
//     case 'm' :
//         letter = "C" ;
//         console.log(letter)
//         break;

//     case 'n' :
//     case 'p' :
//     case 'q' :
//     case 'r' :
//     case 's' :
//     case 't' :
//     case 'v' :
//     case 'w' :
//     case 'x' :
//     case 'y' :
//     case 'z' :
//         letter = "D" ;
//         console.log(letter)
//        break ;
    
//  default : console.log("yanlıs girdi")

// }
