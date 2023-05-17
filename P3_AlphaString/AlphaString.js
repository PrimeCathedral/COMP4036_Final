// AlphaString.js

function sortString() {
    // Get the input string from the input field
    const inputString = document.getElementById('inputString').value;
  
    // Remove any leading/trailing white spaces
    const trimmedString = inputString.trim();
  
    // Convert the string to an array of characters
    const characters = Array.from(trimmedString);
  
    // Sort the characters in alphabetical order
    const sortedCharacters = characters.sort();
  
    // Convert the sorted characters back to a string
    const sortedString = sortedCharacters.join('');
  
    // Display the sorted string
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Sorted string: ${sortedString}`;
  }
  