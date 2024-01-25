(function () {
  const destination_date = '04/01/2024',
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const countDown = new Date(destination_date).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.querySelector("#days").innerText = Math.floor(distance / (day)),
        document.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);
    }, 0)
}());