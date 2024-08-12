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
  carouselContent.innerHTML = /* html */ `
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
