<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.comparison-reasons-heading {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 65px;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 150px;
}

.comparison-reasons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    margin-bottom: 250px;
}

.comparison-reasons-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px 600px 600px 600px 600px 600px 600px;
    grid-column-gap: 100px;
    grid-row-gap: 250px;
    place-items: center;
}

.comparison-reasons-graphic-container {
    border-style: solid;
    border-width: 4px;
    border-color: black;
    height: 680px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.comparison-reasons-hidden{
    display: none;
}

.comparison-reasons-text {
    height: auto;
    width: 100%;
    padding-left: 10%;
}

.button-learn-more {
    background-color: #FFFFFF;
    color: #000000;
    border: solid;
    border-color: #000000;
    border-width: 4px;
    width: 240px;
    height: 60px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.button-learn-more:hover {
    background-color: #000000;
    color: #FFFFFF;
}

.comparison-reasons-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 200%;
    max-width: 90%;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 10px;
    text-align: left;
}

.comparison-reasons-h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 45px;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 20px;
}

.comparison-reasons-graphic-1 {
    width: 250px;
    height: auto;
}

.comparison-reasons-graphic-2 {
    width: 400px;
    height: auto;
}

.comparison-reasons-graphic-screenshot {
    width: 600px;
    height: auto;
    border-style: solid;
    border-color: black;
    border-width: 3px;
}

.comparison-reasons-graphic-6 {
    width: 500px;
    height: auto;
}

.comparison-reasons-graphic-7 {
    width: 250px;
    height: auto;
}

@media (max-width: 1640px) {
    .comparison-reasons-graphic-1 {
        width: 180px;
    }

    .comparison-reasons-graphic-2 {
        width: 320px;
    }

    .comparison-reasons-graphic-screenshot {
        width: 450px;
    }

    .comparison-reasons-graphic-6 {
        width: 420px;
    }

    .comparison-reasons-graphic-7 {
        width: 220px;
    }

    .comparison-reasons-graphic-container {
        height: 550px;
    }

    .comparison-reasons-grid {
        grid-row-gap: 100px;
    }
}

@media (max-width: 1575px) {
    .comparison-reasons-graphic-1 {
        width: 180px;
    }

    .comparison-reasons-graphic-2 {
        width: 280px;
    }

    .comparison-reasons-graphic-screenshot {
        width: 380px;
    }

    .comparison-reasons-graphic-6 {
        width: 300px;
    }

    .comparison-reasons-graphic-7 {
        width: 180px;
    }

    .comparison-reasons-graphic-container {
        height: 450px;
    }

    .comparison-reasons-grid {
        grid-row-gap: 0px;
    }
}

@media (max-width: 1385px) {
    .comparison-reasons-container {
        margin-left: 100px;
        margin-right: 100px;
    }

    .comparison-reasons-graphic-container {
        height: 500px;
    }
}

