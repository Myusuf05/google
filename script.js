$(document).ready(function(){
    if(performance.navigation.type == 2){
        location.reload(true);
     }
    typeWriter() 
       
    $("#searchBtn").click(function(){
        var txtBox = document.getElementById('searchInput').value.length;
        if (txtBox < 1) {
            var alertVar = "Cannot search. Search box is empty. Please type something.";
            $("#alertText").text(alertVar);
        }
        else{
            var url = 'https://www.google.com/search?q='+ document.getElementById('searchInput').value;
            window.open(url,"_self");
            var alertVar = "";
            $("#alertText").text(alertVar);
        }
    });

    $("#copyBtn").click(function(){
        if (document.getElementById('searchInput').value.length > 0){
            var encodedUrl = window.location.origin + window.location.pathname + "?input=" + encodeURIComponent(document.getElementById('searchInput').value);
            navigator.clipboard.writeText(encodedUrl);
            var alertVar = "Link copied to clipboard.";
            $("#alertText").text(alertVar);
        }
        else{
            var alertVar = "Cannot copy link. Search box is empty. Please type something.";
            $("#alertText").text(alertVar);
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
        console.log("empty");
    }
    else{
        
        var textLength = txt.length;
        if (i < textLength) {
            document.getElementById("searchInput").value += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}
