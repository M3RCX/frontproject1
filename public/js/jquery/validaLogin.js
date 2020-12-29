$(document).ready(function(){
    $("#login").click(function(){
        var displaySucess = $("#alertSucess")
        var displayFail = $("#alertFail")
        if($("#email").val() == "" || $("#password").val() == ""){
            $(displaySucess).css("display", "none")
            $(displayFail).css("display", "block")
        }
    });   
    
    $("#login").click(function (){
        var displaySucess = $("#alertSucess")
        var displayFail = $("#alertFail")
        if($("#email").val() != "" && $("#password").val() != "")  {
            $(displaySucess).css("display", "block")
            $(displayFail).css("display", "none")
            
        }

    })
});

