// jQuery runs after document has loaded

$(document).ready(function() {

    // jQuery methods go here...

    //this is button to toggle hide/show for paragrahs atm
    $("button").click(function() {
        $("p").toggle();
    });
});