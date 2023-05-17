<!DOCTYPE html>
<html>
<head>
  <title>String Sorter</title>
</head>
<body>
  <h1>String Sorter</h1>
  <h2>JavaScript</h2>

  <form>
    <label for="inputString">Enter a string:</label>
    <input type="text" id="inputString">
    <button type="button" onclick="sortString()">Sort</button>
  </form>

  <div id="result"></div>

  <script src="AlphaString.js"></script>




  <h2>PHP</h2>
  <form method="POST">
    <label for="inputString">Enter a string:</label>
    <input type="text" name="inputString" id="inputString">
    <button type="submit">Sort</button>
  </form>

  <?php
  // Check if the form is submitted
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input string from the form
    $inputString = $_POST['inputString'];

    // Remove any leading/trailing white spaces
    $inputString = trim($inputString);

    // Convert the string to an array of characters
    $characters = str_split($inputString);

    // Sort the characters in alphabetical order
    sort($characters);

    // Convert the sorted characters back to a string
    $sortedString = implode('', $characters);

    // Display the sorted string
    echo "<p>Sorted string: $sortedString</p>";
  }
  ?>

</body>
</html>
