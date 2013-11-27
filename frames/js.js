function frameHandler() {
    this.count = -1;
    this.textCount = 0;

    this.resetText = function() {
        this.textCount = 0;
    }

    this.text = function() {
        t = $('#invisible > .block:eq(' 
            + this.count + ') p:eq(' + this.textCount  + ')');
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

    this.get = function() {
        r = $('#invisible > .block:eq(' + this.count + ')');
        return r;
    }

    this.advance = function() {
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
            $('#container .textarea .text').html(this.text());
            this.textCount++;
        }
    }
}

$(document).ready(function() {
    f = new frameHandler();
    f.advance();

    $(document).keypress(function(e) {
        if(e.which == 13) {
           f.advance();
        }
    });

    $(document).on('click','.block-link', function (e) {
        f.advance();
    });
});
