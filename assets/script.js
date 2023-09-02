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
    // div with class of hero for the image
const heroDiv = document.createElement("div"); // create a div to wrap the hero image
heroDiv.setAttribute('class', 'hero'); // set class of hero to the hero div
containerDiv.append(heroDiv); // append the hero div to the main container div
const imgEl = document.createElement("img"); // create the hero element image
heroDiv.append(imgEl); // append the new image element to the hero div
    // div with class of album-content to hold the entire album contents
const divContent = document.createElement('div'); // create div to wrap album content
divContent.setAttribute('class', 'album-content'); // add class of album-content to content div
containerDiv.append(divContent); // append the content div to the main container div 
    // div with class of artist for the main heading
const artistDiv = document.createElement("div"); // create the the div for the artist heading
artistDiv.setAttribute("class", "artist"); // add a class of artist for the artistDiv
divContent.append(artistDiv); // append the artist heading to the main container
    // div with class of album for the album heading
const albumDiv = document.createElement("div"); // create a div for the album heading
albumDiv.setAttribute("class", "album"); // add a class to album to the album heading div
divContent.append(albumDiv); // append the album div to the main container div
    // div with class of track-list for the album tracks
const trackListDiv = document.createElement("div"); // create div for track list
trackListDiv.setAttribute("class", "track-list"); // class of track-list for the tracks list
divContent.append(trackListDiv); // append the track list to track list title

// dynamically add content to the various sections
    // main header div
const headingOne = document.createElement("h1"); // create h1 element
artistDiv.append(headingOne); // append the h1 element to the artist div
headingOne.innerText = favoriteAlbum.Artist; // set the artist content from the object to the h1 element
    // artist div
const headingTwo = document.createElement("h2"); // create h2 element
albumDiv.append(headingTwo); // append the h2 to the album div
headingTwo.innerText = favoriteAlbum.Album; // set the album content from the object to the h2 element
    // tracks
const ulEl = document.createElement("ul"); // create unordered list element
trackListDiv.append(ulEl); // append the unordered list to the tracks list div
    // the hero image
imgEl.setAttribute('src', '../assets/images/marcus_cole_2480.jpg');

// TO-DO: a function could actually do this faster (grab the tracks from the object and add them by innerText )
    //track one
const trackOne = document.createElement("li"); // create the track 1 list element
ulEl.append(trackOne); // append the track one list element to the unordered list
trackOne.innerText = favoriteAlbum.Tracks[0]; // set the track one list item to the track one content inside the object
    //track two
const trackTwo = document.createElement("li"); // create the track 1 list element
ulEl.append(trackTwo); // append the track one list element to the unordered list
trackTwo.innerText = favoriteAlbum.Tracks[1]; // set the track one list item to the track one content inside the object
    //track Three
const trackThree = document.createElement("li"); // create the track 1 list element
ulEl.append(trackThree); // append the track one list element to the unordered list
trackThree.innerText = favoriteAlbum.Tracks[2]; // set the track one list item to the track one content inside the object
    //track Four
const trackFour = document.createElement("li"); // create the track 1 list element
ulEl.append(trackFour); // append the track one list element to the unordered list
trackFour.innerText = favoriteAlbum.Tracks[3]; // set the track one list item to the track one content inside the object
    //track Five
const trackFive = document.createElement("li"); // create the track 1 list element
ulEl.append(trackFive); // append the track one list element to the unordered list
trackFive.innerText = favoriteAlbum.Tracks[4]; // set the track one list item to the track one content inside the object
    //track Six
const trackSix = document.createElement("li"); // create the track 1 list element
ulEl.append(trackSix); // append the track one list element to the unordered list
trackSix.innerText = favoriteAlbum.Tracks[5]; // set the track one list item to the track one content inside the object
    //track Seven
const trackSeven = document.createElement("li"); // create the track 1 list element
ulEl.append(trackSeven); // append the track one list element to the unordered list
trackSeven.innerText = favoriteAlbum.Tracks[6]; // set the track one list item to the track one content inside the object
    //track Eight
const trackEight = document.createElement("li"); // create the track 1 list element
ulEl.append(trackEight); // append the track one list element to the unordered list
trackEight.innerText = favoriteAlbum.Tracks[7]; // set the track one list item to the track one content inside the object
    //track Nine
const trackNine = document.createElement("li"); // create the track 1 list element
ulEl.append(trackNine); // append the track one list element to the unordered list
trackNine.innerText = favoriteAlbum.Tracks[8]; // set the track one list item to the track one content inside the object
    //track Ten
const trackTen = document.createElement("li"); // create the track 1 list element
ulEl.append(trackTen); // append the track one list element to the unordered list
trackTen.innerText = favoriteAlbum.Tracks[9]; // set the track one list item to the track one content inside the object
    //track Eleven
const trackEleven = document.createElement("li"); // create the track 1 list element
ulEl.append(trackEleven); // append the track one list element to the unordered list
trackEleven.innerText = favoriteAlbum.Tracks[10]; // set the track one list item to the track one content inside the object

// Time to style
body.setAttribute('style', 'margin:0; padding:0'); // add padding 0 and margin 0 to body
imgEl.setAttribute('style', 'display:flex; width:400px; border:solid 1px gold;') // add width and border-gold to img
containerDiv.setAttribute('style', 'display:flex; margin: 0 auto') // add display flex to main container
heroDiv.setAttribute('style','display:flex; justify-content:right; align-items:center; width:50%;');
divContent.setAttribute('style', 'width:50%')