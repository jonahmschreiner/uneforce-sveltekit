<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.customers-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    text-align: center;
    max-width: 80%;
}

.customers-h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    max-width: 500px;
}

.customers-container-1 {
    display: flex;
    margin-right: 0px;
    margin-left: 100px;
    margin-top: 100px;
}

.customers-container-2 {
    display: flex;
    margin-right: 0px;
    margin-left: 120px;
    margin-top: 200px;
    margin-bottom: 200px;
}

.customers-container-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
}

.image-customers-before {
    height: auto;
    width: 90%;
    border-style: solid;
    border-color: black;
    border-width: 4px;
}

.image-customers-after {
    margin-top: -60px;
    height: auto;
    width: 90%;
    border-style: solid;
    border-color: black;
    border-width: 4px;
}

.customers-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    display: flex;
    line-height: 200%;
    max-width: 800px;
    color: #555555;
    margin-top: 0px;
}

.customers-p-2 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    display: flex;
    line-height: 200%;
    max-width: 700px;
    color: #555555;
    margin-top: 0px;
}

.column-customers-1-left {
    flex: 1;
    width: 50%;
}

.column-customers-1-right {
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 80px;
    padding-left: 100px;
}

.column-customers-2-right {
    flex: 1;
    width: 50%;
}

.column-customers-2-left {
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 50px;
    padding-left: 30px;
}

.button-demo-houston {
    background-color: #FFFFFF;
    color: #000000;
    border: solid;
    border-color: #000000;
    border-width: 4px;
    width: 300px;
    height: 60px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.button-demo-houston:hover {
    background-color: #000000;
    color: #FFFFFF;
}

.button-demo-unemed {
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

.button-demo-unemed:hover {
    background-color: #000000;
    color: #FFFFFF;
}


@media (max-width: 1640px) {
    .column-customers-1-right {
        margin-top: 40px;
    }

    .column-customers-2-left {
        margin-top: 40px;
    }
}

@media (max-width: 1575px) {
    .customers-h2 {
        font-size: 45px;
        max-width: 450px;
    }

    .customers-h1 {
        font-size: 58px;
        max-width: 85%;
    }

    .column-customers-1-right {
        margin-top: 0px;
    }

    .column-customers-2-left {
        margin-top: 0px;
    }
}

@media (max-width: 1385px) {
    .customers-h2 {
        font-size: 38px;
        max-width: 350px;
    }

    .customers-h1 {
        font-size: 52px;
        max-width: 85%;
    }

    .image-customers-after {
        margin-top: -20px;
    }
}

@media (max-width: 1215px) {

    .customers-container-2 {
        margin-top: 150px;
        margin-left: 65px;
    }

    .customers-h2 {
        font-size: 30px;
        max-width: 300px;
        margin-top: -20px;
    }

    .customers-h1 {
        max-width: 75%;
    }

    .customers-p {
        font-size: 22px;
    }

    .customers-p-2 {
        font-size: 22px;
    }

    .image-customers-after {
        margin-top: 0px;
        height: auto;
        width: 90%;
    }

    .column-customers-1-right {
        padding-right: 10px;
        padding-left: 50px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .column-customers-2-left {
        padding-left: 0px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .column-customers-2-right {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .customers-container-1 {
        margin-left: 0px;
    }

    .column-customers-1-left {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 40px;
    }
}

@media (max-width: 770px) {
    .customers-h1 {
        font-size: 45px;
        max-width: 500px;
    }

    .button-demo-unemed {
        width: 300px;
        margin-right: 0;
        margin-bottom: 60px;
    }

    .button-demo-houston {
        margin: 0;
    }

    .column-customers-1-left {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0px;
    }

    .customers-h2 {
        font-size: 35px;
        max-width: 500px;
        margin-top: -20px;
        margin-bottom: 30px;
        text-align: center;
    }

    .customers-p {
        font-size: 20px;
        text-align: center;
    }

    .customers-p-2 {
        font-size: 20px;
        text-align: center;
    }

    .customers-container-heading {
        margin-top: 150px;
    }

    .customers-container-1 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 40px;
    }

    .customers-container-2 {
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 0px;
        margin-bottom: 100px;
    }

    .image-customers-before {
        width: 340px;
        height: auto;
        margin-top: 0px;
    }

    .image-customers-after {
        width: 340px;
        height: auto;
        margin-top: 0px;
    }

    .column-customers-1-left {
        width: 100%;
    }

    .column-customers-1-right {
        width: 100%;
        padding-left: 0px;
        align-items: center;
        margin-top: 90px;
    }

    .column-customers-2-left {
        width: 100%;
        align-items: center;
        padding-left: 0px;
        margin-top: 90px;
    }

    .column-customers-2-right {
        width: 100%;
        padding-left: 0px;
        margin-top: 40px;
    }
}

@media (max-width: 520px) {
    .customers-h1 {
        font-size: 30px;
        max-width: 320px;
    }

    .customers-h2 {
        font-size: 25px;
        max-width: 250px;
    }
    .customers-p {
        font-size: 17px;
        max-width: 98%;
    }

    .customers-p-2 {
        font-size: 17px;
        max-width: 98%;
    }

    .image-customers-before {
        width: 75%;
    }

    .image-customers-after {
        width: 75%;
    }
}

@media (max-width: 330px) {

    .button-demo-unemed {
        width: 240px;
    }

    .button-demo-houston {
        width: 240px;
    }

    .customers-h1 {
        font-size: 25px;
        max-width: 270px;
    }

    .customers-container-heading {
        margin-top: 140px;
    }

    .customers-h2 {
        font-size: 22px;
        max-width: 250px;
    }

    .customers-p {
        font-size: 16px;
    }

    .customers-p-2 {
        font-size: 16px;
    }

    .customers-container-1 {
        margin-top: 60px;
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

<title>Customer Success Stories</title>
<meta name="description" content="Some of our customers\' experiences with Uneforce.">

<div class="customers-container-heading">
    <h1 class="customers-h1">Uneforce drives growth for offices like yours</h1>
</div>
<div class="customers-container-1">
    <div class="column-customers-1-left">
        <img src="unemedCaseStudyImageCroppedToSquare.png" alt="Unemed Case Study: Unemed pins sitting on top of disclosure documents." class="image-customers-before">
    </div>
    <div class="column-customers-1-right">
        <h2 class="customers-h2">How UNEMED had a 10x Improvement With Uneforce</h2>
        <p class="customers-p">Find out how they went from Word docs and a “next-to-useless platform” to “silky smooth operations that made it easy to win"</p>
        <button on:click={() => goto("/customers/unemed")} class="button-demo-unemed">The UNEMED Story</button>
    </div>
</div>

<div class="customers-container-2">
    <div class="column-customers-2-left">
        <h2 class="customers-h2">How UH adapted to meet AUTM reporting changes</h2>
        <p class="customers-p-2">Find out how they made the adjustments in ten minutes using Uneforce’s customization tools</p>
        <button on:click={() => goto("/customers/houston")} class="button-demo-houston">The University of Houston Storyy</button>
    </div>
    <div class="column-customers-2-right">
        <img src="houstonCaseStudyImageCroppedToSquare.png" alt="Houston Case Study: Building on their campus." class="image-customers-after">
    </div>
</div>
