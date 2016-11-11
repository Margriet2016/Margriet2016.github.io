/* Toggle Countries */
var switchButtons = function() {
  document.getElementById("shifter").children[0].children[0].addEventListener("click", moveUp);
  document.getElementById("shifter").children[8].children[0].addEventListener("click", moveDown);
};

var moveUp = function() {
  var buttonContainerList = document.getElementById("shifter").children;
  var saveContent = buttonContainerList[1].children[0].innerHTML;
  for (var i = 1; i < 7 ; i++) {
    buttonContainerList[i].children[0].innerHTML = buttonContainerList[i+1].children[0].innerHTML;
  };
  buttonContainerList[7].children[0].innerHTML = saveContent;
};

var moveDown = function() {
  var buttonContainerList = document.getElementById("shifter").children;
  var saveContent = buttonContainerList[7].children[0].innerHTML;
  for (var i = 7; i > 1 ; i--) {
    buttonContainerList[i].children[0].innerHTML = buttonContainerList[i-1].children[0].innerHTML;
  };
  buttonContainerList[1].children[0].innerHTML = saveContent;
};


/* Write Agenda */

/*  var line = document.getElementById("leftPage").getElementsByClassName("lineDivText");  */

/* for (var i = 0; i < line.length; i++) {
  line[i].children[0].style.display = "none";
}; */


  /* fill with content */

var startFillingInAgenda = function () {
  var i = 0;

  for (var j = 0; j < 18; j++) {
    document.getElementsByClassName("lineDivText")[j].children[0].style.display = "none";
  }

  var printAgenda = function() {

    var chars = document.getElementsByClassName("lineDivText");
    var charSplit = chars[i].getElementsByTagName("p")[0].innerHTML.split("");
    var appearLine = "";
    var j = 0;
    document.getElementsByClassName("lineDivText")[i].children[0].style.display = "flex";

    var slowPrinting = function() {
        appearLine += charSplit[j];
        document.getElementsByClassName("lineDivText")[i].getElementsByTagName("p")[0].innerHTML = appearLine;

        j++;
        if( j < charSplit.length ){
          setTimeout( slowPrinting, 20); //time in milliseconds per character
        } else if (charSplit.length == j ) {
          i++;
          if (i < chars.length) {
            setTimeout(printAgenda, 600);
          };
        };
    };
    slowPrinting();
  };
  printAgenda();
};
