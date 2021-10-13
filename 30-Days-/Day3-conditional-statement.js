function main() {
    const N = parseInt(readLine().trim(), 10);      
    // const N = prompt("sayı girin") yazıp kendiniz test edebilirsiniz 
    if ( (N % 2) != 0) {
        console.log("Weird")
    }
    else if (((N%2) ==0) && ((N>=2) && (N<=5))) {
        console.log ("Not Weird")
    }
    else if (((N%2) ==0) && ((N>=6) && (N<=20))) {
        console.log ("Weird") 
    }
    else if (((N%2) ==0) && (N>20)) {
        console.log("Not Weird")
    }
}


