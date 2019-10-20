$(document).ready(function() 
{
    $("#phone").mask("+7 (999) 999-99-99");
});
function show ()
{
   
    var elem = document.getElementById()
    if (elem)
        elem.style.display="block";      
}
function show (details)
{
    var elemm=document.getElementById(details);
    if(elemm.style.display=="block")
    {
        elemm.style.display="none";
    }
    else
    {
        elemm.style.display="block";
    }
}