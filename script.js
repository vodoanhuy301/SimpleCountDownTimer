const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const musicElement = document.getElementById('musicTrack');
const titleElement = document.querySelector('h1');
const clockElement = document.querySelector('.container_clock');
const settingTimeElement = document.getElementById('timeSet');



document.getElementById("btn-1").addEventListener("click", function(){
    changeTime();
});
setInterval(countDown, 1000);
var setTime = document.getElementById('timeSet').value;
function countDown() {
    if (setTime){
        const newDate = new Date(setTime);
        const currentDate = new Date();
        const totalSeconds = (newDate - currentDate) /1000;
        console.log(totalSeconds);
        if (totalSeconds > 0){
            const days = Math.floor(totalSeconds/3600/24);
            const hours = Math.floor(totalSeconds/3600) % 24;
            const minutes = Math.floor(totalSeconds/60) %60;
            const seconds = Math.floor(totalSeconds) % 60;
        
        
            daysElement.innerHTML = formatTime(days);
            hoursElement.innerHTML = formatTime(hours);
            minutesElement.innerHTML = formatTime(minutes);
            secondsElement.innerHTML = formatTime(seconds);
        }   
        else  
            {
            titleElement.innerText = "Yeah!!!";
            clockElement.style.display = "none";
            playMusic();
            }
    }
    
}
function playMusic() {
    musicElement.play();
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
function changeTime(){
    setTime = document.getElementById('timeSet').value;
}
