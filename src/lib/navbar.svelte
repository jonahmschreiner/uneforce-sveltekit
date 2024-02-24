<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.logo {
  font-family: 'Montserrat';
  font-weight: 900;
  color: #000000;
  text-decoration: none;
  font-size: 38px;
  margin-left: 90px;
  padding-bottom: 5px;
}



.link {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  color: #555;
  font-size: 16px;
  margin-left: 55px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  transition: transform 0.5s;
  padding-bottom: 5px;
}

.link:before, .link:after, .link-product:before, .link-product:after {
  transition: all .5s;
}

.link:after, .link-product:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: #000;
  height: 2px;
}

.link:hover:after, .link-product:hover:after {
  width: 100%;
}

.link:hover {
  transform: perspective(0px) rotateX(0deg);
}

.link-product {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  color: #555;
  font-size: 16px;
  margin-left: 55px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  transition: transform 0.5s;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 5px;
}

.hidden {
  display: none;
}

.link-product:hover {
  transform: perspective(0px) rotateX(0deg);
}

.navbar-cta {
  background-color: #0077B5;
  color: #FFFFFF;
  border: none;
  width: 120px;
  height: 40px;
  margin-right: 120px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 5px;
}

.navbar-cta:hover {
  background-color: #005685;
}

.navbar-column-left {
  display: inline-flex;
  width: 50%;
  align-items: center;
}

.navbar-column-right {
  display: inline-flex;
  width: 50%;
  justify-content: right;
  align-items: center;
}

.navbar-container {
  display: flex;
  margin-bottom: 30px;
}

.navbar {
  width: 100%;
  padding-top: 35px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #5555551F;
  position: fixed;
  top: 0;
  background-color: #FFFFFF;
  z-index: 9999;
}

.menu-button {
  display: none;
  height: 40px;
  width: 40px;
  margin-right: 20px;
}

