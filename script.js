function convert() {
    const binaryInput = document.getElementById('binaryInput').value;
    
    if (!isValidBinary(binaryInput)) {
      alert("Please enter a valid binary number.");
      return;
    }
  
    const decimal = parseInt(binaryInput, 2);
    const hexadecimal = decimal.toString(16).toUpperCase();
    const octal = decimal.toString(8);
  
    document.getElementById('decimal').textContent = decimal;
    document.getElementById('hexadecimal').textContent = hexadecimal;
    document.getElementById('octal').textContent = octal;
  }
  
  function isValidBinary(binary) {
    const binaryRegex = /^[01]+$/;
    return binaryRegex.test(binary);
  }