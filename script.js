// script.js
// when user 'clicks' on the div id 'red', evoke the function makeRed()
document.getElementById(‘red’).onclick = makeRed; 
function makeRed() {
document.getElementById('redLight').style.backgroundColor = "red"
}
