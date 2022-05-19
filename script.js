var allLights = document.getElementsByClassName("light")
var yellowID = document.getElementById('yellow');
var greenID = document.getElementById('green');
var redID = document.getElementById('red');

for (var i = 0; i < allLights.length; i++){
  allLights[i].addEventListener("click", displayLight);
}

function displayLight(e){  lightsOff();  if (e.target.id === 'red'){
      redID.classList.add('light-visible');
    } else if (e.target.id === 'yellow'){
      yellowID.classList.add('light-visible');
    } else {
      greenID.classList.add('light-visible');
    }
  }
function lightsOff() {
  for (var i = 0; i < allLights.length; i++) {
    allLights[i].classList.remove("light-visible");
  }
}
