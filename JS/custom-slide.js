// Set default selected slide to 2
document.addEventListener('DOMContentLoaded', function() {
    showSlide(3);
});
function showSlide(index) {
    var slides = document.querySelectorAll('.slider img');
    var slideButtons = document.querySelectorAll('.slider-buttons button');
        
    slides.forEach(function(button) {
        button.classList.remove('active');
    });
    slideButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    // document.getElementById('size-' + size.toLowerCase()).classList.add('active');
    document.getElementById('slide1_' + index).classList.add('active');
    document.getElementById('slide-button-' + index).classList.add('active');
}
// function showSlide(index) {
//     var slides = document.querySelectorAll('.slider img');
//     var slideButtons = document.querySelectorAll('.slider-buttons button');
    
//     slides.forEach(function(slide) {
//         slide.classList.remove('active');
//     });
//     slideButtons.forEach(function(button) {
//         button.classList.remove('active');
//     });
    
//     var selectedSlide = document.getElementById('slide1_' + index);
//     var selectedButton = document.getElementById('slide-button-' + index);
    
//     selectedSlide.classList.add('active');
//     selectedButton.classList.add('active');
// }



document.addEventListener('DOMContentLoaded', function() {
    selectSize('M');
});

function selectSize(size) {
    var sizeButtons = document.querySelectorAll('.cloth-size button');
    sizeButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.getElementById('size-' + size.toLowerCase()).classList.add('active');
}

function changeQuantity(amount) {
    const quantityElement = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += amount;
    if (currentQuantity < 1) {
        currentQuantity = 1;
    }
    quantityElement.textContent = currentQuantity;
}
