// Photo gallery configuration
const photos = [
    { src: 'photos/photo1.jpg', caption: 'Sample Photo 1' },
    { src: 'photos/photo2.jpg', caption: 'Sample Photo 2' },
    { src: 'photos/photo3.jpg', caption: 'Sample Photo 3' }
];

// Initialize gallery
function initGallery() {
    const gallery = document.getElementById('gallery');
    
    photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <div class="caption">${photo.caption}</div>
        `;
        card.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(card);
    });
}

// Lightbox functions
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    
    img.src = photos[index].src;
    caption.textContent = photos[index].caption;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', initGallery);

document.querySelector('.close').addEventListener('click', closeLightbox);

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
