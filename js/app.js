// function NAVBAR
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// REDIRECT

function team(){
	location.href = '#team';
}
function about(){
	location.href = '#about';
}
function contact(){
	location.href = '#contact';
}

