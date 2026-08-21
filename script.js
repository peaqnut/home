let message = document.getElementById("copyMsg");
const video = document.getElementById('bgVid');
const source = document.getElementById('vidSource');

function copydiscord()
{
    navigator.clipboard.writeText("peaqnut");
    
    message.innerHTML = "Copied to Clipboard";
    setTimeout(function() { message.innerHTML = ""; }, 1500) // theres probably a much better way
}

function theme(str)
{
    switch(str)
    {
        case "blue":
        {
            source.src = "assets/0000-0288.mp4";
            video.load();
            document.documentElement.style.setProperty("--bgColor", "rgb(70, 77, 110)");
            document.documentElement.style.setProperty("--Color", "rgb(106, 113, 150)");
            document.documentElement.style.setProperty("--hoverColor", "rgb(85, 91, 129)");
            document.documentElement.style.setProperty("--strokeColor", "rgb(133, 137, 160)");
            document.documentElement.style.setProperty("--textColor", "#bfc4eb");
            break;
        }
        case "red":
        {
            source.src = "assets/0001-0250.mp4";
            video.load();
            document.documentElement.style.setProperty("--bgColor", "rgb(110, 70, 70)");
            document.documentElement.style.setProperty("--Color", "rgb(150, 106, 106)");
            document.documentElement.style.setProperty("--hoverColor", "rgb(129, 85, 85)");
            document.documentElement.style.setProperty("--strokeColor", "rgb(160, 133, 133)");
            document.documentElement.style.setProperty("--textColor", "#ebbfbf");
            break;
        }
    }
}