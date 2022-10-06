(function() {
    const slides = [
        '<figure><img class="machines-box-img" alt="SMIK Coffee Machine" src="img/smik-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">SMIK Coffee Machine</a></p><p class="machines-box-price">199,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="La Spezia Coffee Machine" src="img/la-spezia-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">La Spezia Coffee Machine </a></p><p class="machines-box-price">499,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="FROST Coffee Machine" src="img/frost-coffe-machine.png"><figcaption><div><p><a href="" class="machines-box-name">FROST Coffee Machine</a></p><p class="machines-box-price">199,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="SMIK 2 Coffee Machine " src="img/smik2-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">SMIK 2 Coffee Machine</a></p><p class="machines-box-price">299,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="ORGANIC Coffee Machine" src="img/organic-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">ORGANIC Coffee Machine</a></p><p class="machines-box-price">299,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>'
    ]
    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector('.carousel .slides-container');
        slidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 700) {
            const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slides[slide2Idx];
            if (window.innerWidth > 900) {
                const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
                slidesContainer.innerHTML += slides[slide3Idx];    
            
                if (window.innerWidth > 1200) {
                    const slide4Idx = slide3Idx + 1 >= slides.length ? 0 : slide3Idx + 1;
                    slidesContainer.innerHTML += slides[slide4Idx];
                }
            }
        }
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

    setInterval(nextSlide, 5000);
    document.querySelector('.carousel .prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel .next').addEventListener('click', nextSlide);

    renderSlides();

    window.addEventListener('resize', renderSlides);
})();