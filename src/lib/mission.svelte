<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.story-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    text-align: center;
    max-width: 700px;
}

.story-h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    max-width: 550px;
}

.story-container-1 {
    display: flex;
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 80px;
}

.story-container-2 {
    display: flex;
    margin-right: 0px;
    margin-left: 120px;
    margin-top: 100px;
}

.story-container-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
}

.image-story-before {
    margin-top: 50px;
    height: auto;
    width: 800px;
    height: 576px;
}

.image-story-before-mobile {
    display: none;
}

.image-story-after {
    margin-top: -60px;
    height: auto;
    width: 800px;
    height: 661px;
}
.image-story-after-mobile {
    display: none;
}

.story-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    display: flex;
    line-height: 200%;
    max-width: 750px;
    color: #555555;
}

.column-story-1-left {
    flex: 1;
    width: 50%;
}

.column-story-1-right {
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 50px;
    padding-left: 30px;
}

.column-story-2-right {
    flex: 1;
    width: 50%;
}

.column-story-2-left {
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 50px;
    padding-left: 30px;
}

.story-parent-container {
    overflow: hidden;
}

@media (max-width: 1700px) {
    .image-story-before {
        margin-top: 50px;
        width: 700px;
        height: 504px;
    }

    .image-story-after {
        margin-top: -20px;
        width: 700px;
        height: 579px;
    }

    .column-story-2-left {
        padding-left: 0px;
    }

    .column-story-2-right {
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 1575px) {
    .story-h2 {
        font-size: 45px;
        max-width: 450px;
    }

    .image-story-before {
        width: 620px;
        height: 446px;
    }

    .image-story-after {
        width: 620px;
        height: 512px;
    }
}

@media (max-width: 1430px) {
    .image-story-before {
        margin-top: 100px;
        width: 620px;
    }

    .image-story-after {
        margin-top: 50px;
        width: 580px;
        height: 479px;
    }
}

@media (max-width: 1385px) {
    .story-h2 {
        font-size: 38px;
        max-width: 350px;
    }

    .image-story-before {
        margin-top: 120px;
        width: 520px;
        height: 374px;
    }

    .image-story-after {
        margin-top: 80px;
        width: 520px;
        height: 430px;
    }
}

@media (max-width: 1215px) {
    .story-h2 {
        font-size: 30px;
        max-width: 300px;
        margin-top: -20px;
    }

    .story-p {
        font-size: 22px;
    }

    .image-story-before {
        margin-top: 120px;
        width: 420px;
        height: 302px;
    }

    .image-story-after {
        margin-top: 0px;
        width: 420px;
        height: 347px;
    }

    .column-story-2-left {
        padding-left: 0px;
    }

    .column-story-2-right {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .story-container-2 {
        margin-left: 65px;
    }
}

@media (max-width: 940px) {
    .image-story-before {
        margin-top: 120px;
        width: 340px;
        height: 245px;
    }

    .image-story-after {
        margin-top: 80px;
        width: 340px;
        height: 281px;
    }
}

@media (max-width: 770px) {
    .story-h1 {
        font-size: 45px;
        max-width: 500px;
    }

    .story-h2 {
        font-size: 40px;
        max-width: 400px;
        margin-top: -20px;
        margin-bottom: 0px;
        text-align: center;
    }

    .story-p {
        font-size: 24px;
        text-align: center;
    }

    .story-container-heading {
        margin-top: 100px;
    }

    .story-container-1 {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .story-container-2 {
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 0px;
    }

    .image-story-before {
        margin-top: 0px;
        width: 650px;
        height: 468px;
    }

    .image-story-after {
        margin-top: 0px;
        width: 650px;
        height: 537px;
    }

    .column-story-1-left {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .column-story-1-right {
        width: 100%;
        padding-left: 0px;
        align-items: center;
    }

    .column-story-2-left {
        width: 100%;
        align-items: center;
        padding-left: 0px;
    }

    .column-story-2-right {
        width: 100%;
        padding-left: 0px;
        margin-top: 40px;
    }
}

@media (max-width: 675px) {
    .image-story-before {
        margin-top: 0px;
        width: 500px;
        height: 360px;
    }

    .image-story-after {
        margin-top: 0px;
        width: 500px;
        height: 413px;
    }
}

@media (max-width: 520px) {
    .story-h1 {
        font-size: 30px;
        max-width: 350px;
    }

    .story-h2 {
        font-size: 25px;
        max-width: 250px;
    }
    .story-p {
        font-size: 20px;
    }

    .image-story-before {
        /*margin-top: 0px;
        width: 400px;
        height: 287px;*/
        display: none;
    }

    .image-story-before-mobile {
        margin-top: 0px;
        width: 400px;
        height: 287px;
        display: block;
    }

    .image-story-after {
        /*margin-top: 0px;
        width: 400px;
        height: 332px;*/
        display: none;
    }

    .image-story-after-mobile {
        margin-top: 0px;
        width: 400px;
        height: 332px;
        display: block;
    }
}

@media (max-width: 430px) {
    /*.image-story-before {
        margin-top: 0px;
        width: 300px;
        height: 216px;
    }*/

    .image-story-before-mobile {
        width: 300px;
        height: 216px;
    }

    .image-story-after-mobile {
        width: 300px;
        height: 247px;
    }

    /*.image-story-after {
        margin-top: 0px;
        width: 300px;
        height: 247px;
    }*/
}

@media (max-width: 330px) {
    .story-h1 {
        font-size: 25px;
        max-width: 270px;
    }

    .story-container-heading {
        margin-top: 40px;
    }

    .story-h2 {
        font-size: 22px;
        max-width: 250px;
    }

    .story-p {
        font-size: 16px;
    }

    .story-container-1 {
        margin-top: 60px;
    }

    /*.image-story-before {
        margin-top: 0px;
        width: 270px;
        height: 194px;
    }

    .image-story-after {
        margin-top: 0px;
        width: 270px;
        height: 223px;
    }*/

    .image-story-before-mobile {
        width: 270px;
        height: 194px;
    }

    .image-story-after-mobile {
        width: 270px;
        height: 223px;
    }
}
</style>

<script>

</script>


<div class="story-parent-container">
<div class="story-container-heading">
    <h1 class="story-h1">TTO managed like a Fortune 500 company.</h1>
</div>
<div class="story-container-1">
    <div class="column-story-1-left">
        <img src="/storyGraphicBefore.png" alt="Story Graphic: Shows annual cost of $50k, only fields being customizable and a frowny face." class="image-story-before">
        <img src="storyGraphicBeforeMobile.png" alt="Story Graphic: Shows annual cost of $50k, only fields being customizable and a frowny face." class="image-story-before-mobile">
    </div>
    <div class="column-story-1-right">
        <h2 class="story-h2">Once upon a time, tech transfer offices were overlooked.</h2>
        <p class="story-p">As corporate enterprise software advanced at lightning speed, tech transfer offices were often neglected, considered more of a bureaucratic obstacle than a priority. The result? Higher costs for less freedom and outdated software.</p>
    </div>
</div>

<div class="story-container-2">
    <div class="column-story-2-left">
        <h2 class="story-h2">Affordable enterprise software is the only way forward.</h2>
        <p class="story-p">It’s time to break through the constraints of traditional TTO management software in order to gain the same level of flexibility and scalability enjoyed by Fortune 500 companies.</p>
    </div>
    <div class="column-story-2-right">
        <img src="storyGraphicAfter.png" alt="Story Graphic: Shows annual cost reduction of at least 50%, customization only being limited by imagination and a smiley face." class="image-story-after">
        <img src="storyGraphicAfterMobile.png" alt="Story Graphic: Shows annual cost reduction of at least 50%, customization only being limited by imagination and a smiley face." class="image-story-after-mobile">
    </div>
</div>

</div>