var today = dayjs();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//$( document ).ready() will run the page when everything in JS is ready. Short hand is $(function() {}
$(document).ready(function () {
  console.log('Im ready')
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  //$(variable) is JQ's querySelectAll essentially
  //Target saveBtn
    $('.saveBtn').on("click", function() {
      // console.log("it works :)")

      //`this` refers to saveBtn
      //Use DOM traversel for `id` and `textarea`
      var hour = $(this).parent().attr('id')
      // console.log(hour)
      //siblings() takes the elements in the same branch? Family? You know what a parent and child are.
      // var event = $(this).siblings('textarea').val()

      //prev() traverses to the other sibling. The older sibling? Whatever was before it.
      var event = $(this).prev().val()
      // console.log(text)
      localStorage.setItem(hour, JSON.stringify(event))
     
      })
    
      // console.log(hour, text)

    
    
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

var currentHour = today.format('H')
// console.log(hourNow)

//Target time-block to only change it
//Doing with .hour will fill the hour blocks
  $('.time-block').each(function(){
    //.split removes the 'hour-' portion from the id in this function
    var htmlHour = $(this).attr('id').split('hour-')[1]

    //Looking to see if the hour block matches the IRL hour
if (htmlHour < currentHour) {
  $(this).removeClass('present')
  $(this).removeClass('future')
  $(this).addClass('past')
}
else if (htmlHour == currentHour) {
  $(this).addClass('present')
  $(this).removeClass('future')
  $(this).removeClass('past')
}
else {
  $(this).removeClass('present')
  $(this).addClass('future')
  $(this).removeClass('past')
  }
  })


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('#hour-9 textarea').val(localStorage.getItem('hour-9'))
  $('#hour-10 textarea').val(localStorage.getItem('hour-10'))
  $('#hour-11 textarea').val(localStorage.getItem('hour-11'))
  $('#hour-12 textarea').val(localStorage.getItem('hour-12'))
  $('#hour-13 textarea').val(localStorage.getItem('hour-13'))
  $('#hour-14 textarea').val(localStorage.getItem('hour-14'))
  $('#hour-15 textarea').val(localStorage.getItem('hour-15'))
  $('#hour-16 textarea').val(localStorage.getItem('hour-16'))
  $('#hour-17 textarea').val(localStorage.getItem('hour-17'))


  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format ('dddd MMMM D, YYYY'))

});