let countElements = document.getElementsByClassName("count-up");
let countElementsArray = Array.from(countElements);

countElementsArray.map((element) => {
  let currentCount = 0;
  let targetNumber = element.dataset.number;

  function animateCount() {
    currentCount++;
    element.innerHTML = currentCount;
    if (currentCount == targetNumber) {
      clearInterval(intervalId);
    }
  }
  let intervalId = setInterval(() => {
    animateCount();
  }, 3000 / targetNumber);
});
