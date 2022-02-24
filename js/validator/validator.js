let validator = {
  kiemTraSo: function (value, spanMess) {
    let textSpan = document.getElementById(spanMess);
    let parten = /^(0|[1-9][0-9]*)$/;
    if (parten.test(value)) {
      textSpan.innerText = "";
      return true;
    } else {
      textSpan.innerText = "Trường này là ký tự số";
      return false;
    }
  },
  kiemTraKiTu: function (value, spanMess) {
    let textSpan = document.getElementById(spanMess);
    let parten = /[A-Za-z]/;
    if (parten.test(value.trim())) {
      textSpan.innerText = "";
      return true;
    } else {
      textSpan.innerText = "Vui lòng nhập tên chữ cái ";
      return false;
    }
  },
  kiemTraEmail: function (value, spanMess) {
    let textSpan = document.getElementById(spanMess);
    let parten =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (parten.test(value)) {
      textSpan.innerText = "";
      return true;
    } else {
      textSpan.innerText = "Email không hợp lệ";
      return false;
    }
  },
  kiemTraDoDai: function (value, spanMess) {
    let textSpan = document.getElementById(spanMess);
    if (value > 0 && value <= 10) {
      textSpan.innerText = "";
      return true;
    } else {
      textSpan.innerText = "Vui lòng nhập số từ 0 đến 10";
      return false;
    }
  },
};
