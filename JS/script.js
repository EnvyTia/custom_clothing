
// const body = document.querySelector('body'),
// sidebar = body.querySelector('nav'),
// toggle = body.querySelector(".toggle"),
// //   searchBtn = body.querySelector(".search-box"),
// modeSwitch = body.querySelector(".toggle-switch"),
// modeText = body.querySelector(".mode-text");


// toggle.addEventListener("click" , () =>{
// sidebar.classList.toggle("close");
// })

// modeSwitch.addEventListener("click" , () =>{
// body.classList.toggle("dark");

// if(body.classList.contains("dark")){
//   modeText.innerText = "Light mode";
// }else{
//   modeText.innerText = "Dark mode";
  
// }
// });


const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

// Load theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark");
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }

    // Remove the hidden class to prevent flash
    body.classList.remove("hidden");
});

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Save the preference to localStorage
    if (body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "true");
        modeText.innerText = "Light mode";
    } else {
        localStorage.setItem("darkMode", "false");
        modeText.innerText = "Dark mode";
    }
});
