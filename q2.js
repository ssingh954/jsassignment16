//Q2. Create a function that finds the word "happiness" in the given string (not case sensitive). If found, return "Hurray!", otherwise return "There is no happiness.".

function findHappiness(str){
    const string1 = "happiness";
    let index = str.indexOf(string1);
    console.log(index);
}
var result = findHappiness("Work makes me happy");
result = findHappiness("You give me the feeling of happiness");

if(result == -1) {
    console.log('There is no happiness.');
} else {
    console.log('Hurray!');
}