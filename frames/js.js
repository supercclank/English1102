function frameHandler() {
    this.count = -1;
    this.textCount = 0;
    this.stopped = false;

    this.resetText = function() {
        this.textCount = 0;
    }

    this.getText = function(t) {
         if(t.length == 0)
            return false;
        image = '';
        if(t.attr('abbr')) {
            imgName = 'art/' + t.attr('abbr');
            image = '<div class="speaker-icon" style="background-image:url(\''
             + imgName + '\');"></div>';
        }
        return  image + t.html();
    }

    this.text = function() {
        t = $('#invisible > .block:eq(' 
            + this.count + ') p:eq(' + this.textCount  + ')');
       return this.getText(t);
    }

    this.setText = function(t) {
        $('#container .textarea .text').html(t);
    }

    this.get = function() {
        r = $('#invisible > .block:eq(' + this.count + ')');
        return r;
    }

    this.advanceHook = function(i, j) {
        //Optional function to be overwritten
    }

    this.stopAdvancement = function() {
        this.stopped = true;
    }

    this.continueAdvancement = function() {
        this.stopped = false; 
    }

    this.advance = function() {
        if(this.stopped) {
            return;
        }
        if(!this.text()) {
            $('#container > div:first').slideDown(500);
            this.count++;
            next = this.get();
            if(next.length == 0) {
                url = $('#final-link').val();
                window.location.href = url;
            }
            $('#container').html(next.html());
            this.resetText();
        }
        if(this.text()) {
            this.setText(this.text());
            this.textCount++;
        }
        this.advanceHook(this.count, this.textCount - 1);
    }
}

$(document).ready(function() {
    f = new frameHandler();
    f.advance();

    img = new Array();
    $('.image').each(function(i) {
        bg_url = $(this).css('background-image');
        
        // ^ Either "none" or url("...urlhere..")
        bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
        bg_url = bg_url ? bg_url[2] : "";
        
        img[i] = new Image();
        img[i].src = bg_url;
        
        i++;
    });

    $(document).keypress(function(e) {
        if(e.which == 13 || e.which == 32) {
           f.advance();
        }
    });

    $(document).on('click','.block-link', function (e) {
        f.advance();
    });
});
