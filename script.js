  var time = moment().format("hh:mm:ss");
  $("#time").text(time);
var today = moment();
$("#day").text(today.format("MMM Do, YYYY"));
var sheduleFormEl = $("#shedule-form");
var toDoListEl = $("#to-do-list");
var saveEl = $("#icon")
var timeBlock = $(".time-block")
var armytime = [8, 9, 10, 11, 12, 13, 14, 15, 16];
for (var i = 0; i<armytime.length; i++) {
  var thisHour = parseInt(moment().format("H"));
  console.log( armytime[i] < thisHour )
  $("#"+armytime[i]).text(JSON.parse(localStorage.getItem( armytime[i] )))
  if(armytime[i] < thisHour){
    $("#"+armytime[i]).addClass("past")
  }else if (thisHour === armytime[i]){
    $("#"+armytime[i]).removeClass("past")
    $("#"+armytime[i]).addClass("present")
  } else {
    $("#"+armytime[i]).removeClass("past")
    $("#"+armytime[i]).removeClass("present")
    $("#"+armytime[i]).addClass("future")
  }
$("#"+armytime[i]).append()
}
// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  console.log($(this).prev().val());
  // select form element by its `name` attribute and get its value
  var activity = $(this).prev().val().trim();
  var id = $(this).prev().attr("id")
  // if there's nothing in the form entered, don't print to the page
  if (!activity) {
    console.log('No things to do at this moment!');
    return;
  };
      localStorage.setItem(id, JSON.stringify(activity));
     // localStorage.getItem("activity")
};
// Create a submit event listener on the form element
timeBlock.on('click', ".saveBtn", handleFormSubmit);