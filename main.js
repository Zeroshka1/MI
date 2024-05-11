let burger = document.getElementById('burger-btn');
let menu = document.getElementById('head');
let main = document.getElementById('main');
let html = document.documentElement; // Правильно получаем доступ к элементу <html>

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        main.classList.add('main');
        html.classList.add('no-scroll'); // Убираем точку, правильно добавляем класс
    } else {
        main.classList.remove('main');
        html.classList.remove('no-scroll'); // Убираем класс для возврата прокрутки
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('color_mode');
    const body = document.body;
    let Scooter = document.getElementById('Scooter');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            // Переключить на темную тему
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            // Переключить на светлую тему
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    });
});


document.getElementById('color_mode').addEventListener('change', function() {
    const scooterImg = document.getElementById('Scooter');
    let newSrc = this.checked ? "Image/Байк-b.png" : "Image/Байк.png";


    scooterImg.classList.add('slide-out-left');

    setTimeout(() => {
        scooterImg.src = newSrc;

        scooterImg.classList.remove('slide-out-left');
        void scooterImg.offsetWidth;

        scooterImg.classList.add('slide-in-from-right');
        setTimeout(() => {
            scooterImg.classList.remove('slide-in-from-right');
        }, 700);
    }, 700);
});




document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, не является ли устройство мобильным
    if (window.matchMedia('(min-width: 440px)').matches) {
        const slides = document.querySelectorAll('.slider-slide-text');
        let activeSlideIndex = 0;
        let progressInterval;

        function resetProgress() {
            slides.forEach((slide, index) => {
                const progressBar = slide.querySelector('.progress');
                progressBar.style.width = '0%';

                const image = slide.querySelector('.slide-image');
                const textTitle = slide.querySelector('.title-slide');
                const text = slide.querySelector('.text-slide');

                image.classList.remove('active-image', 'last-image-active');
                textTitle.classList.remove('useText');
                text.classList.remove('useText');
                textTitle.classList.add('noUseText');
                text.classList.add('noUseText');
            });
        }

        function startProgress() {
            const slide = slides[activeSlideIndex];
            const progressBar = slide.querySelector('.progress');
            const image = slide.querySelector('.slide-image');
            const textTitle = slide.querySelector('.title-slide');
            const text = slide.querySelector('.text-slide');

            textTitle.classList.add('useText');
            text.classList.add('useText');
            textTitle.classList.remove('noUseText');
            text.classList.remove('noUseText');

            const containerProgressLast = slide.querySelector('.progress_container');

            if (activeSlideIndex === slides.length - 1) {
                // Это последний слайд
                containerProgressLast.classList.add('last');
                image.classList.add('last-image-active'); // Добавляем класс к последнему изображению
            } else {
                containerProgressLast.classList.remove('last');
                image.classList.add('active-image');
            }

            let progress = 0;

            progressInterval = setInterval(() => {
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    activeSlideIndex++;
                    if (activeSlideIndex >= slides.length) {
                        activeSlideIndex = 0;
                    }
                    resetProgress();
                    startProgress();
                } else {
                    progress++;
                    progressBar.style.width = `${progress}%`;
                }
            }, 100);
        }

        resetProgress();
        startProgress();
    }
});
