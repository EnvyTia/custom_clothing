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

function updateLabel(inputId, labelId) {
    var inputElement = document.getElementById(inputId);
    var labelElement = document.getElementById(labelId);

    if (inputElement.files && inputElement.files.length > 0) {
        var fileName = inputElement.files[0].name;
        labelElement.textContent = fileName;
    } else {
        labelElement.textContent = '--Upload file--';
    }
}


let quantity = 1;
const pricePerItem = 45.000; // Assume each item costs $10.00

function changeQuantity(change) {
    quantity += change;
    if (quantity < 1) quantity = 1;
    document.getElementById('quantity').textContent = quantity;
    updatePrice();
}

function updatePrice() {
    const totalPrice = (quantity * pricePerItem).toFixed(3);
    document.getElementById('total-price').textContent = `Rp${totalPrice}`;
}

function addToCart() {
    // Logic for adding to cart
    // Show modal
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Initial price update on page load
updatePrice();

// document.addEventListener('DOMContentLoaded', function() {
//             selectSize('M');
//         });

//         function selectSize(size) {
//             var sizeButtons = document.querySelectorAll('.cloth-size button');
//             sizeButtons.forEach(function(button) {
//                 button.classList.remove('active');
//             });
//             document.getElementById('size-' + size.toLowerCase()).classList.add('active');
//         }

//         function changeQuantity(amount) {
//             const quantityElement = document.getElementById('quantity');
//             let currentQuantity = parseInt(quantityElement.textContent);
//             currentQuantity += amount;
//             if (currentQuantity < 1) {
//                 currentQuantity = 1;
//             }
//             quantityElement.textContent = currentQuantity;
//             updatePrice();
//         }

//         function updateLabel(inputId, labelId) {
//             var inputElement = document.getElementById(inputId);
//             var labelElement = document.getElementById(labelId);

//             if (inputElement.files && inputElement.files.length > 0) {
//                 var fileName = inputElement.files[0].name;
//                 labelElement.textContent = fileName;
//             } else {
//                 labelElement.textContent = '--Upload file--';
//             }
//         }

//         let quantity = 1;
//         const pricePerItem = 45000; // Assume each item costs Rp45.000

//         function changeQuantity(change) {
//             quantity += change;
//             if (quantity < 1) quantity = 1;
//             document.getElementById('quantity').textContent = quantity;
//             updatePrice();
//         }

//         function updatePrice() {
//             const totalPrice = (quantity * pricePerItem).toFixed(3);
//             document.getElementById('total-price').textContent = `Rp${totalPrice}`;
//         }

//         function addToCart() {
//             // Logic for adding to cart
//             // Show modal
//             const modal = document.getElementById("myModal");
//             modal.style.display = "block";
//         }

//         function closeModal() {
//             const modal = document.getElementById("myModal");
//             modal.style.display = "none";
//             // Reset quantity to 1
//             quantity = 1;
//             document.getElementById('quantity').textContent = quantity;
//             updatePrice();

//             // Reset uploaded images
//             resetImages();
//         }

//         function resetImages() {
//             const labels = ['front-label', 'rear-label', 'right-label', 'left-label'];
//             const inputs = ['front-picture', 'rear-picture', 'right-emblem', 'left-emblem'];

//             labels.forEach(labelId => {
//                 document.getElementById(labelId).textContent = '--Upload file--';
//             });

//             inputs.forEach(inputId => {
//                 document.getElementById(inputId).value = '';
//             });
//         }

//         // When the user clicks on <span> (x), close the modal
//         document.querySelector(".modal .close").onclick = function() {
//             closeModal();
//         }

//         // Initial price update on page load
//         updatePrice();

document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const popup = document.getElementById('popup');
    const okBtn = document.getElementById('okBtn');

    addToCartBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    okBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
