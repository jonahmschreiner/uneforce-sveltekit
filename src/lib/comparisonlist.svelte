<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.comparison-list-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
}

.comparison-list-table-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 60px;
    place-items: center;
}

.comparison-list-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color: black;
    border-width: 4px;
}

.comparison-list-column-list {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 100px;
    place-items: center;
    grid-row-gap: 30px;
    margin-bottom: 30px;
}

.comparison-list-row-number {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 25px;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
    background-image: url("listCircleGraphic.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.comparison-list-heading {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 100px;
}

.comparison-list-column-heading {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 35px;
    text-align: center;
    margin-top: 0px;
}

.comparison-list-row-description {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 200%;
    max-width: 90%;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: left;
}

.comparison-list-emotion-graphic {
    width: 125px;
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}

@media (max-width: 1640px) {
    .comparison-list-container {
        margin-left: 150px;
        margin-right: 150px;
    }
}

@media (max-width: 1575px) {
    .comparison-list-row-description {
        font-size: 20px;
    }

    .comparison-list-row-number {
        font-size: 22px;
        width: 45px;
        height: 45px;
    }
}

@media (max-width: 1385px) {
    .comparison-list-row-description {
        font-size: 18px;
    }

    .comparison-list-row-number {
        font-size: 20px;
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 1215px) {
    .comparison-list-table-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 100px;
    }

    .comparison-list-row-description {
        font-size: 20px;
    }

    .comparison-list-row-number {
        font-size: 22px;
        width: 45px;
        height: 45px;
    }

    .comparison-list-container {
        margin-left: 200px;
        margin-right: 200px;
    }
}

@media (max-width: 970px) {
    .comparison-list-row-description {
        font-size: 18px;
    }

    .comparison-list-row-number {
        font-size: 20px;
        width: 40px;
        height: 40px;
    }

    .comparison-list-container {
        margin-left: 150px;
        margin-right: 150px;
    }
}

@media (max-width: 770px) {
    .comparison-list-container {
        margin-left: 50px;
        margin-right: 50px;
    }

    .comparison-list-column {
        width: 80%;
    }
}

@media (max-width: 620px) {
    .comparison-list-column {
        width: 90%;
    }

    .comparison-list-column-heading {
        font-size: 30px;
    }

    .comparison-list-row-description {
        font-size: 16px;
    }
}

@media (max-width: 520px) {
    .comparison-list-container {
        margin-left: 20px;
        margin-right: 20px;
    }

    .comparison-list-heading {
        font-size: 30px;
    }

    .comparison-list-emotion-graphic {
        height: 80px;
        width: 80px;
    }

    .comparison-list-column-heading {
        max-width: 75%;
    }

    .comparison-list-column-list {
        grid-template-columns: 1fr;
        grid-template-rows: 0.2fr 1fr 0.2fr 1fr 0.2fr 1fr 0.2fr 1fr 0.2fr 1fr 0.2fr 1fr 0.2fr 1fr;
        margin-top: 40px;
        grid-row-gap: 0px;
    }

    .comparison-list-row-description {
        text-align: center;
        margin-bottom: 40px;
    }
}
</style>

<script>
    export let comparisonname;
    export let comparisonreason1;
    export let comparisonreason2;
    export let comparisonreason3;
    export let comparisonreason4;
    export let comparisonreason5;
    export let comparisonreason6;
    export let comparisonreason7;
</script>

<div class="comparison-list-container">
    <h2 class="comparison-list-heading">Which platform is right for you?</h2>
    <div class="comparison-list-table-container">
        <div class="comparison-list-column">
            <img src="smileyFace.png" alt="Smiley face" class="comparison-list-emotion-graphic">
            <h3 class="comparison-list-column-heading">Uneforce is for you if:</h3>
            <div class="comparison-list-column-list">
                <p class="comparison-list-row-number">1</p>
                <p class="comparison-list-row-description">You’re tired of paying large annual fees to keep using outdated software.</p>
                <p class="comparison-list-row-number">2</p>
                <p class="comparison-list-row-description">You want the freedom to quickly add and edit functionality for your unique use cases</p>
                <p class="comparison-list-row-number">3</p>
                <p class="comparison-list-row-description">You want your team to know exactly what to prioritize and have quick turnarounds</p>
                <p class="comparison-list-row-number">4</p>
                <p class="comparison-list-row-description">You want real-time feedback on office activity via customized dashboards and notifications</p>
                <p class="comparison-list-row-number">5</p>
                <p class="comparison-list-row-description">You want a modern interface that doesn’t look ten years out of date</p>
                <p class="comparison-list-row-number">6</p>
                <p class="comparison-list-row-description">You want to securely work from any device all around the globe</p>
                <p class="comparison-list-row-number">7</p>
                <p class="comparison-list-row-description">You want the same cutting-edge security as Fortune 100 companies</p>
            </div>
        </div>

        <div class="comparison-list-column">
            <img src="frownyFace.png" alt="Frowney face" class="comparison-list-emotion-graphic">
            <h3 class="comparison-list-column-heading">{comparisonname} is for you if:</h3>
            <div class="comparison-list-column-list">
                <p class="comparison-list-row-number">1</p>
                <p class="comparison-list-row-description">{comparisonreason1}</p>
                <p class="comparison-list-row-number">2</p>
                <p class="comparison-list-row-description">{comparisonreason2}</p>
                <p class="comparison-list-row-number">3</p>
                <p class="comparison-list-row-description">{comparisonreason3}</p>
                <p class="comparison-list-row-number">4</p>
                <p class="comparison-list-row-description">{comparisonreason4}</p>
                <p class="comparison-list-row-number">5</p>
                <p class="comparison-list-row-description">{comparisonreason5}</p>
                <p class="comparison-list-row-number">6</p>
                <p class="comparison-list-row-description">{comparisonreason6}</p>
                <p class="comparison-list-row-number">7</p>
                <p class="comparison-list-row-description">{comparisonreason7}</p>
            </div>
        </div>
    </div>
</div>