<style>
.book-demo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 150px;
}

.book-demo-left-column {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.book-demo-right-column {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.book-demo-right-column-container {
    border-style: solid;
    border-width: 4px;
    border-color: black;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
    width: 70%;
    margin-top: 40px;
}

.book-demo-checkbox-line {
    display: flex;
    align-items: flex-start;
    height: 60px;
    padding-left: 100px;
    max-width: 650px;
}

.book-demo-checkbox {
    width: 30px;
    height: 29px;
}

.book-demo-h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 32px;
    max-width: 500px;
}

.book-demo-field-label {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 18px;
    max-width: 500px;
    margin-bottom: 0;
    margin-top: 18px;
}

.book-demo-field {
    display: flex;
    flex-direction: column;
}

.book-demo-input {
    width: 100%;
    height: 30px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 18px;
}

.book-demo-submit {
    background-color: #0077B5;
    color: #FFFFFF;
    border: none;
    width: 140px;
    height: 40px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 20px;
}

.book-demo-submit:hover {
    background-color: #005685;
}

.book-demo-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
    line-height: 150%;
}

.book-demo-p2 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 150%;
}

.trial-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 55px;
    max-width: 600px;
    margin-bottom: 10px;
}

.trial-description {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 24px;
    max-width: 650px;
    margin-bottom: 30px;
    line-height: 200%;
}

@media (max-width: 1665px) {
    .book-demo-container {
        margin-left: 100px;
        margin-right: 100px;
    }
}

@media (max-width: 1650px) {
    .book-demo-checkbox-line {
        padding-left: 50px;
    }
}

@media (max-width: 1575px) {
    .book-demo-p {
        font-size: 18px;
    }

    .book-demo-checkbox {
        width: 20px;
        height: 19px;
    }

    .book-demo-right-column {
        padding-left: 80px;
    }
}

@media (max-width: 1385px) {
    .book-demo-checkbox-line {
        height: 80px;
    }

    .book-demo-checkbox {
        margin-top: 3px;
    }
}

@media (max-width: 1215px) {
    .trial-h1 {
        text-align: center;
    }

    .trial-description {
        text-align: center;
        max-width: 550px;
    }

    .book-demo-container {
        flex-direction: column;
    }

    .book-demo-right-column {
        padding-left: 0px;
        width: 100%;
    }

    .book-demo-left-column {
        width: 100%;
        align-items: center;
    }

    .book-demo-h2 {
        text-align: center;
    }

    .book-demo-p {
        text-align: center;
        max-width: 500px;
    }

    .book-demo-p2 {
        text-align: center;
        max-width: 400px;
    }

    .book-demo-checkbox-line {
        padding-left: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 30px;
    }

    .book-demo-alignment-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

}

@media (max-width: 770px) {

    .trial-h1 {
        font-size: 45px;
    }

    .book-demo-h2 {
        font-size: 30px;
    }

    .book-demo-field-label {
        font-size: 16px;
    }

    .book-demo-container {
        margin-bottom: 100px;
    }
}

@media (max-width: 520px) {
    .trial-h1 {
        font-size: 35px;
    }

    .trial-description {
        font-size: 18px;
    }

    .book-demo-container {
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 110px;
        margin-bottom: 50px;
    }

    .book-demo-p {
        font-size: 16px;
    }

    .book-demo-field-label {
        font-size: 14px;
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
    import Navbar from "../../lib/navbar.svelte";
    import Navbarcolumn from "../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
    let firstname;
    let lastname;
    let title;
    let email;
    let phone;
    let organization;

    async function submitform () {
        //do request trial credentials from salesforce callout
        await fetch('/api/requestTrialFromSalesforce', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, lastname, title, email, phone, organization }),
        });
        goto("/trial-submitted");
    }
</script>


<title>Free Trial</title>
<meta name="description" content="Try free for 72 hours.">
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<div class="book-demo-container">
    <div class="book-demo-left-column">
        <h1 class="trial-h1">Try Uneforce for free</h1>
        <p class="trial-description">Register for a trial and experience the platform first-hand. Here's what to expect:</p>
        <div class="book-demo-left-subcolumn">
            <div class="book-demo-checkbox-line">
                <img src="/checkboxGraphic.png" alt="Checkbox representing a buying criteria Uneforce fulfills" class="book-demo-checkbox">
                <p class="book-demo-p">A guided tour walking you through the main features</p>
            </div>
            <div class="book-demo-checkbox-line">
                <img src="/checkboxGraphic.png" alt="Checkbox representing a buying criteria Uneforce fulfills" class="book-demo-checkbox">
                <p class="book-demo-p">Shareable login credentials and access from any browser</p>
            </div>
            <div class="book-demo-checkbox-line">
                <img src="/checkboxGraphic.png" alt="Checkbox representing a buying criteria Uneforce fulfills" class="book-demo-checkbox">
                <p class="book-demo-p">72 hours to test it out</p>
            </div>
        </div>
    </div>
    <div class="book-demo-right-column">
    <div class="book-demo-right-column-container">
        <div class="book-demo-alignment-container">
            <h2 class="book-demo-h2">Let's get you access!</h2>
            <p class="book-demo-p2">Answer a few questions so we can enable your account</p>
        </div>
        <div class="form">
            <div class="book-demo-field">
                <p class="book-demo-field-label">First Name*</p>
                <input type="text" class="book-demo-input" bind:value={firstname}>
            </div>
            <div class="book-demo-field">
                <p class="book-demo-field-label">Last Name*</p>
                <input type="text" class="book-demo-input" bind:value={lastname}>
            </div>
            <div class="book-demo-field">
                <p class="book-demo-field-label">Title*</p>
                <input type="text" class="book-demo-input" bind:value={title}>
            </div>
            <div class="book-demo-field">
                <p class="book-demo-field-label">Email*</p>
                <input type="text" class="book-demo-input" bind:value={email}>
            </div>
            <div class="book-demo-field">
                <p class="book-demo-field-label">Phone*</p>
                <input type="text" class="book-demo-input" bind:value={phone}>
            </div>
            <div class="book-demo-field">
                <p class="book-demo-field-label">Organization*</p>
                <input type="text" class="book-demo-input" bind:value={organization}>
            </div>
            <div class="book-demo-alignment-container">
                <button on:click={submitform} class="book-demo-submit">Submit</button>
            </div>
        </div>
    </div>
    </div>
</div>