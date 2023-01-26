function slider() {
    // Slider 1
    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });


    // Slider 2
    let offset2 = 0;
    let slideIndex2 = 1;

    const slides2 = document.querySelectorAll('.offer__slide2'),
        prev2 = document.querySelector('.offer__slider-prev2'),
        next2 = document.querySelector('.offer__slider-next2'),
        total2 = document.querySelector('#total2'),
        current2 = document.querySelector('#current2'),
        slidesWrapper2 = document.querySelector('.offer__slider-wrapper2'),
        width2 = window.getComputedStyle(slidesWrapper2).width,
        slidesField2 = document.querySelector('.offer__slider-inner2');

    if (slides2.length < 10) {
        total2.textContent = `0${slides2.length}`;
        current2.textContent =  `0${slideIndex2}`;
    } else {
        total2.textContent = slides2.length;
        current2.textContent =  slideIndex2;
    }

    slidesField2.style.width = 100 * slides2.length + '%';
    slidesField2.style.display = 'flex';
    slidesField2.style.transition = '0.5s all';

    slidesWrapper2.style.overflow = 'hidden';

    slides2.forEach(slide => {
        slide.style.width = width2;
    });

    next2.addEventListener('click', () => {
        if (offset2 === (+width2.slice(0, width2.length - 2) * (slides2.length - 1))) {
            offset2 = 0;
        } else {
            offset2 += +width2.slice(0, width2.length - 2);
        }

        slidesField2.style.transform = `translateX(-${offset2}px)`;

        if (slideIndex2 === slides2.length) {
            slideIndex2 = 1;
        } else {
            slideIndex2++;
        }

        if (slides2.length < 10) {
            current2.textContent =  `0${slideIndex2}`;
        } else {
            current2.textContent =  slideIndex2;
        }
    });

    prev2.addEventListener('click', () => {
        if (offset2 === 0) {
            offset2 = +width2.slice(0, width2.length - 2) * (slides2.length - 1);
        } else {
            offset2 -= +width2.slice(0, width2.length - 2);
        }

        slidesField2.style.transform = `translateX(-${offset2}px)`;

        if (slideIndex2 === 1) {
            slideIndex2 = slides2.length;
        } else {
            slideIndex2--;
        }

        if (slides2.length < 10) {
            current2.textContent =  `0${slideIndex2}`;
        } else {
            current2.textContent =  slideIndex2;
        }
    });

    // Slider 3
    let offset3 = 0;
    let slideIndex3 = 1;

    const slides3 = document.querySelectorAll('.offer__slide3'),
        slider3 = document.querySelector('.offer__slider3'),
        prev3 = document.querySelector('.offer__slider-prev3'),
        next3 = document.querySelector('.offer__slider-next3'),
        total3 = document.querySelector('#total3'),
        current3 = document.querySelector('#current3'),
        slidesWrapper3 = document.querySelector('.offer__slider-wrapper3'),
        width3 = window.getComputedStyle(slidesWrapper3).width,
        slidesField3 = document.querySelector('.offer__slider-inner3');

    if (slides3.length < 10) {
        total3.textContent = `0${slides3.length}`;
        current3.textContent =  `0${slideIndex3}`;
    } else {
        total3.textContent = slides3.length;
        current3.textContent =  slideIndex3;
    }

    slidesField3.style.width = 100 * slides3.length + '%';
    slidesField3.style.display = 'flex';
    slidesField3.style.transition = '0.5s all';

    slidesWrapper3.style.overflow = 'hidden';

    slides3.forEach(slide => {
        slide.style.width = width3;
    });

    slider3.style.position = 'relative';
    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
            // background-color: rgba(255,255,255, 0.2)
        `;
    slider3.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 50px;
            height: 10px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .2;
            transition: opacity .6s ease;
        `;

        if (i === 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next3.addEventListener('click', () => {
        if (offset3 === deleteNotDigits(width3) * (slides3.length - 1)) {
            offset3 = 0;
        } else {
            offset3 += deleteNotDigits(width3);
        }

        slidesField3.style.transform = `translateX(-${offset3}px)`;

        if (slideIndex3 === slides3.length) {
            slideIndex3 = 1;
        } else {
            slideIndex3++;
        }

        if (slides3.length < 10) {
            current3.textContent =  `0${slideIndex3}`;
        } else {
            current3.textContent =  slideIndex3;
        }

        dots.forEach(dot => dot.style.opacity = '.2');
        dots[slideIndex3 - 1].style.opacity = 1;
    });

    prev3.addEventListener('click', () => {
        if (offset3 === 0) {
            offset3 = deleteNotDigits(width3) * (slides3.length - 1);
        } else {
            offset3 -= deleteNotDigits(width3);
        }

        slidesField3.style.transform = `translateX(-${offset3}px)`;

        if (slideIndex3 === 1) {
            slideIndex3 = slides3.length;
        } else {
            slideIndex3--;
        }

        if (slides3.length < 10) {
            current3.textContent =  `0${slideIndex3}`;
        } else {
            current3.textContent =  slideIndex3;
        }

        dots.forEach(dot => dot.style.opacity = '.2');
        dots[slideIndex3 - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex3 = slideTo;
            offset3 = deleteNotDigits(width3) * (slideTo - 1);

            slidesField3.style.transform = `translateX(-${offset3}px)`;

            if (slides3.length < 10) {
                current3.textContent =  `0${slideIndex3}`;
            } else {
                current3.textContent =  slideIndex3;
            }

            dots.forEach(dot => dot.style.opacity = '.2');
            dots[slideIndex3 - 1].style.opacity = 1;
        });
    });
}

module.exports = slider;