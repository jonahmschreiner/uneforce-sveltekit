<style>
   @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.product-animation-showcase-blue {
    background-color: #0077B5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 180px;
}

.product-animation-heading-blue {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    margin-top: 150px;
    margin-bottom: 80px;
    text-align: center;
    max-width: 45%;
    color: #FFFFFF;
}

.product-animation-description-blue {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    text-align: center;
    color: #FFFFFF;
    max-width: 50%;
    line-height: 200%;
    margin-bottom: 100px;
    margin-top: 0px;
}

.animation-video {
    width: 80%;
}

@media (max-width: 1575px) {
    .product-animation-heading-blue {
        font-size: 64px;
        max-width: 52%;
    }

    .product-animation-description-blue {
        font-size: 27px;
        max-width: 60%;
    }
}

@media (max-width: 1385px) {
    .product-animation-heading-blue {
        font-size: 62px;
        max-width: 60%;
    }
}

@media (max-width: 1215px) {
    .product-animation-heading-blue {
        font-size: 48px;
        max-width: 70%;
    }

    .product-animation-description-blue {
        font-size: 22px;
        max-width: 75%;
    }
}

@media (max-width: 760px) {
    .product-animation-heading-blue {
        font-size: 34px;
        max-width: 75%;
        margin-top: 120px;
    }

    .product-animation-description-blue {
        font-size: 18px;
        max-width: 70%;
    }

    .product-animation-showcase-blue {
        padding-bottom: 100px;
    }
}

@media (max-width: 520px) {
    .product-animation-heading-blue {
        font-size: 28px;
        max-width: 85%;
        margin-top: 100px;
        margin-bottom: 50px;
    }

    .product-animation-description-blue {
        margin-bottom: 60px;
        max-width: 85%;
    }
}
</style>

<script>
    export let animation_heading_1;
    export let animation_description_1;
    export let animation_video_1;
</script>

<div class="product-animation-showcase-blue">
    <h1 class="product-animation-heading-blue">{animation_heading_1}</h1>
    <p class="product-animation-description-blue">{animation_description_1}</p>
    <video src={animation_video_1} autoplay loop muted playsinline class="animation-video">
</div>