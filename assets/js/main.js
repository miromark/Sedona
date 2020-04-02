//burger menu

let btn = document.querySelector(".burger-btn");
menu = document.querySelector(".header-menu");

btn.onclick = function () {
  btn.classList.toggle("burger-btn_open");
  menu.classList.toggle("header-menu_open");
};

//map
function initMap() {
  let pos = {
    lat: 34.863897,
    lng: -111.7954
  };
  let option = {
    center: pos,
    zoom: 15
  };

  let myMap = new google.maps.Map(
    document.querySelector(".map-field__map-container"),
    option
  );
  let myMarker = new google.maps.Marker({
    position: pos,
    map: myMap,
  });
};

//modal window

let modal_btn = document.querySelector(".map-field__button");
  modal = document.querySelector(".modal");
  modal_close = document.querySelector(".modal-content__btn");

modal_btn.onclick = function () {
  modal.style.display = "block";
};

modal_close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};