// set timeout
$(document).ready(function() { 
    var tid = setTimeout(alarmRing, 500);
    function alarmRing() {
        $('.alarm-frame').effect("shake", "left", 15, 1);
        $('.alarm-frame-2').effect("shake", "right", 15, 3);

        tid = setTimeout(alarmRing, 2000); 
    }
    function abortTimer() {
        clearTimeout(tid);
    }

    f.advanceHook = function(count, text) {
        if(count == 1 && text == 1)
            abortTimer();
    }
});