<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.pricing-prices-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 650px;
    place-items: center;
    margin-top: 50px;
    grid-column-gap: 30px;
    margin-left: 300px;
    margin-right: 300px;
    margin-bottom: 100px;
}

.pricing-price-column {
    border-style: solid;
    border-color: black;
    border-width: 4px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 50px 150px 150px 60px 200px;
    place-items: center;
    height: 100%;
}

.pricing-plan-name {
    color: #0077B5;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    margin-bottom: 15px;
    margin-right: 0;
    margin-left: 0;
    margin-top: 20px;
}

.pricing-plan-cost-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pricing-plan-cost {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    color: black;
    margin: 0;
}

.pricing-cost-label {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #555555;
    padding-top: 10px;
    padding-left: 10px;
}

.pricing-best-for {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.pricing-description-1 {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: black;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
}

.pricing-description-2 {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.pricing-description-text {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 12px;
}

.pricing-description-salesforce-license {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    color: black;
    margin-bottom: 12px;
    margin-top: 6px;
}

.pricing-cta {
    background-color: #0077B5;
    color: #FFFFFF;
    border: none;
    width: 120px;
    height: 40px;
    margin-right: 0px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

.pricing-cta:hover {
    background-color: #005685;
}

.pricing-cta-alternate {
    background-color: black;
    color: #FFFFFF;
    width: 120px;
    height: 40px;
    margin-right: 0px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 16px;
    border-style: solid;
    border-width: 4px;
    border-color: black;
  }

.pricing-cta-alternate:hover {
    background-color: white;
    color: black;
}

.pricing-column-alternate {
    background-color: #0077B5;
}

.pricing-text-alternate {
    color: white;
}

.pricing-description-alternate {
    border-color: white;
}

@media (max-width: 1640px) {
    .pricing-best-for {
        font-size: 18px;
    }

    .pricing-description-text {
        font-size: 18px;
    }

    .pricing-description-text-alternate {
        font-size: 18px;
    }

    .pricing-description-salesforce-license {
        font-size: 12px;
    }

    .pricing-price-column {
        grid-template-rows: 60px 50px 130px 150px 40px 200px;
    }

    .pricing-prices-container {
        grid-template-rows: 590px;
    }
}

@media (max-width: 1575px) {
    .pricing-prices-container {
        margin-left: 200px;
        margin-right: 200px;
    }
}

@media (max-width: 1385px) {
    .pricing-prices-container {
        margin-left: 100px;
        margin-right: 100px;
    }
}

@media (max-width: 1215px) {
    .pricing-prices-container {
        margin-left: 30px;
        margin-right: 30px;
    }
}

@media (max-width: 970px) {
    .pricing-prices-container {
        grid-template-columns: 300px 300px;
        grid-template-rows: 590px 590px;
        place-content: center;
        grid-row-gap: 40px;
    }
}

@media (max-width: 770px) {
    .pricing-prices-container {
        grid-template-columns: 300px;
        grid-template-rows: 540px 540px 540px 540px;
        place-content: center;
        grid-row-gap: 60px;
    }

    .pricing-price-column {
        grid-template-rows: 60px 50px 100px 120px 80px 100px;
        place-items: center;
    }

    .pricing-cta, .pricing-cta-alternate {
        margin-top: 12px;
        font-size: 15px;
    }
}

@media (max-width: 520px) {
    .pricing-prices-container {
        grid-template-columns: 220px;
        grid-template-rows: 540px 540px 540px 540px;
        place-content: center;
        grid-row-gap: 60px;
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

<div class="pricing-prices-container">
    <div class="pricing-price-column">
        <p class="pricing-plan-name">Starter</p>
        <div class="pricing-plan-cost-container">
            <h1 class="pricing-plan-cost">Free</h1>
        </div>
        <p class="pricing-best-for">Best for learning how to use Uneforce</p>
        <div class="pricing-description-1">
            <p class="pricing-description-text" style="padding-bottom: 12px;">Playground populated with mock data</p>
        </div>
        <div class="pricing-description-2">
            <p class="pricing-description-text">Temporary Access</p>
        </div>
        <button on:click={() => goto("/trial")} class="pricing-cta">Try free</button>
    </div>

    <div class="pricing-price-column">
        <p class="pricing-plan-name">Basic</p>
        <div class="pricing-plan-cost-container">
            <h1 class="pricing-plan-cost">$0</h1>
            <p class="pricing-cost-label">/year</p>
        </div>
        <p class="pricing-best-for">Best for offices who don’t need custom solutions or want to build their own</p>
        <div class="pricing-description-1">
            <p class="pricing-description-text">$15k Installation Cost</p>
            <p class="pricing-description-salesforce-license">+ salesforce license yearly cost</p>
        </div>
        <div class="pricing-description-2">
            <p class="pricing-description-text">0 hours of consulting to create your customization requests</p>
        </div>
        <button on:click={() => goto("/demo")} class="pricing-cta">Book Demo</button>
    </div>

    <div class="pricing-price-column pricing-column-alternate">
        <p class="pricing-plan-name pricing-text-alternate">Pro</p>
        <div class="pricing-plan-cost-container">
            <h1 class="pricing-plan-cost pricing-text-alternate">$10k</h1>
            <p class="pricing-cost-label pricing-text-alternate">/year</p>
        </div>
        <p class="pricing-best-for pricing-text-alternate">Best for offices who require some custom solutions and don’t want to build their own</p>
        <div class="pricing-description-1 pricing-description-alternate">
            <p class="pricing-description-text pricing-text-alternate">$12k Installation Cost</p>
            <p class="pricing-description-salesforce-license pricing-text-alternate">+ salesforce license yearly cost</p>
        </div>
        <div class="pricing-description-2">
            <p class="pricing-description-text pricing-text-alternate">60 hours of consulting to create your customization requests</p>
        </div>
        <button on:click={() => goto("/demo")} class="pricing-cta-alternate">Book Demo</button>
    </div>

    <div class="pricing-price-column">
        <p class="pricing-plan-name">Enterprise</p>
        <div class="pricing-plan-cost-container">
            <h1 class="pricing-plan-cost">$20k</h1>
            <p class="pricing-cost-label">/year</p>
        </div>
        <p class="pricing-best-for">Best for offices who require extensive custom solutions</p>
        <div class="pricing-description-1">
            <p class="pricing-description-text">$10k Installation Cost</p>
            <p class="pricing-description-salesforce-license">+ salesforce license yearly cost</p>
        </div>
        <div class="pricing-description-2">
            <p class="pricing-description-text">140 hours of consulting to create your customization requests</p>
        </div>
        <button on:click={() => goto("/demo")} class="pricing-cta">Book Demo</button>
    </div>
</div>