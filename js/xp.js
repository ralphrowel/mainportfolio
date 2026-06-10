function openExpLightbox(src) {
        document.getElementById('exp-lightbox-img').src = src;
        document.getElementById('exp-lightbox').classList.add('active');
    }

    function closeExpLightbox() {
        document.getElementById('exp-lightbox').classList.remove('active');
    }

    function closeExpLightboxOutside(e) {
        if (e.target.id === 'exp-lightbox') closeExpLightbox();
    }