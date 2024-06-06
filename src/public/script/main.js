$(document).ready(function () {
  $("#agentLoginContainer").hide();
  $("#adminLoginContainer").hide();
  $("#supLoginContainer").hide();
  $("#misLoginContainer").hide();

  /* Login Box Title Manipulation */

  $("#agentSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("Agent");
  });
  $("#adminSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("Administrator");
  });
  $("#supSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("Supervisor");
  });
  $("#misSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("MIS");
  });

  /* Login Box Manipulation */

  $("#agentSelectorImage").on("click", function () {
    $("#loginSelectorContainer").slideUp(500);
    $("#agentLoginContainer").slideDown(500);
  });

  $("#adminSelectorImage").on("click", function () {
    $("#loginSelectorContainer").slideUp(500);
    $("#adminLoginContainer").slideDown(500);
  });

  $("#supSelectorImage").on("click", function () {
    $("#loginSelectorContainer").slideUp(500);
    $("#supLoginContainer").slideDown(500);
  });

  $("#misSelectorImage").on("click", function () {
    $("#loginSelectorContainer").slideUp(500);
    $("#misLoginContainer").slideDown(500);
  });
  $(".back-button").on("click", function () {
    $("#loginSelectorContainer").slideDown(500);
    $("#agentLoginContainer").slideUp(500);
    $("#adminLoginContainer").slideUp(500);
    $("#supLoginContainer").slideUp(500);
    $("#misLoginContainer").slideUp(500);
    $("#changeLoginHeading").text("Login As");
  });

  $("#agentLoginContainer").hide();
  $("#adminLoginContainer").hide();
  $("#supLoginContainer").hide();
  $("#misLoginContainer").hide();
  $("#otpform").hide();
  $("#regsuccessmsg").hide();
  $("#loginotpform").hide();
  $("#logsuccessmsg").hide();
  $("#frgtotpform").hide();
  $("#frgtsuccessmsg").hide();
  $("#resetsuccessmsg").hide();
  $("#cwpsipusrsec").hide();
  $("#cwpsipregsec").hide();

  /* Callex Web Panel Manipulation */
  $("#cwpsipusrbtn").on("click", function () {
    $("#cwpsipusrsec").fadeIn(500);
    $("#cwpmainsec").fadeOut(50);
    $("#cwpsipregsec").fadeOut(50);
  });
  $("#cwpsipreg").on("click", function () {
    $("#cwpsipusrsec").fadeOut(50);
    $("#cwpmainsec").fadeOut(50);
    $("#cwpsipregsec").fadeIn(500);
  });
  $("#cwpmainbtn").on("click", function () {
    $("#cwpsipusrsec").fadeOut(50);
    $("#cwpmainsec").fadeIn(500);
    $("#cwpsipregsec").fadeOut(50);
  });
  /* Callex Web Panel End Manipulation */

  /* Login Box Title Manipulation */

  $("#agentSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("Agent");
  });
  $("#adminSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("Administrator");
  });
  $("#supSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("Supervisor");
  });
  $("#misSelectorImage").on("click", function () {
    $("#changeLoginHeading").text("MIS");
  });

  /* Login Box Manipulation */

  $("#regbtn").on("click", function () {
    $("#regform").slideUp(800);
    $("#otpform").slideDown(800);
  });

  $("#regsubmitbtn").on("click", function () {
    $("#otpform").slideUp(800);
    $("#regsuccessmsg").slideDown(800);
  });

  $("#logmainbtn").on("click", function () {
    $("#loginsectmain").slideUp(800);
    $("#loginotpform").slideDown(800);
  });

  $("#logsubmitbtn").on("click", function () {
    $("#loginotpform").slideUp(800);
    $("#logsuccessmsg").slideDown(800);
  });

  $("#frgtpassbtn").on("click", function () {
    $("#frgtpassform").slideUp(800);
    $("#frgtotpform").slideDown(800);
  });

  $("#frgtotpsubmitbtn").on("click", function () {
    $("#frgtotpform").slideUp(800);
    $("#frgtsuccessmsg").slideDown(800);
  });

  $("#resetpassbtn").on("click", function () {
    $("#resetpassform").slideUp(800);
    $("#resetsuccessmsg").slideDown(800);
  });

  $(".back-button").on("click", function () {
    $("#loginSelectorContainer").slideDown(500);
    $("#agentLoginContainer").slideUp(500);
    $("#adminLoginContainer").slideUp(500);
    $("#supLoginContainer").slideUp(500);
    $("#misLoginContainer").slideUp(500);
    $("#changeLoginHeading").text("Login As");
  });
});
