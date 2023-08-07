var container = document.querySelectorAll(".container");

// add and remove active class
container.forEach((item) => {
  item.addEventListener("click", () => {
    container.forEach((container) => container.classList.remove("active"));
    item.classList.toggle("active");
  });
});

// dynamicaly chainging the price
container.forEach((item) => {
  item.addEventListener("click", () => {
    var price = item.querySelector(".price").innerText;
    var btn = document.querySelector(".btn");
    btn.innerText = price;
  });
});

// make radio button checked of active class
var radio = document.querySelectorAll(".radio");
container.forEach((item) => {
  item.addEventListener("click", () => {
    var radio = item.querySelector(".radio");
    radio.checked = true;
  });
});
