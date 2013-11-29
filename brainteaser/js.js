
 var teasers = [];
 var answers = [];
$(document).ready(function() {
     teasers.push("<div id='prompt1' class='prompt' style=\"background-image: url('BrainTeaser1.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

      teasers.push("<div id='prompt2' class='prompt' style=\"background-image: url('BrainTeaser2.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt3' class='prompt' style=\"background-image: url('BrainTeaser3.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt4' class='prompt' style=\"background-image: url('BrainTeaser4.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt5' class='prompt' style=\"background-image: url('BrainTeaser5.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt6' class='prompt' style=\"background-image: url('BrainTeaser6.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt7' class='prompt' style=\"background-image: url('BrainTeaser7.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt8' class='prompt' style=\"background-image: url('BrainTeaser8.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt9' class='prompt' style=\"background-image: url('BrainTeaser9.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt10' class='prompt' style=\"background-image: url('BrainTeaser10.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt11' class='prompt' style=\"background-image: url('BrainTeaser11.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt12' class='prompt' style=\"background-image: url('BrainTeaser12.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt13' class='prompt' style=\"background-image: url('BrainTeaser13.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt14' class='prompt' style=\"background-image: url('BrainTeaser14.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");

     teasers.push("<div id='prompt15' class='prompt' style=\"background-image: url('BrainTeaser16.png')\"><input type='text' style='width: 145px;'></input><button type='button' style='width: 150px;' onclick='check(this)'>Check Answer</button></div>");


     answers.push("foreign language");
     answers.push("man overboard");
     answers.push("tennis shoes");
     answers.push("good afternoon");
     answers.push("hand in hand");
     answers.push("ring around the rosey");
     answers.push("crossroads");
     answers.push("once upon a time");
     answers.push("big fish in a small pond");
     answers.push("scrambled eggs");
     answers.push("tennessee");
     answers.push("backseat driver");
     answers.push("stuck-up");
     answers.push("forgive and forget");
     answers.push("the aftermath");
    makePuzzle();
});
var numNeeded = 5;
var numCorrect = 0;
function makePuzzle(){
            $(".pTable").append(" <tr> ");
     for (var x =0; x<teasers.length; x++){
        if((x%5==0)&&(x!=0)){
             $(".pTable").append(" </tr> "+" <tr> ");
        }
        $(".pTable tr:last").append(" <td> "+teasers[x]+" </td> ");
     }
     $(".pTable").append(" </tr> ");

}

function check(that){
    var id = $(that).parent().attr('id');
    var promptNumber = id.substr(6);
    var y = $('#' + id + ' > input').val();
    if (y.toLowerCase().replace(/[\s-]+/g, '')===answers[parseInt(promptNumber)-1].replace(/[\s-]+/g, '')){
        setPicture(id);
        numCorrect++;
    }
    if (numCorrect == 1) {
        $('#you-rock').html("Hey, good work! Solve a total of " + numNeeded + " brainteasers to continue. ");
    } else if (numCorrect == numNeeded){
        $("#correct").append("<a href='../frames/2.html'>Next &#187;</a>");
        $('#you-rock').html("You've solved enough brainteasers. Feel free to keep solving more or continue. ");
    } else if (numCorrect == numNeeded + 2) {
        $('#you-rock').html("Hey, you're pretty good at this! You can keep solving more or continue. ");
    } else if (numCorrect == numNeeded * 2) {
        $('#you-rock').html("Wow, you've already solved twice as many as you needed! ");
    } else if (numCorrect == teasers.length - 1) {
        $('#you-rock').html("Almost there! You've only got one brainteaser to go. Or you can continue now. ");
    } else if (numCorrect == teasers.length) {
        $('#you-rock').html("Good job! You solved all the brainteasers. Click next to move forward. ");
    }
}

function setPicture(id){
    div = "#"+id;
    $(div).html("<img src='correct.png' alt='Correct!' class='correct' />");
    //$(div).children('img').attr('src','correct.png');
}