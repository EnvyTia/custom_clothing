
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
//   searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 123 || // F12
      (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || // Ctrl+Shift+I
                                   e.keyCode == 74 || // Ctrl+Shift+J
                                   e.keyCode == 67)) || // Ctrl+Shift+C
      (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
      e.preventDefault();
  }
});