@media (max-width: 1215px) {
    .comparison-reasons-grid {
        grid-template-columns: 1fr;
        grid-template-rows: 420px 420px 420px 420px 420px 420px 420px 420px 420px 420px 420px 420px 420px 420px;
    }

    .comparison-reasons-hidden {
        display: flex;
    }

    .comparison-reasons-hideable {
        display: none;
    }

    .comparison-reasons-graphic-7 {
        width: 150px;
    }

    .comparison-reasons-graphic-container {
        height: 400px;
        width: 50%;
    }

    .comparison-reasons-graphic-screenshot {
        width: 300px;
    }

    .comparison-reasons-p {
        margin-right: 0px;
        text-align: center;
        margin-bottom: 20px;
        font-size: 20px;
    }

    .comparison-reasons-h3 {
        font-size: 40px;
    }

    .comparison-reasons-text {
        padding-left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .button-learn-more {
        margin-bottom: 0px;
        margin-right: 0px;
    }

    .comparison-reasons-container {
        margin-bottom: -100px;
    }
}

@media (max-width: 970px) {
    .comparison-reasons-graphic-container {
        height: 400px;
        width: 70%;
    }

    .comparison-reasons-p {
        font-size: 19px;
    }

    .comparison-reasons-h3 {
        font-size: 38px;
        margin-bottom: 10px;
        text-align: center;
    }
}

@media (max-width: 770px) {
    .comparison-reasons-graphic-container {
        height: 400px;
        width: 90%;
    }

    .comparison-reasons-container {
        margin-right: 30px;
        margin-left: 30px;
    }
}

@media (max-width: 520px) {
    .comparison-reasons-graphic-1 {
        width: 100px;
    }

    .comparison-reasons-graphic-2 {
        width: 150px;
    }

    .comparison-reasons-graphic-screenshot {
        width: 200px;
    }

    .comparison-reasons-graphic-6 {
        width: 200px;
    }

    .comparison-reasons-graphic-7 {
        width: 90px;
    }

    .comparison-reasons-graphic-container {
        height: 250px;
    }

    .comparison-reasons-p {
        font-size: 17px;
    }

    .comparison-reasons-grid {
        grid-template-rows: 400px 400px 400px 400px 400px 400px 400px 400px 400px 400px 400px 400px 400px 400px;
    }

    .comparison-reasons-heading {
        font-size: 45px;
        margin-top: 25px;
        margin-bottom: 50px;
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

<div class="comparison-reasons-container">
    <h2 class="comparison-reasons-heading">7 reasons people choose Uneforce</h2>
    <div class="comparison-reasons-grid">
        <div class="comparison-reasons-graphic-container">
            <img src="/reason1Graphic.png" alt="Graphic showing the change from paying $50k a year to only $800" class="comparison-reasons-graphic-1">
        </div>
        <div class="comparison-reasons-text">
            <h3 class="comparison-reasons-h3">Buy once, use forever</h3>
            <p class="comparison-reasons-p">After setup, you only need to pay for Salesforce licenses to keep using the platform (around $800 total per year for most offices).</p>
            <button on:click={() => goto("/pricing")} class="button-learn-more">Learn more</button>
        </div>

        <div class="comparison-reasons-graphic-container comparison-reasons-hidden">
            <img src="/reason2Graphic.png" alt="Graphic showing the platform's adaptiveness to offices' unique use cases." class="comparison-reasons-graphic-2">
        </div>
        <div class="comparison-reasons-text">
            <h3 class="comparison-reasons-h3">Customization freedom</h3>
            <p class="comparison-reasons-p">The platform enables the tracking of all office activities in one place (no matter how unique) and gives you full control over your operational efficiency through automation.</p>
            <button on:click={() => goto("/product/automation")} class="button-learn-more">Learn more</button>
        </div>
        <div class="comparison-reasons-graphic-container comparison-reasons-hideable">
            <img src="/reason2Graphic.png" alt="Graphic showing the platform's adaptiveness to offices' unique use cases." class="comparison-reasons-graphic-2">
        </div>


        <div class="comparison-reasons-graphic-container">
            <img src="/UserHomepageDashboardScreenshot.png" alt="Screenshot showing a team member's custom home page." class="comparison-reasons-graphic-screenshot">
        </div>
        <div class="comparison-reasons-text">
            <h3 class="comparison-reasons-h3">Clarity for your team</h3>
            <p class="comparison-reasons-p">The most high-impact tasks are automatically placed on your team’s home dashboards with links to the materials needed to complete them.</p>
            <button on:click={() => goto("/product/clarify")} class="button-learn-more">Learn more</button>
        </div>

        <div class="comparison-reasons-graphic-container comparison-reasons-hidden">
            <img src="/MetricsDashboardScreenshot.png" alt="Screenshot showing a dashboard for managers." class="comparison-reasons-graphic-screenshot">
        </div>
        <div class="comparison-reasons-text">
            <h3 class="comparison-reasons-h3">Transparency for management</h3>
            <p class="comparison-reasons-p">Know exactly how both your office and individuals are performing as well as the impact of monetization efforts so you can quickly make decisions to optimize operations.</p>
            <button on:click={() => goto("/product/insights")} class="button-learn-more">Learn more</button>
        </div>
        <div class="comparison-reasons-graphic-container comparison-reasons-hideable">
            <img src="/MetricsDashboardScreenshot.png" alt="Screenshot showing a dashboard for managers." class="comparison-reasons-graphic-screenshot">
        </div>



        <div class="comparison-reasons-graphic-container">
            <img src="/interfaceScreenshot.png" alt="Screenshot showing the modernized interface." class="comparison-reasons-graphic-screenshot">
        </div>
        <div class="comparison-reasons-text">
            <h3 class="comparison-reasons-h3">Modern interface</h3>
            <p class="comparison-reasons-p">Having all the information your team needs, right where they need it means more time monetizing and less time doing admin work.</p>
            <button on:click={() => goto("/product/clarify")} class="button-learn-more">Learn more</button>
        </div>

        <div class="comparison-reasons-graphic-container comparison-reasons-hidden">
            <img src="/reason6Graphic.png" alt="Cloud representing that Uneforce is cloud based." class="comparison-reasons-graphic-6">
        </div>
        <div class="comparison-reasons-text">
            <h3 class="comparison-reasons-h3">Cloud-based</h3>
            <p class="comparison-reasons-p">Being able to monetize and update your team from anywhere makes the world your office.</p>
            <button on:click={() => goto("/product/cloud")} class="button-learn-more">Learn more</button>
        </div>
        <div class="comparison-reasons-graphic-container comparison-reasons-hideable">
            <img src="/reason6Graphic.png" alt="Cloud representing that Uneforce is cloud based." class="comparison-reasons-graphic-6">
        </div>

        

        <div class="comparison-reasons-graphic-container">
            <img src="/reason7Graphic.png" alt="Lock representing the level of security that can't be found anywhere else with TTO management software." class="comparison-reasons-graphic-7">
        </div>
        <div class="comparison-reasons-text">
            <h3 class="comparison-reasons-h3">Enterprise-grade security</h3>
            <p class="comparison-reasons-p">Using the same platform as Fortune 100 companies means that security is held to the highest standard and constantly updated to keep your organization safe.</p>
            <button on:click={() => goto("/product/secure")} class="button-learn-more">Learn more</button>
        </div>
    </div>
</div>