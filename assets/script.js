// test to see if js is linked and working.
//console.log("working")


//current date and time from moment.js
var datetime = null,
  date = null;

var update = function () {
  date = moment(new Date())
  datetime.html(date.format('dddd, MMMM Do YYYY, h:mm a'));
};
$(document).ready(function () {
  datetime = $("#time")
  update();
  setInterval(update, 1000);
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunctionLil() {
  var dots = document.getElementById("dotsLil");
  var moreText = document.getElementById("moreLil");
  var btnText = document.getElementById("myBtnLil");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionCate() {
  var dots = document.getElementById("dotsCate");
  var moreText = document.getElementById("moreCate");
  var btnText = document.getElementById("myBtnCate");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionNatalie() {
  var dots = document.getElementById("dotsNatalie");
  var moreText = document.getElementById("moreNatalie");
  var btnText = document.getElementById("myBtnNatalie");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionLulu() {
  var dots = document.getElementById("dotsLulu");
  var moreText = document.getElementById("moreLulu");
  var btnText = document.getElementById("myBtnLulu");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionKat() {
  var dots = document.getElementById("dotsKat");
  var moreText = document.getElementById("moreKat");
  var btnText = document.getElementById("myBtnKat");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
