<style>

.cta-horizontal-bar {
    height: 6px;
    background-color: #0077B5;
    margin-bottom: 20px;
    width: 70%;
}

.button-try {
    background-color: #0077B5;
    color: #FFFFFF;
    border: none;
    width: 360px;
    height: 60px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
}

.button-try:hover {
    background-color: #005685;
}

.cta-parent-container {
    margin-top: 150px;
    margin-bottom: 100px;
}

.cta-header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
}

.cta-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    max-width: 1100px;
    text-align: center;
}

.cta-checkbox-row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cta-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    line-height: 200%;
    max-width: 1200px;
    color: #555555;
    margin: 0px;
}

.cta-checkbox {
    height: 30px;
    width: auto;
    margin-right: 10px;
}

@media (max-width: 1640px) {
    .cta-h1 {
        font-size: 60px;
        max-width: 1000px;
    }

    .cta-p {
        font-size: 25px;
        max-width: 1200px;
    }
    
    .cta-checkbox {
        height: 28px;
        margin-right: 10px;
    }
}

@media (max-width: 1575px) {
    .cta-h1 {
        font-size: 56px;
        max-width: 900px;
    }

    .cta-p {
        font-size: 23px;
        max-width: 1200px;
    }
    
    .cta-checkbox {
        height: 26px;
        margin-right: 10px;
    }
}

@media (max-width: 1385px) {
    .cta-h1 {
        font-size: 50px;
        max-width: 800px;
    }

    .cta-horizontal-bar {
        width: 75%;
    }

    .cta-p {
        font-size: 21px;
        max-width: 1200px;
    }
    
    .cta-checkbox {
        height: 24px;
        margin-right: 10px;
    }

    .button-try {
        width: 320px;
    }
}

@media (max-width: 1215px) {
    .cta-horizontal-bar {
        width: 80%;
    }
    .cta-h1 {
        font-size: 42px;
        max-width: 700px;
    }

    .cta-p {
        font-size: 19px;
        max-width: 1200px;
    }
    
    .cta-checkbox {
        height: 21px;
        margin-right: 10px;
    }

    .button-try {
        width: 260px;
    }
}

@media (max-width: 770px) {
    .cta-h1 {
        font-size: 30px;
        max-width: 500px;
    }

    .cta-p {
        font-size: 15px;
        max-width: 400px;
    }
    
    .cta-checkbox {
        height: 18px;
        margin-right: 10px;
    }

    .cta-parent-container {
        margin-top: 120px;
        margin-bottom: 50px;
    }
}

@media (max-width: 520px) {
    .cta-h1 {
        font-size: 24px;
        max-width: 400px;
    }

    .cta-parent-container {
        margin-top: 100px;
    }
    .cta-checkbox {
        height: 18px;
        margin-right: 10px;
        margin-left: 20px;
    }
    .cta-checkbox-row{
        margin-bottom: 10px;
    }
    .cta-p {
        margin-right: 20px;
        font-size: 14px;
        max-width: 400px;
    }
}

@media (max-width: 330px) {
    .cta-h1 {
        font-size: 20px;
        max-width: 250px;
    }

    .button-try {
        width: 220px;
        margin-right: 0px;
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
    function goToTrial () {
        goto("/trial");
    }
</script>
<div class="cta-parent-container">
    <div class="cta-header-container">
        <div class="cta-horizontal-bar"></div>
        <h1 class="cta-h1">We put the limits of your potential back in your hands</h1>
        <div class="cta-checkbox-row">
            <img src="/checkboxGraphic.png" alt="Checkbox" class="cta-checkbox">
            <p class="cta-p">Fully customizable (easily build whole workflows instead of just custom fields)</p>
        </div>
        <div class="cta-checkbox-row">
            <img src="/checkboxGraphic.png" alt="Checkbox" class="cta-checkbox">
            <p class="cta-p">Enterprise-grade security (used by Fortune 100 companies)</p>
        </div>
        <div class="cta-checkbox-row">
            <img src="/checkboxGraphic.png" alt="Checkbox" class="cta-checkbox">
            <p class="cta-p">Pre-built automation (simplify workflow from the start)</p>
        </div>
    </div>
    <div class="cta-header-container">
        <button class="button-try" on:click={() => gotoTrial}>Try Uneforce free</button>
    </div>
</div>