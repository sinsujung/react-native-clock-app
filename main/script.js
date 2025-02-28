const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function updateClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (currentDate.getMinutes() + secondsRatio) / 60;
    const hoursRatio = (currentDate.getHours() + minutesRatio) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

setInterval(updateClock, 1000);
updateClock(); // 처음 로딩 시에도 실행
