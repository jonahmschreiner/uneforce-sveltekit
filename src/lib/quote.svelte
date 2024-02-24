<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.container-quote {
    background-color: #0077B5;
    border-color: #004C74;
    border-width: 14px;
    border-style: solid;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 220px;
    margin-bottom: 30px;
}

.container-quote-text {
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-size: 27px;
    line-height: 200%;
    margin-top: 140px;
    margin-bottom: 60px;
    margin-left: 30px;
    margin-right: 30px;
    max-width: 1000px;
}


.image-quote-author-image {
    border-radius: 50%;
    background-color: #FFFFFF;
    border-style: solid;
    border-color: black;
    border-width: 15px;
    width: 15%; /* 200px*/
    height: auto;
    box-shadow: 0 0 0 1px black inset;
    top: 0%;
    left: 0%;
    position: absolute;
    transform: translate(-53.5%, -60%); /*-53.5%, -60% */
}

.container-quote-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image-quote-mark {
    width: 10%; /* 120px*/
    height: auto;
    top: 100%;
    left: 100%;
    position: absolute;
    transform: translate(-48%, -45%);
}

@media (max-width: 1575px) {
    .image-quote-author-image {
        border-width: 12px;
    }
}

@media (max-width: 1215px) {
    .image-quote-author-image {
        width: 135px;
        height: auto;
        border-width: 10px;
        transform: translate(-54.5%, -60%);
    }
    .image-quote-mark {
        width: 85px;
        height: auto;
    }

    .container-quote-text {
        font-size: 22px;
    }
}

@media (max-width: 770px) {
    .image-quote-author-image {
        width: 100px;
        border-width: 8px;
        transform: translate(-56%, -60%);
    }
    .image-quote-mark {
        width: 63px;
        transform: translate(-46%, -40%);
    }
    .container-quote-text {
        font-size: 18px;
        margin-top: 100px;
        margin-bottom: 40px;
    }

    .container-quote {
        margin-top: 130px;
    }
}

@media (max-width: 520px) {
    .image-quote-author-image {
        left: 50%;
        transform: translate(-50%, -60%);
    }
    .container-quote-text {
        text-align: center;
        margin-top: 100px;
    }
    .container-quote {
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

    .image-quote-mark {
        display: none;
    }
}


</style>

<div class="container-quote-parent">
    <div class="container-quote">
        <img src="unemed.png" alt="Unemed Logo" class="image-quote-author-image">
        <p class="container-quote-text">It’s rare to find things that are twice as good for half the price, but Uneforce fits the bill. We’ve been using this the last ten years to manage our office and it’s made a night-and-day difference from previous systems we used.<br><br>UNEMED</p>
        <img src="quotesGraphic.png" alt="Quotation Mark" class="image-quote-mark">
    </div>
</div>