//Q9 Create a function that takes an array of numbers and returns "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const sevenBoom = (arr) => {
    let a = [];
    let b = "there is no 7 in the array.";
    for (let i = 0; i < arr.length; i++){
      a.push(arr[i].toString());
    }
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] == 7) {
          b = "Boom!";
        }
      }
    }
    return b;
  };
  
  console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
  console.log(sevenBoom([8, 6, 33, 100]));