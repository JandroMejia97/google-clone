document.documentElement.addEventListener('keyup',(evt)=>{
	if (evt.which == 13) {
		searchValue();
	}
})

function searchValue() {
    const voiceText = document.getElementById('searchValue').value;
	if (voiceText.length > 0)
        window.location.href = `https://google.com/search?q=${voiceText}`;
}

function luck() {
    window.location.href = 'https://www.google.com/doodles';
}