let start;
let timer_id;
document.getElementById('start_stop').addEventListener('click', function () {
  if (this.innerHTML === 'START') {
    start = new Date();
    timer_id = setInterval(goTimer, 10);

    // STOPボタンにする
    this.innerHTML = 'STOP';
    this.classList.remove('btn-primary');
    this.classList.add('btn-danger');
  } else {
    clearInterval(timer_id);
    // STARTボタンに戻す
    this.innerHTML = 'START';
    this.classList.remove('btn-danger');
    this.classList.add('btn-primary');
  }


});

let addZero = function (value) {
  if (value < 10) {
    value = '0' + value;
  }
  return value;
}

let goTimer = function () {
  let now = new Date();

  let milli = now.getTime() - start.getTime();
  let seconds = Math.floor(milli / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds - minutes * 60;
  minutes = minutes - hours * 60;

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
}