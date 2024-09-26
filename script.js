window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Adiciona/remova a classe scrolled ao header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Ativa o link do menu correspondente à seção visível
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.classList.toggle('open');
    mobileNav.classList.toggle('active');
});

//carrosel

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Função para mostrar o slide atual
function showSlide(index) {
    // Calcular o deslocamento necessário para o slide atual
    const offset = -index * 100; 
    // Aplicar o deslocamento ao contêiner
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Função para avançar para o próximo slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides; // Avança para o próximo slide
    showSlide(slideIndex); // Atualiza a exibição
}

// Função para voltar ao slide anterior
function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // Retrocede para o slide anterior
    showSlide(slideIndex); // Atualiza a exibição
}

// Inicializa o carrossel mostrando o primeiro slide
showSlide(slideIndex);

// Avançar slides automaticamente a cada 5 segundos
const autoPlayInterval = setInterval(nextSlide, 5000);

// Adiciona funcionalidade aos botões de navegação
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoPlayInterval); // Para o autoplay quando o usuário interage
    prevSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoPlayInterval); // Para o autoplay quando o usuário interage
    nextSlide();
});
