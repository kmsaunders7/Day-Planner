var currentDay = document.querySelector("#currentDay")
var hour = parseInt(moment().format('H'))
//console.log(hour)
var rowsClass = document.getElementsByClassName('row')
var textArea = document.querySelector("textarea")
// add current date to the jumbotron using the id from html  
var date = moment().format('LL')
$("#currentDay").text(date)

// assign a variable to the id (hour) from html, now that will match with rowHour
  function hourTrack() {  
    Array.from(rowsClass).forEach(row => {
        var rowId =  row.id
        var hourNumber = parseInt(rowId)
        // console.log(idHour)

// if/else to change the color of the hour block, by setting the class in css

        if (hourNumber < hour) {
            $(row).addClass("past")
         }
         if (hourNumber === hour) {
             $(row).removeClass("past")
             $(row).addClass("present")
         }
         if (hourNumber > hour) {
             $(row).removeClass("past")
             $(row).removeClass("present")
             $(row).addClass("future")
         }

    })
}

//always processing the hour to keep hour block the appropriate color
hourTrack();

// when click the save button the text in 'textarea' portion of html
// this will be done using local storage

// var saveButton = document.querySelector(".saveBtn")
$(".saveBtn").on("click", function() {
    var timeId = $(this).parent().attr("id")
 //    console.log(timeId)
    var userInput = $(this).siblings(".task").val()
 //    console.log(userInput)
 
     localStorage.setItem(timeId, userInput)
 })


function saveInfo() {
    $(".time-block").each(function(){

        

        var block = $(this).attr("id")
        // console.log(block)

        var saved = localStorage.getItem(block)

        if (saved !== null) {
            $(this).children(".task").html(saved)
        }
    })
}
saveInfo();

