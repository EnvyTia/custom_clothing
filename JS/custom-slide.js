function showSlide(index) {
    var slides = document.querySelectorAll('.slider img');
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    var selectedSlide = document.getElementById('slide1_' + index);
    selectedSlide.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    selectSize('M');
});

function selectSize(size) {
    var sizeButtons = document.querySelectorAll('.cloth-size button');
    sizeButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.getElementById('cloth-size' + size.toLowerCase()).classList.add('active');
}