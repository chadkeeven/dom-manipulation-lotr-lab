//console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  document.getElementsByTagName("body")[0].appendChild(middleEarth);

  for(var i = 0; i < lands.length; i++){
    var land = document.createElement("article");
    var landheader = document.createElement("h1");
    landheader.innerHTML = lands[i];
    land.appendChild(landheader);
    document.getElementById("middle-earth").appendChild(land);
  }
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  var hobbitList = document.createElement("ul");
  document.getElementsByTagName("article")[0].appendChild(hobbitList);
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement("li");
    hobbit.setAttribute("class", "hobbit");
    hobbit.innerHTML = hobbits[i];
    document.getElementsByTagName("ul")[0].appendChild(hobbit);
  }
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  document.getElementsByTagName("li")[0].appendChild(theRing);
  //theRing.addEventListener("click", nazgulScreech());
  if(theRing.addEventListener("click", function() {
    nazgulScreech();
  }));
  
}


  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
var aside = document.createElement("aside");
var buddiesList = document.createElement("ul");
aside.appendChild(buddiesList);
document.getElementsByTagName("article")[1].appendChild(aside);
for (var i = 0; i < buddies.length; i++) {
  var buddie = document.createElement("li");
  buddie.innerHTML = buddies[i];
  buddiesList.appendChild(buddie);
}

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies(); 

// Part 5


function beautifulStranger() {
  var strider = document.getElementsByTagName("ul")[1].getElementsByTagName("li")[3];
  strider.innerHTML = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  var hobbitlist = document.getElementsByTagName("ul")[0];
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(hobbitlist);
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  var theFellowship = document.createElement("div");
  theFellowship.setAttribute("class", "the-fellowship");
  var rivendell = document.getElementsByTagName("article")[1];
  var buddieList = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
  var bList =buddieList.length;

  var hobbitList = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
  rivendell.appendChild(theFellowship);
  for (var i = 0; i < bList; i++) {
    var buddie = buddieList[0];
    var hobbit = hobbitList[0];
    console.log(buddie);
    //console.log(hobbit);

   // console.log(i);
   // console.log(bList);
    console.log(theFellowship.appendChild(buddie))
    theFellowship.appendChild(buddie);
    theFellowship.appendChild(hobbit);
    alert(buddie.textContent + " added!");
    alert(hobbit.textContent + " added!");
    
    console.log(theFellowship);
     
  }
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
