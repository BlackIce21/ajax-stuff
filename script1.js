window.onload = function() {
  var parentDiv = document.getElementsByClassName("demo");
  var counter = 1;
  var btn = document.getElementById("btn");
  var container = document.getElementById("info-here");
  btn.addEventListener("click", function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json');
    req.onload = function() {
      var data = JSON.parse(req.responseText);
      renderHTML(data);
    };
    req.send();
    counter++;
    if(counter > 3){
      btn.style.display = "none";
    }
  });

  function renderHTML(data) {
    var htmlstring = "";

    for(var i=0;i<data.length;i++){
      htmlstring += "<p>" + data[i].name + " is a " + data[i].species + " and likes to eat ";
      for(var j=0;j<data[i].foods.likes.length;j++){
        htmlstring += data[i].foods.likes[j];
      }
      htmlstring += ".</p>";
    }
    container.innerHTML = htmlstring;
  }
};
