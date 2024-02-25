<style>
.demo-submitted-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 300px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 200px;
}

.demo-submitted-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 55px;
    margin-bottom: 30px;
    text-align: center;
}

.demo-submitted-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
    line-height: 150%;
    text-align: center;
}

@media (max-width: 940px) {
    .demo-submitted-h1 {
        font-size: 40px;
    }

    .demo-submitted-p {
        font-size: 18px;
    }
}

@media (max-width: 770px) {
    .demo-submitted-h1 {
        font-size: 35px;
    }

    .demo-submitted-p {
        font-size: 18px;
    }
}

@media (max-width: 520px) {
    .demo-submitted-h1 {
        font-size: 30px;
    }

    .demo-submitted-p {
        font-size: 18px;
    }

    .demo-submitted-container {
        margin-top: 200px;
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 100px;
    }
}
</style>

<script>
    import Navbar from "../lib/navbar.svelte";
    import Navbarcolumn from "../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
</script>

<title>Trial Request Submitted</title>
<meta name="description" content="You\'ll receive login credentials shortly.">

<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<div class="demo-submitted-container">
    <h1 class="demo-submitted-h1">Trial Registration Submitted</h1>
    <p class="demo-submitted-p">Keep an eye on your inbox, we'll send the login info shortly</p>
</div>