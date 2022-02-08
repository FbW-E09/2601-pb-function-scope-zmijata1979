function num(num1, num2) {
     if (typeof num1 === "number" && typeof num2 === "number") {
      return true;
}
else {
  return false;
}
}

console.log("Q1a.", num(3, 5));


function numExp(num1, num2) {
  let num3 = "";
    for (let i = 1; i <= num2; i++) {
      let number = num1 ** i;
      num3 = num3 + " " + number;
    }
    return num3;
  }
  console.log("Q1b.", numExp(3, 5));

  console.log("Q1b.", numExp(2, 8));

  let myFruit = "maracuja";

function printFavoriteFruit() {
  myFruit = "papaya";
  return "My favorite fruit is " + myFruit;
}

console.log("Q2.", printFavoriteFruit());

function exponent(num1, num2) {
    let result = "";
    for (let i = 1; i <= num2; i++) {
      result = num1 ** i;
    }
    return result;
  }
  console.log("Q3.", exponent(10, 5));
 
//It is not possible to access the variable result because it is declared locally and is known only inside the function.
//we can return the result of the variable result but we can not access the variable outside of the function