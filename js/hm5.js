"use strict";
"use strict";
//находит время
function getCurrentTime() {
  let now = new Date();
  let hrs = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hrs < 10) {
    hrs = `0${hrs}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${hrs}:${min}:${sec}`;
  // const stringTime = `${hrs}:${min}:${sec}`;

  // return stringTime.split("");
}

// const currentTime = getCurrentTime();
// console.log(currentTime);

//выводит время первый раз и рисует дивы
function createDomElements(count) {
  const timeDisplay = document.createElement("div");
  timeDisplay.classList.add("time_display");
  document.body.append(timeDisplay);

  const firstTimeSet = [];

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    // span.textContent = currentTime[i];
    timeDisplay.appendChild(span);
    firstTimeSet.push(span);

    // span.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    //   Math.random() * 255
    // }, ${Math.random() * 255})`;
    // timeDisplay.appendChild(span);
  }
  return firstTimeSet;
}
// let firstTimeSet = setTime(currentTime);

//Обновляет часы

function updateTime(elements) {
  const time = getCurrentTime();

  for (let i = 0; i < time.length; i++) {
    const char = time[i];
    const element = elements[i];
    element.textContent = char;
    // if (currentTime[i] === firstTimeSet[i]) {
    //   continue;
    // }
    // firstTimeSet[i] = currentTime[i];
    // const span = document.timeDisplay.children[i];
    // span.textContent = currentTime[i];
  }
}

// let updateTimefunc = updateTime;

const time = getCurrentTime(); // 12:00:00 -> 8 span
const elements = createDomElements(time.length);
updateTime(elements);
setInterval(() => updateTime(elements), 1000);
