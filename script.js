const daysElement = $("#days");
const hoursElement = $("#hours");
const minutesElement = $("#minutes");
const secondsElement = $("#seconds");
const musicElement = $("#musicTrack");
const titleElement = $("h1");
const clockElement = $(".container_clock");
const settingTimeElement = $("#timeSet");

$("#btn-1").click(function () {
  changeTime();
});
setInterval(countDown, 1000);
var setTime = $("#timeSet").val();
function countDown() {
  if (setTime) {
    const newDate = new Date(setTime);
    const currentDate = new Date();
    const totalSeconds = (newDate - currentDate) / 1000;
    if (totalSeconds > 0) {
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      daysElement.html(formatTime(days));
      hoursElement.html(formatTime(hours));
      minutesElement.html(formatTime(minutes));
      secondsElement.html(formatTime(seconds));
    } else {
      titleElement.text("Yeah!!!");
      clockElement.css("display", "none");
      playMusic();
    }
  }
}
function playMusic() {
  musicElement.play();
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
function changeTime() {
  setTime = $("#timeSet").val();
}
