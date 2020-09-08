let microAceptado = false;
let modal = document.getElementsByClassName('modal-voice-search')[0];
let resultText = document.getElementsByClassName('voice-search-result-text')[0];
let recognition =  null;
navigator.permissions.query(
    { name: 'microphone' }
).then(function(permissionStatus){

    console.log(permissionStatus.state); // granted, denied, prompt
    microAceptado = permissionStatus.state == 'granted';

    permissionStatus.onchange = function(){
        microAceptado = this.state == 'granted';
        console.log("Permission changed to " + this.state);
    }

})

function voiceSearchModalOpen(){
    if (microAceptado == false)
        window.SpeechRecognition = window?.webkitSpeechRecognition || window?.SpeechRecognition;
    if (!'SpeechRecognition' in window)
        alert('No se pudo iniciar SpeechRecognition API')
    else {
        modal.classList.remove('hide-modal');
        modal.classList.remove('hide-modal-transition');
        modal.classList.add('show-modal');
        voiceRecognition();
    }
}


function voiceSearchModalClose(){
    modal.classList.remove('show-modal');
    modal.classList.add('hide-modal-transition');
    if (recognition)
        recognition.stop();
	setTimeout(()=>{
    	modal.classList.add('hide-modal');
    }, 250);
}

function voiceRecognition(){
    resultText.innerHTML = 'Habla ahora.';
    recognition = new window.SpeechRecognition();

    recognition.onresult = (event) => {
        let voiceText = event.results[0][0].transcript;
        resultText.innerHTML = voiceText;
        console.log(voiceText)
        recognition.stop();
        setTimeout(()=>{
            window.open('https://google.com/search?q='+voiceText);
        },1800)
    }
    recognition.start();
}