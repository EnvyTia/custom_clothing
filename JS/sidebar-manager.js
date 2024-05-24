class SpecialSidebar extends HTMLElement{
  connectedCallback(){
    this.innerHTML =
    <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="images/logo.jpg" alt="comp-logo"></img>
                </span>

                <div class="text logo-text">
                    <span class="company-name">CustClothing</span>
                    <span class="motto">Show your own style</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="index.html">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-book-alt icon' ></i>
                            <span class="text nav-text">Catalogue</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-customize icon' ></i>
                            <span class="text nav-text">Customize</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="notif.html">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Notifications</span>
                        </a>
                    </li>


                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-cart icon' ></i>
                            <span class="text nav-text">Cart</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-cog icon' ></i>
                            <span class="text nav-text">Settings</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class='bx bx-user-circle icon' ></i>
                        <span class="text nav-text">User</span>
                    </a>
                </li>
               

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>
  }
}

customElements.define('special-sidebar', SpecialSidebar)