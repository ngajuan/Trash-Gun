$(function() {
    //Stating the variables
    var position = $("#cannon").position(),
        mouseX, mouseY, cannonX, cannonY, degree;
        
    //Finding the center of the cannon (Coordinate)
    var cx = $("#cannon").width() / 2;
    var cy = $("#cannon").height() / 2;
        
    var pos = $("#cannon").offset();
    cx += pos.left;
    cy += pos.top;
        
    //Calculating the angle from the cannon to the mouse cursor
    $("body").mousemove(function(event) {
        mouseX = event.offsetX;
        mouseY = event.offsetY;
            
        var theta = Math.atan(((mouseY - cy)/(mouseX - cx)));
        $("#cannon").css("transform","rotate(" + theta + "rad)");
    });
    
    //Shooting the garbage
    $("body").mousemove(function(event) {
        $("body").click(function() {
            
        });
    });
});