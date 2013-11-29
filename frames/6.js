$(document).ready(function() { 
    f.advanceHook = function(count, text) {
        if(count == 1 && text == 0)
            f.stopAdvancement();
    }
    var clickCount = 0;
    var tetrisCount = 0;
    $(document).on('click','.item-link', function (e) {
        id = $(this).attr('id');

        if(id == 'item-nintendo') {
            if(++tetrisCount >= 2) {
                window.location.href = '../tetris';
            }

        }else {
            tetrisCount = 0;
        }

        t = f.getText($('#' + id + ' > span'));
        f.setText(t);


        clickCount++; 

        if(clickCount >= 3) {
            $('#room-link').css('display', 'inline');
            f.continueAdvancement();
        }
    });
});
