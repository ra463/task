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

// toggling the inner container
container.forEach((item) => {
  item.addEventListener("click", () => {
    var inner_container_2 = item.querySelector(".inner_container_2");
    if (inner_container_2.style.display === "flex") {
      inner_container_2.style.display = "none";
    } else {
      inner_container_2.style.display = "flex";
    }
  });
})

