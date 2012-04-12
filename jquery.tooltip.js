
// base on http://www.queness.com/post/92/create-a-simple-cssjavascript-tooltip-with-jquery

$(document).ready(function() {
 
    //Select all anchor tag with rel set to tooltip
    $(document).on({
        mouseover: function(e) {

            //Grab the title attribute's value and assign it to a variable
            var tip = $(this).attr('title');    

            //Remove the title attribute's to avoid the native tooltip from the browser
            $(this).attr('title','');

            //Append the tooltip template and its value
            $(this).append('<div id="tooltip"><div class="tipBody">' + tip + '</div></div>');     

            //Set the X and Y axis of the tooltip
            $('#tooltip').css('top', e.pageY + 10 );
            $('#tooltip').css('left', e.pageX + 20 );

        },
        mousemove: function(e) {

            //Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
            $('#tooltip').css('top', e.pageY + 10 );
            $('#tooltip').css('left', e.pageX + 20 );

        },
        mouseout: function() {

            //Put back the title attribute's value
            $(this).attr('title',$('.tipBody').html());

            //Remove the appended tooltip template
            $(this).children('div#tooltip').remove();

        }
    }, 'a[rel=tooltip]');

});