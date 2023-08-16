let turnOnStopButton=document.getElementById("stopButton");
let turnOnReadyButton=document.getElementById("readyButton");
let turnOnGoButton=document.getElementById("goButton");
let stopLight=document.getElementById("stopLight");
let readyLight=document.getElementById("readyLight");
let goLight=document.getElementById("goLight");

console.log(stopLight);
function stopStyling(){
    turnOnStopButton.style.backgroundColor="#cf1124";
    stopLight.style.backgroundColor="#cf1124";
    
    turnOnReadyButton.style.backgroundColor="#1f1d41";
    readyLight.style.backgroundColor="#4b5069";
    
    turnOnGoButton.style.backgroundColor="#1f1d41";
    goLight.style.backgroundColor="#4b5069";
    
}
function readyStyling(){
 turnOnReadyButton.style.backgroundColor="#f7c948"; 
 readyLight.style.backgroundColor="#f7c948";
 
  turnOnStopButton.style.backgroundColor="#1f1d41";
  stopLight.style.backgroundColor="#4b5069";
  
   turnOnGoButton.style.backgroundColor="#1f1d41";
    goLight.style.backgroundColor="#4b5069";
}
function goStyling(){
    turnOnGoButton.style.backgroundColor="#199473";
    goLight.style.backgroundColor="#199473";
    
    turnOnStopButton.style.backgroundColor="#1f1d41";
    stopLight.style.backgroundColor="#4b5069";
    
    turnOnReadyButton.style.backgroundColor="#1f1d41";
    readyLight.style.backgroundColor="#4b5069";
}
