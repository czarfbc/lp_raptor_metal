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

adjustLayoutForScroll();
