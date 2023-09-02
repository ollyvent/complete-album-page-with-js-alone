// create the album object
let favoriteAlbum = {
  Artist: "Marcus Cole",
  Album: "Write my Song",
  Tracks: [
    "Track 1: That's Alright (Cause I gat You)",
    "Track 2: The Lord Has Been Good",
    "Track 3: Finally",
    "Track 4: Remember to Breath",
    "Track 5: I Don't Know",
    "Track 6: Write My Song",
    "Track 7: Being with You",
    "Track 8: Persuaded",
    "Track 9: Celebrate",
    "Track 10: You're There",
    "Track 11: Bless My Soul",
  ],
};

// dynamically create the variables, add classes and append them
    // div with class of container
const body = document.body; // create the body variable
const containerDiv = document.createElement("div"); // create the main div
containerDiv.setAttribute("class", "container"); // added container class to the main div
body.append(containerDiv); // append the main div element to the body
    // div with class of artist for the main heading
const artistDiv = document.createElement("div"); // create the the div for the artist heading
artistDiv.setAttribute("class", "artist");  // add a class of artist for the artistDiv
containerDiv.append(artistDiv); // append the artist heading to the main container
    
