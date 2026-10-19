document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carouselContainer');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let autoPlayInterval = null;
    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;

    // Create indicator dots dynamically if they don't exist, or set up existing ones
    const dots = indicatorsContainer ? indicatorsContainer.querySelectorAll('.indicator-dot') : [];

    // Helper to get active slide index based on current scroll position
    const getActiveIndex = () => {
        const width = container.clientWidth;
        if (width === 0) return 0;
        return Math.round(container.scrollLeft / width);
    };

    // Update active indicator dot
    const updateIndicators = () => {
        const activeIndex = getActiveIndex();
        dots.forEach((dot, idx) => {
            if (idx === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Scroll to specific index
    const scrollToSlide = (index) => {
        const slideWidth = container.clientWidth;
        container.scrollTo({
            left: index * slideWidth,
            behavior: 'smooth'
        });
    };

    // Nav buttons click
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            resetAutoPlay();
            const activeIndex = getActiveIndex();
            const targetIndex = activeIndex === 0 ? slideCount - 1 : activeIndex - 1;
            scrollToSlide(targetIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            resetAutoPlay();
            const activeIndex = getActiveIndex();
            const targetIndex = activeIndex === slideCount - 1 ? 0 : activeIndex + 1;
            scrollToSlide(targetIndex);
        });
    }

    // Dots click navigation
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            resetAutoPlay();
            scrollToSlide(idx);
        });
    });

    // Update indicators on scroll
    container.addEventListener('scroll', () => {
        updateIndicators();
    });

    // Drag-to-scroll mechanics (Mouse)
    container.style.cursor = 'grab';

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        container.style.cursor = 'grabbing';
        container.style.scrollSnapType = 'none'; // Temporarily disable snap during drag
        startX = e.pageX - container.offsetLeft;
        scrollLeftStart = container.scrollLeft;
        stopAutoPlay();
    });

    container.addEventListener('mouseleave', () => {
        if (!isDragging) return;
        isDragging = false;
        container.style.cursor = 'grab';
        container.style.scrollSnapType = 'x mandatory'; // Re-enable snap
        startAutoPlay();
    });

    container.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        container.style.cursor = 'grab';
        container.style.scrollSnapType = 'x mandatory'; // Re-enable snap
        startAutoPlay();
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        container.scrollLeft = scrollLeftStart - walk;
    });

    // Handle touch interactions to pause/resume auto play
    container.addEventListener('touchstart', () => {
        stopAutoPlay();
    }, { passive: true });

    container.addEventListener('touchend', () => {
        startAutoPlay();
    }, { passive: true });

    // Auto Play implementation
    const startAutoPlay = () => {
        if (autoPlayInterval) return;
        autoPlayInterval = setInterval(() => {
            const activeIndex = getActiveIndex();
            const nextIndex = (activeIndex + 1) % slideCount;
            scrollToSlide(nextIndex);
        }, 5000);
    };

    const stopAutoPlay = () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    };

    const resetAutoPlay = () => {
        stopAutoPlay();
        startAutoPlay();
    };

    // Initialize
    const initCarousel = () => {
        const slideWidth = container.clientWidth;
        if (slideWidth > 0) {
            container.scrollLeft = slideWidth;
            updateIndicators();
            const wrapper = document.querySelector('.hero-carousel-wrapper');
            if (wrapper) {
                wrapper.classList.add('loaded');
            }
            startAutoPlay();
        } else {
            requestAnimationFrame(initCarousel);
        }
    };
    initCarousel();
    // In case window size changes
    window.addEventListener('resize', () => {
        updateIndicators();
    });
});
