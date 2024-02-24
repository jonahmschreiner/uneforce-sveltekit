<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.product-animation-showcase-white {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 180px;
}

.product-animation-heading-white {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    margin-top: 150px;
    margin-bottom: 80px;
    text-align: center;
    max-width: 45%;
    color: #000000;
}

.product-animation-description-white {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    text-align: center;
    color: #555555;
    max-width: 50%;
    line-height: 200%;
    margin-bottom: 100px;
    margin-top: 0px;
}

.animation-video-white {
    width: 80%;
    border-style: solid;
    border-color: #000000;
    border-width: 4px;
}

@media (max-width: 1575px) {
    .product-animation-heading-white {
        font-size: 64px;
        max-width: 52%;
    }

    .product-animation-description-white {
        font-size: 27px;
        max-width: 60%;
    }
}

@media (max-width: 1385px) {
    .product-animation-heading-white {
        font-size: 62px;
        max-width: 60%;
    }
}

@media (max-width: 1215px) {
    .product-animation-heading-white {
        font-size: 48px;
        max-width: 70%;
    }

    .product-animation-description-white {
        font-size: 22px;
        max-width: 75%;
    }
}

@media (max-width: 760px) {
    .product-animation-heading-white {
        font-size: 34px;
        max-width: 75%;
        margin-top: 120px;
    }

    .product-animation-description-white {
        font-size: 18px;
        max-width: 70%;
    }

    .product-animation-showcase-white {
        padding-bottom: 100px;
    }
}

@media (max-width: 520px) {
    .product-animation-heading-white {
        font-size: 28px;
        max-width: 85%;
        margin-top: 100px;
        margin-bottom: 50px;
    }

    .product-animation-description-white {
        margin-bottom: 60px;
        max-width: 85%;
    }
}
</style>

<script>
    export let animation_heading_2;
    export let animation_description_2;
    export let animation_video_2;
</script>


<div class="product-animation-showcase-white">
    <h1 class="product-animation-heading-white">{animation_heading_2}</h1>
    <p class="product-animation-description-white">{animation_description_2}</p>
    <video src={animation_video_2} autoplay loop muted playsinline class="animation-video-white">
</div>