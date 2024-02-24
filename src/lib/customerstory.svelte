<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.customer-story-h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    margin-top: 30px;
}

.customer-story-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    line-height: 200%;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 50px;
}

.customer-story-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 200px;
    margin-top: 100px;
    margin-left: 200px;
    margin-bottom: -50px;
}

.customer-story-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.customer-story-container-quote {
    background-color: #0077B5;
    border-color: #004C74;
    border-width: 14px;
    border-style: solid;
    width: 110%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 50px;
    margin-bottom: 70px;
}

.customer-story-container-quote-text {
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-size: 27px;
    line-height: 200%;
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: 30px;
    margin-right: 30px;
    max-width: 80%;
    text-align: center;
}


@media (max-width: 1215px) {
    .container-quote-text {
        font-size: 22px;
    }

    .customer-story-container {
        margin-right: 100px;
        margin-left: 100px;
        margin-top: 50px;
    }

    .customer-story-p {
        font-size: 24px;
    }
}

@media (max-width: 770px) {
    .customer-story-container-quote-text {
        font-size: 24px;
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 15px;
        margin-right: 15px;
    }

    .customer-story-container-quote {
        margin-top: 60px;
    }

    .customer-story-container {
        margin-right: 50px;
        margin-left: 50px;
    }
}

@media (max-width: 520px) {
    .customer-story-container-quote-text {
        text-align: center;
        margin-top: 100px;
    }
    .customer-story-container-quote {
        margin-top: 100px;
    }
}

@media (max-width: 330px) {
    .container-quote {
        margin-top: 100px;
        width: 85%;
    }
    .container-quote-text {
        font-size: 16px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 80px;
    }
}


</style>

<script>
    export let story_introduction;
    export let why_uneforce;
    export let quote_1;
    export let reason_1;
    export let reason_1_story;
    export let quote_2;
    export let advice;
    export let advice_quote;
</script>

<div class="customer-story-container">
    <div class="customer-story-text-container">
    <p class="customer-story-p">{story_introduction}</p>
    <h2 class="customer-story-h2">Why Uneforce?</h2>
    <p class="customer-story-p">{why_uneforce}</p>
    </div>
    <div class="customer-story-container-quote">
        <p class="customer-story-container-quote-text">{quote_1}</p>
    </div>
    <div class="customer-story-text-container">
    <h2 class="customer-story-h2">{reason_1}</h2>
    <p class="customer-story-p">{reason_1_story}</p>
    </div>
    <div class="customer-story-container-quote">
        <p class="customer-story-container-quote-text">{quote_2}</p>
    </div>
    <div class="customer-story-text-container">
    <h2 class="customer-story-h2">Advice to other tech transfer offices?</h2>
    <p class="customer-story-p">{advice}</p>
    </div>
    <div class="customer-story-container-quote">
        <p class="customer-story-container-quote-text">{advice_quote}</p>
    </div>
</div>