// wait for content to load
document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('keydown', (e) => {
        let keyPressed = e.keyCode;
        console.log(keyPressed)
        const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
        if (!audio) return;
        console.log(audio);
        audio.play();
        
    })

})