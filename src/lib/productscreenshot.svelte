<style>
.product-screenshot {
    border-style: solid;
    border-color: black;
    border-width: 4px;
    width: 70%;
}

.product-screenshot-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;
}


@media (max-width: 1215px) {
    .product-screenshot-container {
        margin-bottom: 100px;
    } 
}

@media (max-width: 770px) {
    .product-screenshot-container {
        margin-bottom: 60px;
    } 
}

@media (max-width: 330px) {
    .product-screenshot {
        border-width: 2px;
    }
}
</style>

<script>
    export let screenshot;
</script>

<div class="product-screenshot-container">
    <img src={screenshot} alt="Screenshot of product feature." class="product-screenshot">
</div>
