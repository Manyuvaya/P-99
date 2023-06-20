var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    speak();
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking Your Selfie In 5 Seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
    Webcam.attach(camera)
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
})
camera=document.getElementById("camera")

