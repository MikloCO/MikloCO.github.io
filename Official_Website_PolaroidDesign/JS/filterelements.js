
window.onload = function checkAll(e)
{
  document.getElementById("osx").checked=true;
}

var arrowbtnpresslimit = 5;
var countamountofClicksRight = 0;
var countamountofClicksLeft = 0;
var arrowbtnpresslimitLeft = 5;

var showRightArrow = function () {
  var arrow = document.getElementsByClassName("wrapper-div")[1];
  arrow.style.visibility = 'visible';
}

var hideLeftArrow = function () {
  var arrow = document.getElementsByClassName("wrapper-div")[0];
  arrow.style.visibility = 'hidden';
}

var hideRightArrow = function () {
  var arrow = document.getElementsByClassName("wrapper-div")[1];
  arrow.style.visibility = 'hidden';
}

var showLeftArrow = function () {
  var arrow = document.getElementsByClassName("wrapper-div")[0];
  arrow.style.visibility = 'visible';
}

var wipteArrows = function() {
  hideLeftArrow();
  hideRightArrow();
}

filterSelection("all")

function filterSelection(c) {
  countamountofClicksRight = 0;
  countamountofClicksLeft = 0;


  var polaroidcard = document.getElementsByClassName("card");
  if (c == "all") {
    c = "";
    showRightArrow();

  }

  for (var i = 0; i < polaroidcard.length; i++) { 
    w3RemoveClass(polaroidcard[i], "show");
    if (polaroidcard[i].className.indexOf(c) > -1) {
      w3AddClass(polaroidcard[i], "show");
    }
  }

  for (var i = 3; i < polaroidcard.length; i++) {
    w3RemoveClass(polaroidcard[i], "show");
  }

  switch (c) {
    case "java":
      addSelectedCardtagToViewport(polaroidcard.length, polaroidcard, "java")

      if (document.getElementsByClassName("java").length > 2) {
        hideRightArrow();
        hideLeftArrow();
      }
      break;

    case "csharp":
      addSelectedCardtagToViewport(polaroidcard.length, polaroidcard, "csharp");
      if (document.getElementsByClassName("csharp").length > 2) {
        hideRightArrow();
        hideLeftArrow();
      }
      break;

    case "bash":
      addSelectedCardtagToViewport(polaroidcard.length, polaroidcard, "bash");
      hideRightArrow();
      hideLeftArrow();
      break;

    case "cpp":
      addSelectedCardtagToViewport(polaroidcard.length, polaroidcard, "cpp");
      if (document.getElementsByClassName("cpp").length > 2) {
        hideRightArrow();
        hideLeftArrow();
      }
      break;

    case "python":
      addSelectedCardtagToViewport(polaroidcard.length, polaroidcard, "python");
      break;

    case "ue4":
      addSelectedCardtagToViewport(polaroidcard.length, polaroidcard, "ue4");
      break;
    case "unity":
      addSelectedCardtagToViewport(polaroidcard.length, polaroidcard, "unity");
      break;
    default:
      break;

  }
}

var addSelectedCardtagToViewport = function (amountofcards, cardObject, tag) {
  for (var i = 0; i < amountofcards; i++) {
    if (cardObject[i].classList.contains(tag)) {
      w3AddClass(cardObject[i], "show");
    }
  }
}

function gotorightbatch() {
  var polaroidcards = document.getElementsByClassName("card");
  var head = document.getElementsByClassName("show")[0];
  var mid = document.getElementsByClassName("show")[1];
  var tail = document.getElementsByClassName("show")[2];
  var temp = document.getElementsByClassName("temp");

  head.classList.add("head");
  mid.classList.add("mid");
  tail.classList.add("tail");

  var counter = 0;
  for (var j = 0; j < polaroidcards.length; j++) {
    if (polaroidcards[j].classList.contains("show")) {
      counter += 1;
    }

    if (counter == 3) {
      w3RemoveClass(head, "show");

      mid.classList.add("temp");
      mid.classList.remove("mid");
      temp[0].classList.add("head");
      temp[0].classList.remove("temp");

      tail.classList.add("temp");
      tail.classList.remove("tail");
      temp[0].classList.add("mid");
      temp[0].classList.remove("temp");

      polaroidcards[j].classList.add("tail");

      w3AddClass(polaroidcards[j + 1], "show");
      break;
    }
  }
}

function gotoleftbatch() {
  var polaroidcards = document.getElementsByClassName("card");
  var head = document.getElementsByClassName("show")[0];
  var mid = document.getElementsByClassName("show")[1];
  var tail = document.getElementsByClassName("show")[2];
  var temp = document.getElementsByClassName("temp");

  head.classList.add("head");
  mid.classList.add("mid");
  tail.classList.add("tail");

  var counter = 0;
  console.log(polaroidcards.length);
  for (var j = polaroidcards.length - 1; j > 0; j--) {
    if (polaroidcards[j].classList.contains("show")) {
      counter += 1;
    }

    if (counter == 3) {
      w3RemoveClass(tail, "show");

      mid.classList.add("temp");
      mid.classList.remove("mid");
      temp[0].classList.add("tail");
      temp[0].classList.remove("temp");

      tail.classList.add("temp");
      tail.classList.remove("head");
      temp[0].classList.add("mid");
      temp[0].classList.remove("temp");

      polaroidcards[j].classList.add("head");

      w3AddClass(polaroidcards[j - 1], "show");
      break;
    }
  }
}



function countClickRight() {
  countamountofClicksRight += 1;
  if (countamountofClicksRight == arrowbtnpresslimit) {
    hideRightArrow();
    showLeftArrow();
  }
}

function countClickLeft() {
  countamountofClicksLeft += 1;
  if (countamountofClicksLeft == arrowbtnpresslimitLeft) {
    hideLeftArrow();
    showRightArrow();
    location.reload();
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


