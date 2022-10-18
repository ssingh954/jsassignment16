//Q7. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

function validatePIN (pin) {
    const checkLength = pin.length === 4 || pin.length === 6;
  
    const numMatch = /^[0-9]/g
    
    if (checkLength && pin.match(numMatch)){  
      return true;
    }  
    
    return false;
}

console.log(validatePIN('1234'));

console.log(validatePIN('12345'));
