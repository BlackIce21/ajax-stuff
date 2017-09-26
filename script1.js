window.onload = function() {
  var parentDiv = document.getElementsByClassName("demo");
  var counter = 1;
  var btn = document.getElementById("btn");
  var container = document.getElementById("info-here");
  btn.addEventListener("click", function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json');
    req.onload = function() {
      if(req.status >=200 && req.status < 404){
      var data = JSON.parse(req.responseText);
      renderHTML(data);
    }else{
      console.log("connected but can't retrieve");
    }
    };
    req.onerror = function(){
      console.log("Connection error");
    };
    req.send();
    counter++;
    if (counter > 3) {
      btn.disabled = "true";
    }
  });

  function renderHTML(data) {
    var htmlstring = "";

    for (var i = 0; i < data.length; i++) {
      htmlstring += "<p>" + data[i].name + " is a " + data[i].species + " and likes to eat ";
      for (var j = 0; j < data[i].foods.likes.length; j++) {
        if (j == 0) {
          htmlstring += data[i].foods.likes[j];
        } else {
          htmlstring += " and " + data[i].foods.likes[j];
        }
      }
      htmlstring += " and dislikes ";
      for (var k = 0; k < data[i].foods.dislikes.length; k++) {
        if (k == 0) {
          htmlstring += data[i].foods.dislikes[k];
        } else {
          htmlstring += " and " + data[i].foods.dislikes[k];
        }
      }
      htmlstring += ".</p>";
    }
    container.innerHTML = htmlstring;
  }
};
