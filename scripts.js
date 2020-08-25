'use strict'

$(document).ready (
  function ChangePhoto() {
    if (window.matchMedia('(max-width: 375px)').matches) {
      $('#photo').attr('src', 'img/photo_mobile.jpg')
    } else {
      $('#photo').attr('src', 'img/photo.jpg')
    }
  }
)

function resize() {
  if (window.matchMedia('(max-width: 375px)').matches) {
    $('#photo').attr('src', 'img/photo_mobile.jpg')
  } else {
    $('#photo').attr('src', 'img/photo.jpg')
  }
}
window.onresize = resize
