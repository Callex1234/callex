$(document).ready(function(){
    
    $("#agentLoginContainer").hide();
    $("#adminLoginContainer").hide();
    $("#supLoginContainer").hide();
    $("#misLoginContainer").hide();

    /* Login Box Title Manipulation */

    $("#agentSelectorImage").on('click', function(){
        $("#changeLoginHeading").text("Agent");
    });
    $("#adminSelectorImage").on('click', function(){
        $("#changeLoginHeading").text("Administrator");
    });
    $("#supSelectorImage").on('click', function(){
        $("#changeLoginHeading").text("Supervisor");
    });
    $("#misSelectorImage").on('click', function(){
        $("#changeLoginHeading").text("MIS");
    });

    /* Login Box Manipulation */

    $("#agentSelectorImage").on('click', function(){
        $("#loginSelectorContainer").slideUp(500);
        $("#agentLoginContainer").slideDown(500);
    });
    
    $("#adminSelectorImage").on('click', function(){
        $("#loginSelectorContainer").slideUp(500);
        $("#adminLoginContainer").slideDown(500);
    });
    
    $("#supSelectorImage").on('click', function(){
        $("#loginSelectorContainer").slideUp(500);
        $("#supLoginContainer").slideDown(500);
    });
    
    $("#misSelectorImage").on('click', function(){
        $("#loginSelectorContainer").slideUp(500);
        $("#misLoginContainer").slideDown(500);
    });
    $(".back-button").on('click', function(){
        $("#loginSelectorContainer").slideDown(500);
        $("#agentLoginContainer").slideUp(500);
        $("#adminLoginContainer").slideUp(500);
        $("#supLoginContainer").slideUp(500);
        $("#misLoginContainer").slideUp(500);
        $("#changeLoginHeading").text("Login As");
    });
  
}); 