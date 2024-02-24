<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.product-cta-description {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    text-align: center;
    color: #555555;
    max-width: 60%;
    line-height: 200%;
    margin-bottom: 50px;
    margin-top: 0px;
}

.product-cta-without-header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;
}

.product-cta-button {
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
}

.product-cta-button:hover {
    background-color: #000000;
    color: #FFFFFF;
}


@media (max-width: 1215px) {
    .product-cta-description {
        font-size: 25px;
        max-width: 80%;
    }

    .product-cta-without-header-container {
        margin-bottom: 140px;
    }
}

@media (max-width: 770px) {
    .product-cta-description {
        font-size: 25px;
        max-width: 70%;
    }
}

@media (max-width: 520px) {
    .product-cta-description {
        font-size: 22px;
        max-width: 70%;
    }

    .product-cta-without-header-container {
        margin-bottom: 120px;
    }
}

@media (max-width: 330px) {
    .product-cta-without-header-container {
        margin-bottom: 100px;
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
    export let cta_description_2;
</script>

<div class="product-cta-without-header-container">
    <p class="product-cta-description">{cta_description_2}</p>
     <button on:click={goto("/demo")} class="product-cta-button">Clarify with Uneforce</button>
</div>