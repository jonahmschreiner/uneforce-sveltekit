<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.container-hero {
    display: flex;
    margin-right: 30px;
    margin-left: 150px;
    margin-top: 220px;
}

.column-hero-left {
    flex: 1;
    width: 50%;
}

.column-hero-right {
    flex: 1;
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: -150px;
}

.hero-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    max-width: 650px;
}

.hero-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    display: flex;
}

.button-row-container {
    display: inline-flex;
}

.button-demo {
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
    text-decoration: none;

}

.button-demo:hover {
    background-color: #000000;
    color: #FFFFFF;
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

.image-hero {
    margin-top: 80px;
    width: 800px;
    height: 733px;
    /*width: 45vw;
    height: 72vh;*/
}

.image-hero-mobile {
    display: none;
}

.button-try:hover {
    background-color: #005685;
}

@media (max-width: 1700px) {
    .container-hero {
        margin-left: 100px;
    }
}
@media (max-width: 1640px) {
    .container-hero {
        margin-top: 160px;
    }

    .image-hero {
        margin-top: 120px;
        width: 750px; /*80vw 75vh */
        height: 687px;
    }
}
@media (max-width: 1575px) {
    .hero-h1 {
        font-size: 58px;
    }
    .hero-p {
        font-size: 23px;
    }
    .container-hero {
        margin-top: 170px;
        margin-left: 105px;
    }

    .image-hero {
        margin-top: 120px;
        width: 700px;
        height: 647px;
    }
}
@media (max-width: 1385px) {
    .hero-h1 {
        font-size: 52px;
    }
    .hero-p {
        font-size: 22px;
    }
    .container-hero {
        margin-top: 150px;
        margin-left: 85px;
    }
    .button-try {
        width: 320px;
    }

    .button-demo {
        width: 200px;
    }

    .image-hero {
        margin-top: 150px;
        width: 580px;
        height: 532px;
    }
}
@media (max-width: 1215px) {
    .hero-h1 {
        font-size: 48px;
    }
    .hero-p {
        max-width: 550px;
       
    }
    .container-hero {
        margin-top: 160px;
        margin-left: 40px;
        margin-right: 20px;
    }
    .button-try {
        width: 260px;
    }

    .button-demo {
        width: 160px;
    }

    .image-hero {
        margin-top: 120px;
        width: 500px;
        height: 459px;
    }
    .column-hero-right {
        justify-content: center;
    }

}

@media (max-width: 1100px) {
    .image-hero {
        margin-top: 120px;
        width: 450px;
        height: 413px;
    }
}

@media (max-width: 960px) {
    .image-hero {
        width: 350px;
        height: 321px;
    }
}

@media (max-width: 770px) {
    .container-hero {
        flex-direction: column-reverse;
    }
    .column-hero-right {
        width: 100%;
    }
    .column-hero-left {
        width: 100%;
    }
    .image-hero {
        width: 600px;
        height: 550px;
    }

    .hero-h1 {
        max-width: 100%;
        font-size: 40px;
    }

    .hero-p {
        max-width: 100%;
        font-size: 25px;
    }
}

@media (max-width: 650px) {
    .image-hero {
        width: 550px;
        height: 504px;
    }
}

@media (max-width: 600px) {
    .image-hero {
        width: 500px;
        height: 459px;
    }
}

@media (max-width: 520px) {
    .button-row-container {
        display: flex;
        flex-direction: column;
    }

    .hero-h1 {
        max-width: 100%;
        font-size: 35px;
    }

    .hero-p {
        max-width: 100%;
        font-size: 20px;
    }

    .image-hero {
        /*width: 400px;
        height: 367px;*/
        display: none;
    }
    .image-hero-mobile {
        margin-top: 120px;
        display: block;
        width: 400px;
        height: 367px;
    }
}

@media (max-width: 430px) {
    /*.image-hero {
        width: 300px;
        height: 275px;
    }*/

    .image-hero-mobile {
        width: 300px;
        height: 275px;
    }
}

@media (max-width: 330px) {
    .button-try {
        width: 220px;
        margin-right: 0px;
    }

    .button-demo {
        width: 220px;
        margin-right: 0px;
    }

    .hero-h1 {
        font-size: 30px;
    }

    .container-hero {
        margin-left: 15px;
        margin-right: 15px;
    }

    .button-row-container {
        align-items: center;
    }

    /*.image-hero {
        width: 250px;
        height: 230px;
    }*/

    .image-hero-mobile {
        width: 250px;
        height: 230px;
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
    function goToDemoPage () {
        goto("/demo");
    }

    function goToTrialPage () {
        goto("/trial");
    }
</script>

<div class="container-hero">
    <div class="column-hero-left">
        <h1 class="hero-h1">Enterprise-grade tech transfer management for universities</h1>
        <p class="hero-p">Have all of your data in one place and platform costs reduced by 90%.</p>
        <div class="button-row-container">
            <button class="button-demo" on:click={() => goToDemoPage()}>Meet with us</button>
            <button class="button-try" on:click={() => goToTrialPage()}>Try Uneforce free</button>
        </div>
    </div>
    <div class="column-hero-right">
        <img src="/heroGraphic.png" alt="Hero Graphic: Dashboards on grey blob backdrop" class="image-hero">
        <img src="/heroGraphicMobile.png" alt="Hero Graphic: Dashboards on grey blob backdrop" class="image-hero-mobile">
    </div>
</div>