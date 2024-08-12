function adjustLayoutForScroll() {
  window.addEventListener('scroll', () => {
    let headerScroll = document.getElementById('header');
    headerScroll.classList.toggle('scroll', window.scrollY > 30);

    let headerMenuScroll = document.getElementById('header_menu');
    headerMenuScroll.classList.toggle('scroll_menu', window.scrollY > 30);

    let headerMenuScrollImage = document.getElementById('image_header_menu');
    headerMenuScrollImage.classList.toggle('scroll_image', window.scrollY > 30);
  });
}

function phoneInputMask() {
  const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length > 0) {
      value = '(' + value;
    }
    if (value.length > 3) {
      value = value.slice(0, 3) + ') ' + value.slice(3);
    }
    if (value.length > 13) {
      value = value.slice(0, 10) + '-' + value.slice(10, 14);
    } else if (value.length > 9) {
      value = value.slice(0, 9) + '-' + value.slice(9, 13);
    }

    e.target.value = value;
  });

  telefoneInput.addEventListener('keypress', function (e) {
    const key = String.fromCharCode(e.keyCode);
    if (!/[0-9]/.test(key)) {
      e.preventDefault();
    }
  });
}

adjustLayoutForScroll();
phoneInputMask();
