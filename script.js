
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

        // Load saved theme preference
        if (localStorage.getItem('isDark') === 'true') {
            body.classList.add('dark');
            modeText.innerText = "Light mode";
        } else {
            modeText.innerText = "Dark mode";
        }

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");
            if (body.classList.contains("dark")) {
                localStorage.setItem('isDark', 'true');
                modeText.innerText = "Light mode";
            } else {
                localStorage.setItem('isDark', 'false');
                modeText.innerText = "Dark mode";
            }
        });