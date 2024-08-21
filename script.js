var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });


    const scrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,

    };

    


    ScrollReveal().reveal(".content h1", {
        ...scrollRevealOption,
        delay: 500,
    })

    ScrollReveal().reveal(".content p", {
        ...scrollRevealOption,
        delay: 800,
    })

    ScrollReveal().reveal(".content a", {
        ...scrollRevealOption,
        delay: 1100,
    })

   


    ScrollReveal().reveal(".container_parallax p", {
        ...scrollRevealOption,
        delay: 800,
    })

    ScrollReveal().reveal(".box h2", {
        ...scrollRevealOption,
        origin: 'left',
    })

    ScrollReveal().reveal(".box p", {
        ...scrollRevealOption,
        origin: 'right',
    })

    
