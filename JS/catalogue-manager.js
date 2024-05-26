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
//   // Find the parent section of the clicked button
//   var section = document.querySelector('#dropdown' + index).closest('.catalogues');
  
//   // Hide all dropdowns within this section
//   var dropdowns = section.querySelectorAll('.dropdown-content');
//   dropdowns.forEach(function(dropdown) {
//       dropdown.classList.remove('show');
//   });

//   // Show the selected dropdown within this section
//   var selectedDropdown = section.querySelector('#dropdown' + index);
//   selectedDropdown.classList.add('show');
  
//   // Highlight the corresponding slide within this section
//   var slides = section.querySelectorAll('.slider img');
//   slides.forEach(function(slide) {
//       slide.classList.remove('active');
//       slide.style.opacity = '0';
//   });
//   var selectedSlide = section.querySelector('#slide' + index);
//   selectedSlide.classList.add('active');
//   selectedSlide.style.opacity = '1';
// }
