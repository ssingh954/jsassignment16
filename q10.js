//Q10 Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

function XO(str) {
    // make the string lowercase because we are case insensitive
    str = str.toLowerCase();

    // put the string into an array
    var arrayOfCharacters = str.split("");

    //count the x's
    var countX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
      }, 0);
      
    // count the o's
    var countO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
      }, 0);
    
    // do these numbers match? if so return true and if not return false
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));