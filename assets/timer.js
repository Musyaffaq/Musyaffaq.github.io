$(document).ready(function() {
    //variables for the hours, minutes, seconds and milliseconds
    var hour = 0;
    var minute = 0;
    var second = 0;
    var millisecond = 0;

    //function to make the timing all happen!
    function timing() {
        if ((millisecond + 10) === 1000) {
            millisecond = 0;
            $(".ms").html(("00" + millisecond).slice(-3));
            if ((second + 1) === 60) {
                second = 0;
                $(".ss").html(("0" + second).slice(-2));
                if ((minute + 1) === 60) {
                    minute = 0;
                    $(".mm").html(("0" + minute).slice(-2));
                    hour = hour + 1;
                    $(".hh").html(("0" + hour).slice(-2));
                } else {
                    minute = minute + 1;
                    $(".mm").html(("0" + minute).slice(-2));                            
                }
            } else {
                second = second + 1;
                $(".ss").html(("0" + second).slice(-2));
            }
        } else {
            millisecond = millisecond + 10;
            $(".ms").html(("00" + millisecond).slice(-3));
        }                
    }


    //set the interval for timing
    function timer() {
        interval = setInterval(timing, 10);
    }

    //this is to pause the timer when the PAUSE button is pressed and to continue the timer when the START button is pressed again
    $("#startStop").click(function() {
        if (document.getElementById("startStop").className === "start") {
            timer();
            $(this).html("PAUSE");
            $(this).removeClass("start");
            $(this).addClass("pause");
        } else {
            $(this).html("START");
            $(this).removeClass("pause");
            $(this).addClass("start");
            clearInterval(interval);
        }
    })

    //this is to reset the timer when the STOP button is pressed
    $(".stop").click(function() {
        clearInterval(interval);
        millisecond = 0;
        second = 0;
        minute = 0;
        hour = 0;
        $(".ms").html(("00" + millisecond).slice(-3));
        $(".ss").html(("0" + second).slice(-2));
        $(".mm").html(("0" + minute).slice(-2));
        $(".hh").html(("0" + hour).slice(-2));
        $("#startStop").html("START");
        $("#startStop").removeClass("pause");
        $("#startStop").addClass("start");
        clearInterval(interval);
    })    
})