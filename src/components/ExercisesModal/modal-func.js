const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
  // resetAndStopTimer()
};

// function resetAndStopTimer() {
//   clearInterval(interval);
//   elapsedTime = 0;
//   timerPathOverlay.style.strokeDashoffset = fullDashArray;
//   document.getElementById('startBtn').innerHTML = '▷';
//   updateTimer();
// }

span.onclick = function () {
  modal.style.display = 'none';
  // resetAndStopTimer();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    // resetAndStopTimer();
  }
};

document.onkeydown = function (event) {
  if (event.key === 'Escape') {
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  let timerDuration = 5 * 60;
  let elapsedTime = 0;
  let interval;
  const timerPathOverlay = document.querySelector('.timer-path-overlay');
  const fullDashArray = parseFloat(
    timerPathOverlay.getAttribute('stroke-dasharray')
  );

  document.getElementById('startBtn').addEventListener('click', function () {
    if (this.innerHTML === '▷') {
      this.innerHTML = '||';
      interval = setInterval(updateTimer, 1000);
    } else {
      this.innerHTML = '▷';
      clearInterval(interval);
    }
  });

  function updateTimer() {
    elapsedTime++;
    if (elapsedTime > timerDuration) {
      clearInterval(interval);
      elapsedTime = 0;
      timerPathOverlay.style.strokeDashoffset = fullDashArray;
      return;
    }

    let dashoffset = fullDashArray * (1 - elapsedTime / timerDuration);
    timerPathOverlay.style.strokeDashoffset = dashoffset;

    let angle = 360 * (elapsedTime / timerDuration);
    let radians = (angle * Math.PI) / 180;
    let radius = 58;
    let x = 62 + radius * Math.cos(radians);
    let y = 62 + radius * Math.sin(radians);
    document.querySelector('.timer-dot').setAttribute('cx', x);
    document.querySelector('.timer-dot').setAttribute('cy', y);

    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    document.getElementById('time').textContent = `${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    let caloriesBurned = Math.floor((elapsedTime / 60) * 5);
    document.getElementById('calories').textContent = caloriesBurned;
  }
  updateTimer();
});

// Diary
const diaryModal = document.getElementById('diaryModal');
const closeDiary = document.querySelector('.diary-close');
const btnDiary = document.querySelector('.btn-diary');
const btnDiaryClose = document.querySelector('.diary-btn-close');

document.onkeydown = function (event) {
  if (event.key === 'Escape') {
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    }
    if (diaryModal.style.display === 'block') {
      diaryModal.style.display = 'none';
    }
  }
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  if (event.target == diaryModal) {
    diaryModal.style.display = 'none';
  }
};

btnDiary.addEventListener('click', function () {
  diaryModal.style.display = 'block';
  modal.style.display = 'none';
  document.getElementById('diaryTime').textContent =
    document.getElementById('time').textContent;
  document.getElementById('diaryCalories').textContent =
    document.getElementById('calories').textContent;
});

closeDiary.addEventListener('click', function () {
  diaryModal.style.display = 'none';
});

btnDiaryClose.addEventListener('click', function () {
  diaryModal.style.display = 'none';
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  if (event.target == diaryModal) {
    diaryModal.style.display = 'none';
  }
};
