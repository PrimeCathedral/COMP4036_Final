<!DOCTYPE html>
<html>
<head>
  <title>Password Safety Check</title>
  <script src="SafePassword.js"></script>
</head>
<body>
  <h1>Password Safety Check</h1>
<h2>JavaScript</h2>
  <!-- From for getting the password -->
  <form id="passwordForm">
    <label for="passwordInput">Enter your password:</label>
    <input type="text" id="passwordInput" required>
    <button type="submit">Check Password</button>
  </form>

  <div id="resultContainer"></div>

  <script>
    // Get references to the form and result container
    const form = document.getElementById('passwordForm');
    const resultContainer = document.getElementById('resultContainer');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the entered password
      const passwordInput = document.getElementById('passwordInput');
      const password = passwordInput.value;

      // Check password safety
      const isSafe = checkPasswordSafety(password);

      // Display result
      if (isSafe) {
        resultContainer.textContent = "Password is safe.";
      } else {
        resultContainer.textContent = "Password is not safe. Please choose a stronger password.";
      }
    });
  </script>

  <h2>PHP</h2>

  <?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['password'])) {
      $password = $_POST['password'];

      // Function to check password safety
      function isSafePassword($password) {
        // Check if the password meets the criteria
        $isSafe = false;

        if (
          strlen($password) >= 10 &&
          preg_match('/[A-Z]/', $password) &&
          preg_match('/[a-z]/', $password) &&
          preg_match('/[0-9]/', $password) &&
          preg_match('/[^A-Za-z0-9]/', $password)
        ) {
          $isSafe = true;
        }

        // Return the result
        return ($isSafe) ? "Password is safe" : "Password is not safe";
      }

      // Call the function to check password safety
      $result = isSafePassword($password);
    }
  }
  ?>

  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <label for="password">Enter your password:</label>
    <input type="text" name="password" id="password" />
    <input type="submit" value="Check Password" />
  </form>

  <?php if (isset($result)) : ?>
    <p><?php echo $result; ?></p>
  <?php endif; ?>

</body>
</html>
