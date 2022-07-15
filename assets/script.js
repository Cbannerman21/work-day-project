// finds current date and time to display at top of page

var currentDate = moment().format('ddd') + "" + moment().format("Do MMM YYYY");
var hour = moment().hour();

// adding time variables to allow the checking if time has passed

var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#13");
var two = $("#14");
var three = $("#15");
var four = $("#16");
var five = $("#17");

var userInput;
var hours;


var date = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('MMMM Do, YYYY'))
})
// adding function to chagne the color of the past hours

function color() {
    $(".form-control").each(function() {
        var time = parseInt($(this).attr("id"))
        hour = parseInt(hour)
        if (hour > time) {
            $(this).addClass("past")
        }
        else if (hour === time) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    })
};

// storing user input in localStorage so it is available after refresh

function storage() {
    var store9 = JSON.parse(localStorage.getItem("9AM"))
    var store10 = JSON.parse(localStorage.getItem("10AM"))
    var store11 = JSON.parse(localStorage.getItem("11AM"))
    var store12 = JSON.parse(localStorage.getItem("12PM"))
    var store1 = JSON.parse(localStorage.getItem("1PM"))
    var store2 = JSON.parse(localStorage.getItem("2PM"))
    var store3 = JSON.parse(localStorage.getItem("3PM"))
    var store4 = JSON.parse(localStorage.getItem("4PM"))
    var store5 = JSON.parse(localStorage.getItem("5PM"))

    nine.val(store9);
    ten.val(store10);
    eleven.val(store11);
    twelve.val(store12);
    one.val(store1);
    two.val(store2);
    three.val(store3);
    four.val(store4);
    five.val(store5);
}