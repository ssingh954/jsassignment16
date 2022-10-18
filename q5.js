//Q5 Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

function removeLeadingTrailing(n) {
    let num = parseFloat(n);
    return num === Math.floor(num) ? Math.floor(num).toString() : num.toString();
  }

  console.log(removeLeadingTrailing('230.00'));

  console.log(removeLeadingTrailing('00402'));