function startTimer(duration, displayMinutesFront, displayMinutesBack, displaySecondsFront, displaySecondsBack) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayMinutesFront.textContent = minutes.toString().slice(0, 1);
        displayMinutesBack.textContent = minutes.toString().slice(1);
        displaySecondsFront.textContent = seconds.toString().slice(0, 1);
        displaySecondsBack.textContent = seconds.toString().slice(1);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 30,
        displayMinutesFront = document.querySelector('.minutes-front');
        displayMinutesBack = document.querySelector('.minutes-back');
        displaySecondsFront = document.querySelector('.seconds-front');
        displaySecondsBack = document.querySelector('.seconds-back');
    startTimer(fiveMinutes, displayMinutesFront, displayMinutesBack, displaySecondsFront, displaySecondsBack);
};
