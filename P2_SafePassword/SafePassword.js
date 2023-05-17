function checkPasswordSafety(password) {
    // Check the length of the password
    if (password.length < 10) {
      return false;
    }
    
    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
    
    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    
    // Check if the password contains at least one digit
    if (!/[0-9]/.test(password)) {
      return false;
    }
    
    // Check if the password contains at least one special character
    if (!/[^a-zA-Z0-9]/.test(password)) {
      return false;
    }
    
    // Password meets all the criteria
    return true;
  }
  
  // Example usage
  const password = "SecurePassword123!";
  const isSafe = checkPasswordSafety(password);
  
  if (isSafe) {
    console.log("Password is safe.");
  } else {
    console.log("Password is not safe. Please choose a stronger password.");
  }
  