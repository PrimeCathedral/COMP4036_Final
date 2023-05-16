function generateAcronym() {
  // Get the input value from the user
  const fullMeaning = document.getElementById("fullMeaningInput").value;
  
  // Generate the acronym
  const words = fullMeaning.split(" ");
  let acronym = "";
  for (let i = 0; i < words.length; i++) {
    acronym += words[i].charAt(0).toUpperCase();
  } 

  // Display the acronym
  document.getElementById("acronymOutput").innerHTML = `The acronym for ${fullMeaning} is ${acronym}`;
  } 