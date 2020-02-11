// https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-1.md

function calculate(n1, operator, n2) {
    if (operator === "+") 
      return n1 + n2;
    if (operator === "-")
      return n1 - n2;
    if (operator === "/")
      return n1 / n2;
    if (operator === "%")
      return n1 % n2;
    if (operator === "^")
      return Math.pow(n1, n2);
    if (operator === "exp")
      return Math.pow(n1, n2);
    else return "Please provide correct operator";
}

console.log(calculate(3, "+", 7)); // 10
console.log(calculate(2, "^", 4)); //16
console.log(calculate(2, "exp", 4)) // 16



