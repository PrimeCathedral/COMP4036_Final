<!DOCTYPE html>
<html>
  <head>
    <title>Acronym Generator</title>

    <!-- Javascript -->

    <script src = "./acronym_generator.js" ></script>

    <!-- PHP -->


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
      <br><br>
      <input type="submit" value="Generate Acronym">
    </form>
    <?php
        $fullMeaning = $_POST["fullMeaning"];
        $words = explode(" ", $fullMeaning);
        $acronym = "";
        foreach ($words as $word) {
        $acronym .= strtoupper($word[0]);
        echo "<p>The acronym for $fullMeaning is $acronym</p>";
      }
    ?>
  </body>
</html>