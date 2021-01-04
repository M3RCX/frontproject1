$(document).ready(function(){
    $("#btnLogin").click(function(){
        var displaySucess = $("#alertSucess")
        var displayFail = $("#alertFail")
        var login = $("#login")
        if($("#email").val() == "" || $("#password").val() == ""){
            $(displaySucess).css("display", "none")
            $(displayFail).css("display", "block")
            $(login).css("margin-top", "0")
        }
    });   
    
    $("#btnLogin").click(function (){
        var displaySucess = $("#alertSucess")
        var displayFail = $("#alertFail")
        var login = $("#login")
        if($("#email").val() != "" && $("#password").val() != "")  {
            $(displaySucess).css("display", "block")
            $(displayFail).css("display", "none")
            $(login).css("margin-top", "0")
            
        }

    })
});

