/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let A = expressions[0]
    let P = expressions[1]

    function formula (A,B) {
        let k = (P*P)-(16*A)             // karekökün içini bulduk 
        return Math.sqrt(k)              // karekökten çıkardık
    }
  let s1 = (P + formula(A,P))/4
  let s2 = (P - formula(A,P))/4
  let array = [s1,s2]                             // array haline getirdik
 let sorted = array.sort(function (a,b) {          // bizden küçükten büyüğe sıralı istiyorlar 
      return a-b
  })
  return sorted;
}
