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

//event listener on 'Read more' button
var extraBio = document.querySelector(".extra-bio");
var expandBtn = document.querySelector(".expand");

for (i=0; i < extraBio.length; i++) {
  extraBio[i].setAttribute("data-state", "hidden")
}

expandBtn.addEventListener("click", function () {
  extraBio.removeAttribute("hidden")
});
