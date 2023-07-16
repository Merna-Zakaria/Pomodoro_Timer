const actions = {
  start: document.getElementById("start"),
  pause: document.getElementById("pause"),
  reset: document.getElementById("reset"),
  watch: document.getElementById("watch"),
  stopWatch: document.getElementById("stopWatch"),
};

let sec = 0,
  min = 0,
  hrs = 0,
  startWork,
  countWork,
  startBreak,
  countBreak,
  stopWatchValue,
  intervalValue;

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let time = h + ":" + m + ":" + s;
  actions.watch.innerText = time;
}
setInterval(showTime, 1000);

actions.start.addEventListener("click", onStart);
actions.pause.addEventListener("click", onPause);
actions.reset.addEventListener("click", onReset);

function add() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
  stopWatchValue =
    (hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") +
    ":" +
    (min ? (min > 9 ? min : "0" + min) : "00") +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  actions.stopWatch.textContent = stopWatchValue;
}

function onStart() {
  intervalValue = setInterval(add, 1000);
}

function onPause() {
  clearInterval(intervalValue);
}

function onReset() {
  clearInterval(intervalValue);
  actions.stopWatch.textContent = "00 : 00 : 00";
  sec = 0;
}
