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

//validate form
//check form fields User Name for completeness

function testName() {
   if (document.forms.review__form[1].value.length < 3) {
     document.forms.review__form[1].style.border = "red solid 1px";
     return false;
   } else {
     document.forms.review__form[1].style.border = "green solid 1px";
     return true;
   };
}

function testSecondName() {
  if (document.forms.review__form[2].value.length < 3) {
    document.forms.review__form[2].style.border = "red solid 1px";
    return false;
  } else {
    document.forms.review__form[2].style.border = "green solid 1px";
    return true;
  }
}

function testSurName() {
  if (document.forms.review__form[3].value.length < 3) {
    document.forms.review__form[3].style.border = "red solid 1px";
    return false;
  } else {
    document.forms.review__form[3].style.border = "green solid 1px";
    return true;
  }
}

//checking contacts
//checking phone number

function testPhone() {
  let phoneNumber = document.querySelector(".phone");
  warning = document.querySelector(".contact-information__phone span");

  if (phoneNumber.value.length == 9 && !isNaN(phoneNumber.value)) {
    phoneNumber.style.border = "solid green 1px";
    warning.html = "";
    warning.innerHTML = "Все правильно!";
    warning.style.color = "green";
    return true;
  } else {
    phoneNumber.style.border = "solid red 1px";
    warning.html = "";
    warning.innerHTML = "Ошибка, перепроверьте номер";
    warning.style.color = "red";
    return false;
  }
}

function testEmail() {
  let email = document.querySelector(".email");
  warning = document.querySelector(".contact-information__email span");
  dot = email.value.lastIndexOf(".");
  dog = email.value.indexOf("@");

  if (dog < 1 || dot + 2 >= email.value.length) {
    email.style.border = "solid red 1px";
    warning.html = "";
    warning.innerHTML = "Ошибка, перепроверьте номер";
    warning.style.color = "red";
    return false;
  } else {

    email.style.border = "solid green 1px";
    warning.html = "";
    warning.innerHTML = "Все правильно!";
    warning.style.color = "green";
    return true;
  }
}

console.log(testFullName());

function validate() {
        let modalSuccess = document.querySelector(".review__send_success"); //
            modalError = document.querySelector(".review__send_error");

            modalErrorBtnClose = document.querySelector(".error__btn");

      if (testName() && testSecondName() && testSurName() && testPhone() && testEmail()) {
        modalSuccess.style.display ="block";
        event.preventDefault();

      } else {
        event.preventDefault();
        modalError.style.display = "block";
        modalErrorBtnClose.onclick = () => {
          modalError.style.display = "none";
         }
        }
}

//butttons for closing modals
