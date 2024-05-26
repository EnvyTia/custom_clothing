function toggleDropdown(index) {
  // Find the parent section of the clicked button
  var section = document.querySelector('#dropdown' + index).closest('.catalogues');
  
  // Hide all dropdowns within this section
  var dropdowns = section.querySelectorAll('.dropdown-content');
  dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('show');
  });

  // Show the selected dropdown within this section
  var selectedDropdown = section.querySelector('#dropdown' + index);
  selectedDropdown.classList.add('show');
  
  // Highlight the corresponding slide within this section
  var slides = section.querySelectorAll('.slider img');
  slides.forEach(function(slide) {
      slide.classList.remove('active');
  });
  var selectedSlide = section.querySelector('#slide' + index);
  selectedSlide.classList.add('active');
}

// function toggleDropdown(index) {
//   // Find the dropdown content element
//   var dropdown = document.querySelector('#dropdown' + index);
  
//   // Check if the dropdown is already shown
//   var isShown = dropdown.classList.contains('show');
  
//   // Hide all dropdowns
//   var allDropdowns = document.querySelectorAll('.dropdown-content');
//   allDropdowns.forEach(function(content) {
//       content.classList.remove('show');
//       content.style.height = '0';
//   });
  
//   // If it was not shown, show it
//   if (!isShown) {
//       dropdown.classList.add('show');
//       dropdown.style.height = dropdown.scrollHeight + 'px'; // Set the height explicitly
//   } else {
//       dropdown.classList.remove('show');
//       dropdown.style.height = '0';
//   }
// }
