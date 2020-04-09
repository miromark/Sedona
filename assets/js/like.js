
let icon = document.querySelectorAll(".like__icon");
number = document.querySelectorAll(".like__number");

for (let i = 0; i < icon.length; i++) {
  icon[i].click = 0;

  icon[i].onclick = function () {
    icon[i].click += 1;

    if (icon[i].click % 2 == 1) {
      icon[i].classList.toggle("like__icon_active");
      number[i].innerHTML = Number(number[i].textContent) + 1;
    } else {
      icon[i].classList.toggle("like__icon_active");
      number[i].innerHTML = Number(number[i].textContent) - 1;
    }
  };
}