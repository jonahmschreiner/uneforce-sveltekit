<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.product-header-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    margin-top: 200px;
    margin-bottom: 60px;
    text-align: center;
    max-width: 70%;
}

.product-header-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 150px;
}

.product-header-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 28px;
    text-align: center;
    color: #555555;
    max-width: 75%;
    line-height: 200%;
    margin-bottom: 50px;
}

@media (max-width: 1640px) {
    .product-header-h1 {
        font-size: 62px;
        max-width: 80%;
    }

    .product-header-p {
        font-size: 24px;
        max-width: 80%;
    }
}

@media (max-width: 1575px) {
    .product-header-h1 {
        font-size: 58px;
        max-width: 85%;
    }

    .product-header-p {
        font-size: 22px;
        max-width: 80%;
    }
}

@media (max-width: 1385px) {
    .product-header-h1 {
        font-size: 50px;
        max-width: 85%;
    }

    .product-header-p {
        font-size: 20px;
        max-width: 85%;
    }
}

@media (max-width: 1215px) {
    .product-header-h1 {
        font-size: 45px;
        max-width: 80%;
    }

    .product-header-p {
        font-size: 18px;
        max-width: 90%;
    }

    .product-header-text {
        margin-bottom: 100px;
    }
}

@media (max-width: 770px) {
    .product-header-h1 {
        font-size: 38px;
        max-width: 80%;
        margin-top: 190px;
        margin-bottom: 40px;
    }

    .product-header-text {
        margin-bottom: 80px;
    }
}

@media (max-width: 520px) {
    .product-header-h1 {
        margin-top: 180px;
        font-size: 28px;
        max-width: 90%;
        margin-bottom: 30px;
    }

    .product-header-p {
        font-size: 16px;
        max-width: 90%;
    }

    .product-header-text {
        margin-bottom: 60px;
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
    export let page_title;
    export let page_description;
</script>

<div class="product-header-text">
    <h1 class="product-header-h1">{page_title}</h1>
    <p class="product-header-p">{page_description}</p>
    <button on:click={goto("/trial")} class="button-try">Try Uneforce free</button>
</div>