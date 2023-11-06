setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Tirando sua selfie em 10 segundos";
    var utterThis = new SpeechSynthesesUtterance(speak_data);
    SpeechSynthesis.speak(utterThis);

}, 5000)

function take_snapshot()
{
    console.log (img_id);

    webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri'"/>';
        }
    })
}