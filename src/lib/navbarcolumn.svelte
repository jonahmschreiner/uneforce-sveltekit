<style>
.navbar-column-format {
    flex-direction: column;
    align-items: center;
    z-index: 11000;
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 180px;
  }

  .column-dropdown-product-category-container {
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #5555551F;
    width: 100%;
  }

  .navbar-column-format-container-parent {
    margin-left: 30px;
    margin-right: 30px;
    width: 80%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .column-dropdown-product {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr; 
    width: 100%;
    grid-row-gap: 30px;
    place-items: center;
  }

  .column-dropdown-product-links-container-know {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
  }

  .column-dropdown-product-links-container-do {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
  }

  .column-dropdown-product-links-container-learn {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
  }

  .logo-column {
    font-family: 'Montserrat';
    font-weight: 900;
    color: #000000;
    text-decoration: none;
    font-size: 38px;
    z-index: 12000;
  }

  .flex {
    display: flex;
  }

  .link-column {
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: black;
    font-size: 20px;
  }

  .link-product-column {
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: black;
    font-size: 20px;
    margin: 0;
  }

  .navbar-column-link-container {
    border-bottom-style: solid;
    border-bottom-color: #5555551F;
    border-bottom-width: 1px;
    width: 100%;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .column-dropdown-product-categories {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    place-items: center;
  }


  @media (max-width: 520px) {
    .navbar-column-format {
        margin-top: 120px;
    }
  }

  button {
    cursor: pointer;
    padding: 0;
    background: none;
    border: none;
}
</style>

<script>
    import { goto } from '$app/navigation';
</script>

<div class="navbar-column-format hidden">
    <div class="navbar-column-format-container-parent">
        <div class="navbar-column-link-container">
            <h4 class="link-product-column">Product</h4>
                <div class="column-dropdown-product-container-parent hidden">
                    <div class="column-dropdown-product-categories">
                        <div class="column-dropdown-product-category-container">
                            <img src="lightbulbGraphic.png" alt="Lightbulb icon that symbolizes Know" class="dropdown-product-category-image">
                            <h4 class="dropdown-product-category">Know</h4>
                        </div>
                        <div class="column-dropdown-product">
                            <button on:click={goto("/product/clarify")} class="column-dropdown-product-links-container-know">
                                <div class="dropdown-product-link">
                                    <div class="dropdown-product-link-text">
                                        <h3 class="dropdown-product-link-header">Clarify</h3>
                                        <p class="dropdown-product-link-description">Have the info you need where you need it.</p>
                                    </div>
                                </div>
                            </button>

                            <button on:click={goto("/product/secure")} class="column-dropdown-product-links-container-know">
                                <div class="dropdown-product-link">
                                    <div class="dropdown-product-link-text">
                                        <h3 class="dropdown-product-link-header">Secure</h3>
                                        <p class="dropdown-product-link-description">Use the same cutting-edge security as Fortune 500 companies.</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div class="column-dropdown-product-category-container">
                        <img src="checkmarkGraphic.png" alt="Checkmark icon that symbolizes Do" class="dropdown-product-category-image">
                        <h4 class="dropdown-product-category">Do</h4>
                    </div>

                    <div class="column-dropdown-product">
                        <button on:click={goto("/product/automation")} class="column-dropdown-product-links-container-do">
                            <div class="dropdown-product-link">
                                <div class="dropdown-product-link-text">
                                    <h3 class="dropdown-product-link-header">Automation</h3>
                                    <p class="dropdown-product-link-description">Create automation for any use case you can imagine.</p>
                                </div>
                            </div>
                        </button>

                        <button on:click={goto("/product/cloud")} class="column-dropdown-product-links-container-do">
                            <div class="dropdown-product-link">
                                <div class="dropdown-product-link-text">
                                    <h3 class="dropdown-product-link-header">Cloud</h3>
                                    <p class="dropdown-product-link-description">Access from anywhere.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="column-dropdown-product-category-container">
                        <img src="learnGraphic.png" alt="Line-graph-going-up icon that symbolizes Learn" class="dropdown-product-category-image">
                        <h4 class="dropdown-product-category">Learn</h4>
                    </div>
                    <div class="column-dropdown-product">
                        <button on:click={goto("/product/insights")} class="column-dropdown-product-links-container-learn">
                            <div class="dropdown-product-link">
                                <div class="dropdown-product-link-text">
                                    <h3 class="dropdown-product-link-header">Insights</h3>
                                    <p class="dropdown-product-link-description">Make data-driven business decisions with custom real-time reporting.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
    
            </div>
        </div>

        <div class="navbar-column-link-container">
            <button on:click={goto("/pricing")} class= "link-column">Pricing</button> 
        </div>

        <div class="navbar-column-link-container">
            <button on:click={goto("/comparisons")} class= "link-column">Comparisons</button> 
        </div>

        <div class="navbar-column-link-container">
            <button on:click={goto("/customers")} class= "link-column">Customers</button> 
        </div>

        <div class="navbar-column-link-container">
            <button on:click={goto("/learn")} class= "link-column">Learn</button> 
        </div> 
    </div>
</div>