<!DOCTYPE html>
<html>
  <head>

    <!-- Javascript  code-->
    <script src = "./acronym_generator.js" ></script>    
  </head>
  <body>
  
  <h1>Acronym Generator</h1>
    <h2>JavaScript</h2>
    <p>Enter the full meaning of an organization or concept:</p>
    <input type="text" id="fullMeaningInput">
    <button onclick="generateAcronym()">Generate Acronym</button>
    <p id="acronymOutput"></p>


    <h2>PHP</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      <p>Enter the full meaning of an organization or concept:</p>
      <input type="text" name="fullMeaning">
      <input type="submit" value="Generate Acronym">
    </form>
    <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $fullMeaning = $_POST["fullMeaning"];
        $words = explode(" ", $fullMeaning);
        $acronym = "";
        foreach ($words as $word) {
          $acronym .= strtoupper($word[0]);
        }
        echo "<p>The acronym for $fullMeaning is $acronym</p>";
      }
    ?>
    <br><br>
    <!-- Just a cool Perry the platypus GIF -->
    <img src="../images/Perry2.gif" alt="Perry the inspector gadget" width="200" height="200">
  </body>
</html>
