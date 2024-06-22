$(document).ready(function () {
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
  $("#listselectioncol").hide();
  $("#agentwisedialingcol").hide();
  $("#progressivedialingseccol").hide();
  $("#otdahdi").hide();
  $("#ottechnology").hide();
  $("#otipadd").hide();
  $("#otaccdetails").hide();
  $("#listinactdialsec").hide();
  $("#listdialgenlistsec").hide();
  $("#listleadsrchsec").hide();
  /* List Popup Manipulation */
  $("#listaltdialsec").hide();
  /* Callback Assignment Table Manipulation */
  $("#cbamulticallsec").hide();
  $("#cbadistricallsec").hide();
  $("#cbasingcalltog").prop("checked", true);
  /* Auto Email Sec Manipulation */
  $("#emaillistsec").hide();
  $("#aesdedsec1").hide();
  $("#aesdedsec2").hide();
  /* Inbound Route Manipulation */
  $("#inbrthdndiv1").hide();
  $("#inbrthdndiv2").hide();
  $("#inbrthdndiv3").hide();
  $("#usrhdnfldone").hide();
  $("#usrhdnfldtwo").hide();
  $("#usrhdnallchkbx").hide();
  $("#supervisor").hide();

  /* User Page Hidden Two Fields Manipulation */
  $("#alwremlog").click(function () {
    if ($(this).is(":checked")) {
      $("#usrhdnfldone").show();
      $("#usrhdnfldtwo").show();
    } else {
      $("#usrhdnfldone").hide();
      $("#usrhdnfldtwo").hide();
    }
  });
  /* User Page Hidden Two Fields Manipulation */

  /* User Page Hidden Sections Manipulation */
  $("#usrpgslctusrtype").change(function () {
    if ($("#supervisorselctopt").is(":selected")) {
      $("#supervisor").show();
      $("#usrhdnsecone").hide();
      $("#usrhdnsectwo").hide();
      $("#usrhdnallchkbx").show();
      $("#usrsyssetsec").show();
      $("#usrmtsec").show();
    } else if ($("#misselectopt").is(":selected")) {
      $("#supervisor").show();
      $("#usrhdnsecone").hide();
      $("#usrhdnsectwo").hide();
      $("#usrsyssetsec").hide();
      $("#usrmtsec").hide();
      $("#usrhdnallchkbx").show();
    } else {
      $("#usrhdnsecone").show();
      $("#usrhdnsectwo").show();
      $("#usrhdnallchkbx").hide();
    }
  });
  /* User Page Hidden Sections Manipulation */

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

  /* Callex List Page Manipulation */
  $("#listiabtn").on("click", function () {
    $("#listinactdialsec").show();
    $("#listactdialsec").hide();
    $("#listdialgenlistsec").hide();
    $("#listleadsrchsec").hide();
  });
  $("#listdgbtn").on("click", function () {
    $("#listinactdialsec").hide();
    $("#listactdialsec").hide();
    $("#listdialgenlistsec").show();
    $("#listleadsrchsec").hide();
  });
  $("#listlsbtn").on("click", function () {
    $("#listinactdialsec").hide();
    $("#listactdialsec").hide();
    $("#listdialgenlistsec").hide();
    $("#listleadsrchsec").show();
  });
  $("#listdabtn").on("click", function () {
    $("#listinactdialsec").hide();
    $("#listactdialsec").show();
    $("#listdialgenlistsec").hide();
    $("#listleadsrchsec").hide();
  });
  /* Callex List Page End Manipulation */

  /* Callex List Page Manipulation */
  $("#aeelbtn").on("click", function () {
    $("#emaillistsec").show();
    $("#emailsettingsec").hide();
  });
  $("#aeesbtn").on("click", function () {
    $("#emaillistsec").hide();
    $("#emailsettingsec").show();
  });
  /* Callex List Page End Manipulation */

  /* Callex List Page Popup Manipulation */
  $("#listaltdialtog").click(function () {
    if ($(this).is(":checked")) {
      $("#listaltdialsec").show();
    } else {
      $("#listaltdialsec").hide();
    }
  });
  /* Callex List Page Popup Manipulation */

  /* Callex Auto Email Popup Manipulation */
  $("#aesdedtog").click(function () {
    if ($(this).is(":checked")) {
      $("#aesdedsec1").show();
      $("#aesdedsec2").show();
    } else {
      $("#aesdedsec1").hide();
      $("#aesdedsec2").hide();
    }
  });
  /* Callex Auto Email Popup Manipulation */

  /* Callex Inbound Route sec Manipulation */
  $("#isscheduletog").click(function () {
    if ($(this).is(":checked")) {
      $("#inbrthdndiv1").show();
      $("#inbrthdndiv2").show();
      $("#inbrthdndiv3").show();
    } else {
      $("#inbrthdndiv1").hide();
      $("#inbrthdndiv2").hide();
      $("#inbrthdndiv3").hide();
    }
  });
  /* Callex Inbound Route SEc Manipulation */

  /* Callex Inbound Route Section Manipulation */
  $("#inbrtaddsecbtnt").click(function () {
    $("#inbrtaddaftsec").append(
      '<div class="row g-3" id="inbrtadedsecnw">' +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Start Time:</label>' +
        '<input type="time" class="adlrinput" placeholder="Search Process" style="width: 100%;">' +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Start Time:</label>' +
        '<input type="time" class="adlrinput" placeholder="Search Process" style="width: 100%;">' +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Application Type:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Select Option</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Application Sub Type:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Select Option</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<div class="inbtrnksvsec" style="display: flex;">' +
        '<P class="cprcsactvpara" style="margin-top: 3px;">Save?:</P>' +
        '<div class="cl-toggle-switch">' +
        '<label class="cl-switch">' +
        '<input type="checkbox">' +
        "<span></span>" +
        "</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="col-lg">' +
        '<button class="inbtrnkdelbtn" id="inbrtdeletsecbtn">- Del</button>' +
        "</div>" +
        "</div>"
    );
  });
  $("body").on("click", "#inbrtdeletsecbtn", function () {
    $(this).parents("#inbrtadedsecnw").remove();
  });
  /* Callex Inbound Route Section Manipulation */

  /* Callex Inbound Route Week Section Manipulation */
  $("#inbrtadddaysecbtnt").click(function () {
    $("#inbrtadddayaftsec").append(
      '<div class="row g-3" id="inbrtadddaysec" style="margin-top: 10px;">' +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Select Day:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Select</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Start Time:</label>' +
        '<input type="time" class="adlrinput" placeholder="Search Process" style="width: 100%;">' +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Start Time:</label>' +
        '<input type="time" class="adlrinput" placeholder="Search Process" style="width: 100%;">' +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Application Type:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Select Option</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Application Sub Type:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Select Option</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<div class="inbtrnksvsec" style="display: flex;">' +
        '<P class="cprcsactvpara" style="margin-top: 3px;">Save?:</P>' +
        '<div class="cl-toggle-switch">' +
        '<label class="cl-switch">' +
        '<input type="checkbox">' +
        "<span></span>" +
        "</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="col-lg">' +
        '<button class="inbtrnkdelbtn" id="inbrtdeletdaybtn">- Del</button>' +
        "</div>" +
        "</div>"
    );
  });
  $("body").on("click", "#inbrtdeletdaybtn", function () {
    $(this).parents("#inbrtadddaysec").remove();
  });
  /* Callex Inbound Week Section Manipulation */

  /* Callex Inbound Route Holiday Section Manipulation */
  $("#inbrtaddholisecbtnt").click(function () {
    $("#inbrtaddholiaftsec").append(
      '<div class="row g-3" id="inbrtaddholisec" style="margin-top: 0px;">' +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Start Date:</label>' +
        '<input type="date" class="adlrinput" placeholder="Search Process" style="width: 100%;">' +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Application Type:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Select Option</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Application Sub Type:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Select Option</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<div class="inbtrnksvsec" style="display: flex;">' +
        '<P class="cprcsactvpara" style="margin-top: 3px;">Save?:</P>' +
        '<div class="cl-toggle-switch">' +
        '<label class="cl-switch">' +
        '<input type="checkbox">' +
        "<span></span>" +
        "</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="col-lg">' +
        '<button class="inbtrnkdelbtn" id="inbrtdeletholisecbtn">- Del</button>' +
        "</div>" +
        "</div>"
    );
  });
  $("body").on("click", "#inbrtdeletholisecbtn", function () {
    $(this).parents("#inbrtaddholisec").remove();
  });
  /* Callex Inbound Holiday Section Manipulation */

  /* Callex CRM Field Section Manipulation */
  $("#crmaddfieldsecbtn").click(function () {
    $("#crmaddfieldaftsec").append(
      '<div class="row g-3" id="crmaddfieldsec" style="margin-top: 0px;">' +
        '<div class="col-lg-1">' +
        '<div class="" style="display: flex;margin-top: 30px;">' +
        '<P class="cprcsactvpara" style="margin-top: 3px;">Edit?:</P>' +
        '<div class="cl-toggle-switch">' +
        '<label class="cl-switch">' +
        '<input type="checkbox">' +
        "<span></span>" +
        "</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Lable:</label>' +
        '<input type="text" class="adlrinput" placeholder="Enter here" style="width: 100%;">' +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Select Type:</label>' +
        '<select class="form-select nwslctmenu" aria-label="Default select example">' +
        "<option selected>Options</option>" +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        "</select>" +
        "</div>" +
        '<div class="col-lg">' +
        '<label class="adlrinptlbl" for="">Add Options:</label>' +
        '<input type="text" class="adlrinput" placeholder="Enter Here" style="width: 100%;">' +
        "</div>" +
        '<div class="col-lg">' +
        '<button class="inbtrnkdelbtn" id="crmdelfieldsecbtn">- Del</button>' +
        "</div>" +
        "</div>"
    );
  });
  $("body").on("click", "#crmdelfieldsecbtn", function () {
    $(this).parents("#crmaddfieldsec").remove();
  });
  /* Callex CRM Field Section Manipulation */

  /* Callex Callback Assignment Manipulation */
  $("#cbasingcalltog").click(function () {
    if ($(this).is(":checked")) {
      $("#cbasingcallsec").show();
      $("#cbamulticallsec").hide();
      $("#cbadistricallsec").hide();
      $("#cbamulticalltog").prop("checked", false);
      $("#cbadistcalltog").prop("checked", false);
    } else {
      $("#cbasingcallsec").hide();
    }
  });
  $("#cbamulticalltog").click(function () {
    if ($(this).is(":checked")) {
      $("#cbamulticallsec").show();
      $("#cbasingcallsec").hide();
      $("#cbadistricallsec").hide();
      $("#cbasingcalltog").prop("checked", false);
      $("#cbadistcalltog").prop("checked", false);
    } else {
      $("#cbamulticallsec").hide();
    }
  });
  $("#cbadistcalltog").click(function () {
    if ($(this).is(":checked")) {
      $("#cbadistricallsec").show();
      $("#cbasingcallsec").hide();
      $("#cbamulticallsec").hide();
      $("#cbasingcalltog").prop("checked", false);
      $("#cbamulticalltog").prop("checked", false);
    } else {
      $("#cbadistricallsec").hide();
    }
  });
  /* Callex Callback Assignment END Manipulation */

  /* Callex Edit Process Manipulation */
  $("#inboundmanualoutdialli").on("click", function () {
    $("#progressivedialingseccol").hide();
    $("#agentwisedialingcol").hide();
    $("#listselectioncol").hide();
  });
  $("#outboundpredictiveli,#blendedpredictiveli").on("click", function () {
    $("#listselectioncol").show();
    $("#progressivedialingseccol").hide();
    $("#agentwisedialingcol").hide();
  });
  $("#outboundpreviewli,#blendedpreviewli").on("click", function () {
    $("#agentwisedialingcol").show();
    $("#listselectioncol").show();
    $("#progressivedialingseccol").hide();
  });
  $("#outboundprogressive,#blendedprogressive").on("click", function () {
    $("#progressivedialingseccol").show();
    $("#agentwisedialingcol").show();
    $("#listselectioncol").show();
  });
  /* Callex Edit Process Manipulation End */

  /* Callex Outbound Trunk Manipulation */
  $("#otpstn").on("click", function () {
    $("#otdahdi").show();
    $("#ottechnology").show();
    $("#otipadd").hide();
    $("#otaccdetails").hide();
  });
  $("#otvoip").on("click", function () {
    $("#otdahdi").hide();
    $("#ottechnology").hide();
    $("#otipadd").hide();
    $("#otaccdetails").show();
  });
  $("#otdirectip").on("click", function () {
    $("#otdahdi").hide();
    $("#ottechnology").hide();
    $("#otipadd").show();
    $("#otaccdetails").hide();
  });
  /* Callex Outbound Trunk Manipulation End */
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
