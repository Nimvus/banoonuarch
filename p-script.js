const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keyCheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [],
audio = new Audio("keys/a.wav");

const playTune = (key) => {
    audio.src = `keys/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() =>{
     clickedKey.classList.remove("active");   
    }, 150);
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}
const showhideKeys = () => { 
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}



const pressedKey = (e) => {
    if(allkeys.includes(e.key))playTune(e.key);
}

keyCheckbox.addEventListener("click", showhideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);