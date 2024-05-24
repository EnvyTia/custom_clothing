function toggleDropdown(index) {
  // Hide all dropdowns
  var dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('show');
  });

  // Show the selected dropdown
  var selectedDropdown = document.getElementById('dropdown' + index);
  selectedDropdown.classList.add('show');
  
  // Highlight the corresponding slide
  var slides = document.querySelectorAll('.slider img');
  slides.forEach(function(slide) {
      slide.classList.remove('active');
  });
  var selectedSlide = document.getElementById('slide' + index);
  selectedSlide.classList.add('active');
}