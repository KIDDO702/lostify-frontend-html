new Splide('.splide', {
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    rewind: true,
    rewindSpeed: 1000,
    rewindByDrag: true,
    breakpoints: {
        765: {
            perPage: 1,
            perMove: 1
        },
        1025: {
            perPage: 2,
            perMove: 1
        }
    }
}).mount();