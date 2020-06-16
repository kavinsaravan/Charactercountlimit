var limit = 30
function onTextInput(value) {
  var length = value.length;
  var remaining = limit - length;
  document.getElementById("count").innerHTML = remaining + " remaining";
  var count = document.getElementById("count");
  if (length > 20) {
    count.style.color = 'red';
  } else {
    count.style.color = 'black';
  }
}

