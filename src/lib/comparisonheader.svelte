<style>

.comparison-header-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    text-align: center;
    margin-top: 0px;
}

.comparison-header-container {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.comparison-header-subheading {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 200%;
    max-width: 70%;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 80px;
    text-align: center;
}

.comparison-header-checkbox-description {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 23px;
    line-height: 200%;
    max-width: 70%;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
}

.comparison-header-vs-text {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 200%;
    max-width: 1000px;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
}

.comparison-header-checklist-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 90%;
    margin-bottom: 100px;
}

.comparison-header-checklist-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-right-style: solid;
    border-right-color: #5555551F;
    border-right-width: 1px;
}

.comparison-header-checklist-rightmost-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.comparison-header-checkbox {
    width: 50px;
    height: auto;
    padding-right: 8px;
}

@media (max-width: 1640px) {
    .comparison-header-checklist-container {
        width: 100%;
    }

    .comparison-header-checkbox-description {
        font-size: 21px;
    }

    .comparison-header-checkbox {
        width: 40px;
    }
}

@media (max-width: 1575px) {
    .comparison-header-subheading {
        font-size: 22px;
    }

    .comparison-header-checkbox-description {
        font-size: 19px;
    }

    .comparison-header-checkbox {
        width: 30px;
    }
}

@media (max-width: 1385px) {
    .comparison-header-subheading {
        font-size: 20px;
        max-width: 80%;
    }

    .comparison-header-checkbox-description {
        font-size: 17px;
    }

    .comparison-header-checkbox {
        width: 20px;
    }

    .comparison-header-h1 {
        font-size: 46px;
    }

    .comparison-header-vs-text {
        font-size: 20px;
    }
}

@media (max-width: 1215px) {
    .comparison-header-h1 {
        font-size: 40px;
    }

    .comparison-header-checklist-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-row-gap: 50px;
        margin-bottom: 75px;
    }

    .comparison-header-checklist-column {
        border-right-width: 0px;
    }

    .comparison-header-checkbox-description {
        font-size: 18px;
        border-bottom-style: solid;
        border-bottom-color: #5555551F;
        border-bottom-width: 1px;
        padding-bottom: 40px;
        max-width: 85%;
    }

    .comparison-header-checkbox {
        width: 25px;
    }
}

@media (max-width: 770px) {
    .comparison-header-h1 {
        font-size: 35px;
        max-width: 80%;
    }

    .comparison-header-subheading {
        font-size: 18px;
        max-width: 90%;
    }


}

@media (max-width: 520px) {
    .comparison-header-h1 {
        font-size: 30px;
        max-width: 85%;
    }

    .comparison-header-vs-text {
        font-size: 18px;
    }

    .comparison-header-subheading {
        font-size: 16px;
        max-width: 90%;
        margin-bottom: 50px;
    }

    .comparison-header-checkbox-description {
        font-size: 16px;
    }

    .comparison-header-checkbox {
        width: 20px;
        padding-right: 0px;
    }

    .comparison-header-checklist-container {
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
    export let comparisonvstext;
    export let comparisontitle;
</script>

<div class="comparison-header-container">
    <p class="comparison-header-vs-text">{comparisonvstext}</p>
    <h1 class="comparison-header-h1">{comparisontitle}</h1>
    <p class="comparison-header-subheading">It’s a valid question. And one we can’t answer without bias. So, rather than comparing features side-by-side, we’ll share who Uneforce is for—and not for—and the 7 reasons people switch to Uneforce.</p>
    <div class="comparison-header-checklist-container">
        <div class="comparison-header-checklist-column">
            <img src="checkboxGraphic.png" alt="Checkbox" class="comparison-header-checkbox">
            <p class="comparison-header-checkbox-description">Fully customizable<br>(whole workflows in addition to fields)</p>
        </div>

        <div class="comparison-header-checklist-column">
            <img src="checkboxGraphic.png" alt="Checkbox" class="comparison-header-checkbox">
            <p class="comparison-header-checkbox-description">Enterprise-grade security<br>(used by Fortune 100 companies)</p>
        </div>

        <div class="comparison-header-checklist-rightmost-column">
            <img src="checkboxGraphic.png" alt="Checkbox" class="comparison-header-checkbox">
            <p class="comparison-header-checkbox-description">Pre-built automation<br>(simplify workflow from the start)</p>
        </div>
    </div>

    <button on:click={goto("/trial")} class="button-try">Try Uneforce free</button>
</div>