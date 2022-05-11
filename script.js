$(document).ready(function(){
    if(performance.navigation.type == 2){
        location.reload(true);
     }
    

    var input = document.getElementById('searchInput');
    input.focus();
    input.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            document.getElementById("searchBtn").click();
        }
    });

    typeWriter()
       
    $("#searchBtn").click(function(){
        var txtBox = document.getElementById('searchInput').value.length;
        if (txtBox < 1) {
            alertText("noSearchValue")
        }
        else{
            var url = 'https://www.google.com/search?q='+ document.getElementById('searchInput').value;
            window.open(url,"_self");
            alertText("clearField")
        }
    });

    $("#copyBtn").click(function(){
        if (document.getElementById('searchInput').value.length > 0){
            var encodedUrl = window.location.origin + window.location.pathname + "?input=" + encodeURIComponent(document.getElementById('searchInput').value);
            navigator.clipboard.writeText(encodedUrl);
            alertText("copied")
        }
        else{
            alertText("nolink")
        }
    });
});

const urlParams = new URLSearchParams(window.location.search);
const inputText = urlParams.get('input');
var i = 0;
var txt = inputText;
var speed = 200;



function typeWriter() {
    if (txt == null) {
        var textLength = 0;
    }
    else{
        
        var textLength = txt.length;
        if (i < textLength) {
            document.getElementById("searchInput").value += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }    
        else{
            alertText("done")
        }    
    }
    
}



function alertText(errorCode){
    if (errorCode == "noSearchValue"){
        var alertVar = "Cannot search. Search box is empty. Please type something.";
    }
    else if (errorCode == "nolink"){
        var alertVar = "Cannot copy link. Search box is empty. Please type something.";
    }
    else if (errorCode == "clearField"){
        var alertVar = "";
    }
    else if (errorCode == "copied"){
        var alertVar = "Link copied to clipboard.";
    }
    else if (errorCode == "done"){
        var alertVar = "Press Enter key or click on Google Search.";
    }
    $("#alertText").text(alertVar);
}
