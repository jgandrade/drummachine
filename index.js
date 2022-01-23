let drumsArr = document.querySelectorAll(".drum");

for (let i = 0; i < drumsArr.length; i++) {
    drumsArr[i].addEventListener('click', e => {
        playSound(e.target);
        activatedButton(e.target.innerText);   
    });
}

document.addEventListener('keydown', e => {
    playSound(e);
    activatedButton(e.key);
});

function playSound(drum) {
    if (drum.innerText === 'w' || drum.key === 'w') {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    } else if (drum.innerText === 'a' || drum.key === 'a') {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    } else if (drum.innerText === 's' || drum.key === 's') {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    } else if (drum.innerText === 'd' || drum.key === 'd') {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    } else if (drum.innerText === 'j' || drum.key === 'j') {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    } else if (drum.innerText === 'k' || drum.key === 'k') {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    } else if (drum.innerText === 'l' || drum.key === 'l') {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    } else return;
}

function activatedButton(button){
    let activate = document.querySelector(`.${button}`);
    activate.classList.add("keypress");
    setTimeout(()=>activate.classList.remove("keypress"),200);
    
}