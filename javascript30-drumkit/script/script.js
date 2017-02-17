/**
 * Created by Mamun Morshed on 2/14/2017.
 */

function playSound(e){
    const audio = document.querySelector("audio[data-key=\""+e.keyCode+"\"]");
    if (!audio) return;
    const key = document.querySelector(".key[data-key=\""+e.keyCode+"\"]");
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
function dimKeyLight(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
for( let i = 0; i < keys.length; i++ ){keys[i].addEventListener('transitionend', dimKeyLight);}

window.addEventListener('keydown', playSound);