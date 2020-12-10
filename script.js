var currentDay = document.querySelector("#currentDay")
var hour = parseInt(moment().format('H'))
console.log(hour)
var rowsClass = document.getElementsByClassName('row')

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