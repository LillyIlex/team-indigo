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

//event listener on 'Read more! button
$(".expand").on("click", function (event) {
  event.preventDefault();
  //.$(".extra-bio")data state hidden .remove()
});
