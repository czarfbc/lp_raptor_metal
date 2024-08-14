function adjustLayoutForScroll() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      let headerScroll = document.getElementById('header');
      headerScroll.classList.toggle('scroll');

      let headerMenuScroll = document.getElementById('header_menu');
      headerMenuScroll.classList.toggle('scroll_menu');

      let headerMenuScrollImage = document.getElementById('image_header_menu');
      headerMenuScrollImage.classList.toggle('scroll_image');
    }
  });
}

adjustLayoutForScroll();
