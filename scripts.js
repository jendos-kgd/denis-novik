'use strict'

// Change photo when use mobile
$(document).ready (
  function ChangePhoto() {
    if (window.matchMedia('(max-width: 375px)').matches) {
      $('#photo').attr('src', 'img/photo_mobile.jpg')
    } else {
      $('#photo').attr('src', 'img/photo.jpg')
    }
  }
)

// Change photo when resize browser
function resize() {
  if (window.matchMedia('(max-width: 375px)').matches) {
    $('#photo').attr('src', 'img/photo_mobile.jpg')
  } else {
    $('#photo').attr('src', 'img/photo.jpg')
  }
}
window.onresize = resize

// Dropdown for mobile nav
$(document).ready (
  function DropDown() {
    $('#dropdown_btn').click(function () {
      $('#dropdown_block').css('display', 'block')
    });
    $('#close_dropdown_btn').click(function () {
      $('#dropdown_block').css('display', 'none')
    })
  }
);