.dropdown-product {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 400px 400px 400px; 
  width: 100%;
  grid-column-gap: 30px;
  /*grid-row-gap: 30px;*/
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.dropdown-product-category {
  margin: 0px;
  font-family: 'Lato', sans-serif;
  color: #555555;
}

.dropdown-product-categories {
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 400px 400px 400px;
grid-column-gap: 30px;
justify-content: center;
align-items: center;
margin-bottom: 20px;
}

.dropdown-product-links-container-know {
  width: 400px;
  display: flex;
  text-decoration: none;
  justify-content: left;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 70px;
}

.dropdown-product-links-container-know:hover {
  background-color: #E4A4431F;
}

.dropdown-product-links-container-do {
  width: 400px;
  display: flex;
  text-decoration: none;
  justify-content: left;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 70px;
}

.dropdown-product-links-container-do:hover {
  background-color: #0077B51F;
}

.dropdown-product-links-container-learn {
  width: 400px;
  display: flex;
  text-decoration: none;
  justify-content: left;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 70px;
}

.dropdown-product-links-container-learn:hover {
  background-color: #135B121F;
}

.dropdown-product-link {
  display: flex;
  align-items: center;
}
.dropdown-product-link-text {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 12px;
}

.dropdown-product-link-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.dropdown-product-link-header {
  font-family: 'Montserrat';
  font-weight: 800;
  color: #000000;
  font-size: 19px;
  margin: 0px;
}

.dropdown-product-category-container {
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #5555551F;
  width: 400px;
}

.dropdown-product-category-image {
  height: 25px;
  width: auto;
  margin: 10px;
}

.dropdown-product-link-description {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  color: #555;
  font-size: 16px;
  height: auto;
  max-width: 100%;
  margin-top: 5px;
  margin-bottom: 0px;
}

@media (max-width: 1300px) and (min-width: 600px) {
  .link {
      display: none;
  }

  .link-product {
      display: none;
  }

  .menu-button {
      display: inline-flex;
  }

  .navbar-cta {
      margin-right: 25px;
  }

  .dropdown-product-container-parent {
    display: none;
  }
}

@media (max-width: 600px) and (min-width: 450px) {
  .navbar-cta {
      display: none;
  }

  .link {
      display: none;
  }

  .link-product {
    display: none;
}

  .menu-button {
      display: inline-flex;
  }    
}

@media (max-width: 450px) and (min-width: 340px) {
  .logo {
      margin-left: 25px;
  }

  .navbar-cta {
      display: none;
  }

  .link {
      display: none;
  }

  .link-product {
    display: none;
}

  .menu-button {
      display: inline-flex;
  }
}

@media (max-width: 340px) {
  .logo {
    margin-left: 25px;
    font-size: 25px;
  }

  .navbar-cta {
    display: none;
  }

  .link {
    display: none;
  }

  .link-product {
    display: none;
}

  .menu-button {
    display: inline-flex;
  }
}

</style>

<script>
    import { goto } from '$app/navigation';
</script>

<nav class="navbar">
  <div class="navbar-container">
    <div class="navbar-column-left">
      <button on:click={goto("/")} class="logo">UNEFORCE</button>
      <h4 class="link-product">Product</h4>
      <button on:click={goto("/pricing")} class="link">Pricing</button>
      <button on:click={goto("/comparisons")} class="link">Comparisons</button>
      <button on:click={goto("/customers")} class="link">Customers</button>
      <button on:click={goto("/")} class="link hidden">Learn</button>
    </div>
    <div class="navbar-column-right">
        <button on:click={goto("/trial")} class="navbar-cta">Try free</button>
        <img src='menuButton.png' alt="Three black bars stacked vertically to represent the menu button." class="menu-button" id="menu-button">
    </div>
  </div>

  <div class="dropdown-product-container-parent hidden">
    <div class="dropdown-product-categories">
          <div class="dropdown-product-category-container">
            <img src="lightbulbGraphic.png" alt="Lightbulb icon that symbolizes Know" class="dropdown-product-category-image">
            <h4 class="dropdown-product-category">Know</h4>
          </div>
          <div class="dropdown-product-category-container">
            <img src="checkmarkGraphic.png" alt="Checkmark icon that symbolizes Do" class="dropdown-product-category-image">
            <h4 class="dropdown-product-category">Do</h4>
          </div>
          <div class="dropdown-product-category-container">
            <img src="learnGraphic.png" alt="Line-graph-going-up icon that symbolizes Learn" class="dropdown-product-category-image">
            <h4 class="dropdown-product-category">Learn</h4>
          </div>
    </div>
    <div class="dropdown-product">
  
      <button on:click={goto("/product/clarify")} class="dropdown-product-links-container-know">
          <div class="dropdown-product-link">
            <div class="dropdown-product-link-text">
              <h3 class="dropdown-product-link-header">Clarify</h3>
              <p class="dropdown-product-link-description">Have the info you need where you need it.</p>
            </div>
          </div>
      </button>

      <button on:click={goto("/product/automation")} class="dropdown-product-links-container-know">
          <div class="dropdown-product-link">
            <div class="dropdown-product-link-text">
              <h3 class="dropdown-product-link-header">Automation</h3>
              <p class="dropdown-product-link-description">Create automation for any use case you can imagine.</p>
            </div>
          </div>
      </button>

      <button on:click={goto("/product/insights")} class="dropdown-product-links-container-know">
          <div class="dropdown-product-link">
            <div class="dropdown-product-link-text">
              <h3 class="dropdown-product-link-header">Insights</h3>
              <p class="dropdown-product-link-description">Make data-driven business decisions with custom real-time reporting.</p>
            </div>
          </div>
      </button>

      <button on:click={goto("/product/secure")} class="dropdown-product-links-container-know">
          <div class="dropdown-product-link">
            <div class="dropdown-product-link-text">
              <h3 class="dropdown-product-link-header">Secure</h3>
              <p class="dropdown-product-link-description">Use the same cutting-edge security as Fortune 500 companies.</p>
            </div>
          </div>
      </button>

      <button on:click={goto("/product/cloud")} class="dropdown-product-links-container-know">
          <div class="dropdown-product-link">
            <div class="dropdown-product-link-text">
              <h3 class="dropdown-product-link-header">Cloud</h3>
              <p class="dropdown-product-link-description">Access from anywhere.</p>
            </div>
          </div>
      </button>

    </div>
  </div>
</nav>
