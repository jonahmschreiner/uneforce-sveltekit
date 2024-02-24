<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.product-cta-header {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    margin-top: 0px;
    margin-bottom: 80px;
    text-align: center;
    max-width: 70%;
    color: #000000;
    margin-right: 0px;
    margin-left: 0px;
}

.flex-solo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
</style>

<script>
    import Productctawithoutheader2 from "../lib/productctawithoutheader2.svelte";
    export let cta_title_2;
    export let cta_description_2;
</script>

<div class="flex-solo-container">
    <h1 class="product-cta-header">{cta_title_2}</h1>
</div>
<Productctawithoutheader2 {cta_description_2} />