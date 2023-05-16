<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      <p>Enter the full meaning of an organization or concept:</p>
      <input type="text" name="fullMeaning">
      <br><br>
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
  </body>
</html>
