$(document).ready(function () {
 
   


  var time = moment().format("hh:mm:ss");
  $("#time").text(time);
  var today = moment();
  $("#day").text(today.format("MMM Do, YYYY"));
  
  // var dt = new Date();
  // var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  // document.write(time);
  var timeBlock = $("#time-block");
  var armytime = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  for (var i = 0; i<armytime.length; i++) {
    var thisHour = parseInt(moment().format("H"));
    thisHour +=5;
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
  }
  
  
  
  // The function that makes it so the text stays in the schedule when button clicked
  function handleSubmitEvent(e) {
      console.log("adding click event")
      // prevent default method 
      e.preventDefault();
         
  
      // define variables 1) Define a variable that is an activity and 1 that shows me when an activty has to be done
      // var activity = $(this).siblings('.activity-text').val();
          console.log($(this));
      var activity = $(this).attr("id");
       var id = $(this).val();
      // var activity = id.val();
          console.log("my activity ", activity); 
          console.log("my id ", id); 
      // If they don't type anything in certain hour what will happen?
      if(!activity){
          console.log("the user didn't enter an activity");
          return;
      }
      // What will happen if they do type something in a certain hour?
      // else {
          localStorage.setItem(id, JSON.stringify(activity));
          localStorage.getItem("activity")
  
      // }
  
  
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  // Create a submit event listener on the form element
  timeBlock.on("click", ".savebutton", handleSubmitEvent);
  
  } );