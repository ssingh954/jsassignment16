//Q4 Create a function that will return an integer number corresponding to the amount of digits in the given integer num

function num_of_digits(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }
  console.log(num_of_digits(1000));

  console.log(num_of_digits(12));
  
  console.log(num_of_digits(1305981031));