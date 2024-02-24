<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.competitor-links-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40%;
    justify-content: center;
    align-items: center;
    width: 40%;
}

.comparisons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 200px;
    margin-left: 20px;
    margin-right: 20px;
}

.competitor-button {
    border-style: solid;
    border-color: black;
    border-width: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    text-decoration: none;
}

.competitor-button:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
}

.comparisons-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    max-width: 700px;
    text-align: center;
}

.comparisons-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    line-height: 200%;
    max-width: 1000px;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 80px;
    text-align: center;
}

.comparisons-competitor-name {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    line-height: 200%;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 0px;
    
}

.comparisons-h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 46px;
    max-width: 700px;
    margin-bottom: 100px;
    text-align: center;
    margin-top: 0px;
}

.competitor-logo {
    width: 200px;
    height: auto;
    padding-top: 20px;
}

@media (max-width: 1215px) {
    .competitor-button {
        width: 200px;
        height: 200px;
    }

    .competitor-logo {
        width: 100px;
        height: auto;
    }

    .comparisons-p {
        font-size: 24px;
    }
}

@media (max-width: 770px) {
    .competitor-button {
        width: 150px;
        height: 150px;
    }

    .competitor-logo {
        width: 75px;
        height: auto;
    }

    .comparisons-p {
        font-size: 20px;
    }

    .comparisons-competitor-name {
        font-size: 22px;
    }

    .comparisons-container {
        margin-bottom: 150px;
    }

    .comparisons-h1 {
        font-size: 40px;
    }

    .comparisons-h2 {
        font-size: 35px;
        margin-bottom: 75px;
    }
}

@media (max-width: 520px) {

    .competitor-links-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 50px;
        width: 158px;
    }

    .competitor-button {
        width: 150px;
        height: 150px;
    }

    .competitor-logo {
        width: 75px;
        height: auto;
    }

    .comparisons-p {
        font-size: 18px;
        margin-bottom: 60px;
    }

    .comparisons-competitor-name {
        font-size: 22px;
    }

    .comparisons-container {
        margin-bottom: 100px;
    }

    .comparisons-h1 {
        font-size: 30px;
        margin-bottom: 30px;
        margin-top: 0px;
    }

    .comparisons-h2 {
        font-size: 25px;
        margin-bottom: 75px;
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

<title>Comparisons</title>
<meta name="description" content="How Uneforce compares to other management software in the industry.">

<div class="comparisons-container">
<h1 class="comparisons-h1">How Does Uneforce Compare To The Competition?</h1>
<p class="comparisons-p">It’s hard to find a TTO management platform comparison guide that’s actually useful, so we made our own. Click each comparison for an in-depth analysis.</p>
<h2 class="comparisons-h2">Have a solution in mind?</h2>
<div class="competitor-links-container">
    <button on:click={goto("/comparisons/inteum")} class="competitor-button">
        <img src="/inteumLogo.png" alt="Inteum Logo" class="competitor-logo">
        <p class="comparisons-competitor-name">Inteum</p>
    </button>

    <button on:click={goto("/comparisons/wellspring")} class="competitor-button">
        <img src="/WellspringLogoTransparent.png" alt="Wellspring Logo" class="competitor-logo">
        <p class="comparisons-competitor-name">Wellspring</p>
    </button>
</div>
</div>