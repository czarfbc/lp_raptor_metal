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

const slides = [
  {
    image: 'assets/banner0.svg',
    presentation: 'ENCONTRE AQUI OS MELHORES',
    title: 'PROJETOS',
    subtitle: 'MECÂNICOS',
  },
  {
    image: 'assets/banner1.svg',
    presentation: 'ENCONTRE AQUI O MELHOR',
    title: 'FORNECIMENTO DE',
    subtitle: 'PEÇAS',
  },
  {
    image: 'assets/banner2.svg',
    presentation: 'ENCONTRE AQUI A MELHOR',
    title: 'ENGENHARIA',
    subtitle: 'REVERSA',
  },
];

let currentSlide = 0;

function updateSlide() {
  const carouselImage = document.getElementById('carousel-image');
  const carouselContent = document.getElementById('carousel-content');

  carouselImage.src = slides[currentSlide].image;
  carouselContent.innerHTML = `
    <div>
      <h2 class="text-dark_white font-semibold text-xl">
        ${slides[currentSlide].presentation}
      </h2>
    </div>
    <div>
      <h1 class="flex flex-col items-center font-semibold text-8xl gap-y-8">
        <span class="text-6xl">${slides[currentSlide].title}</span> ${slides[currentSlide].subtitle}
      </h1>
    </div>
  `;
}

function previousSlide() {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateSlide();
}

function nextSlide() {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  updateSlide();
}

updateSlide();
