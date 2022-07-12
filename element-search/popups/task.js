let modal = document.getElementsByClassName('modal');

modal[0].classList.add('modal_active');

let close = document.getElementsByClassName('modal__close_times');

let showSuccess = document.getElementsByClassName('show-success');

function closed() {
  modal[0].classList.remove('modal_active');
}

close[0].onclick = closed;

function show() {
  showSuccess[0].classList.add('btn_success');
}
showSuccess[0].onclick = show;