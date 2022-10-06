(function() {
    const slides = [
        '<div><img src="img/classico.png" alt="classico"><p class="type-coffee">Classico</p><p class="price">4,5usd</p><button class="stub" type="submit">Add to Cart</button></div>',
        '<div><img src="img/intenso.png" alt="intenso"><p class="type-coffee">Intenso</p><p class="price">5,00usd</p><button class="stub" type="submit">Add to Cart</button></div>',
        '<div><img src="img/mocha.png" alt="mocha"><p class="type-coffee">Mocha</p><p class="price">4,50usd</p><button class="stub" type="submit">Add to Cart</button></div>',
        '<div><img src="img/decaf.png" alt="decaf"><p class="type-coffee">Decaf</p><p class="price">5,00usd</p><button class="stub" type="submit">Add to Cart</button></div>',
        '<div><img src="img/espreso.png" alt="espresso"><p class="type-coffee">Espresso</p><p class="price">4,50usd</p><button class="stub" type="submit">Add to Cart</button></div>'
    ]
    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesCoffee = document.querySelector('.carusel-coffee .slides-coffee');
        let defaultAmount = 4;
        if (window.innerWidth < 990) {
            defaultAmount = 2;
        }
        if (window.innerWidth < 765) {
            defaultAmount = 1;
        }
        let currentSlides = slides.slice(currentSlideIdx, currentSlideIdx + defaultAmount);
        if (currentSlides.length < defaultAmount) {
            currentSlides.push(...slides.slice(0, defaultAmount - currentSlides.length));
        }

        slidesCoffee.innerHTML = currentSlides.join("");

    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        renderSlides();
    }

    function prevSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
        renderSlides();
    }

    renderSlides();
    document.querySelector('.carusel-coffee .prev-button').addEventListener('click', prevSlide);
    document.querySelector('.carusel-coffee .next-button').addEventListener('click', nextSlide);


    window.addEventListener('resize', renderSlides);
})();