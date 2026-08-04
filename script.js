let message = document.getElementById("copyMsg");

function copydiscord()
{
    navigator.clipboard.writeText("peaqnut");
    
    message.innerHTML = "Copied to Clipboard";
    setTimeout(function() { message.innerHTML = ""; }, 1500) // theres probably a much better way i just dont know how
}