<style>

</style>

<script>
    import Productheader from "../../../lib/productheader.svelte";
    import Productscreenshot from "../../../lib/productscreenshot.svelte";
    import Productctawithheader from "../../../lib/productctawithheader.svelte";
    import Navbar from "../../../lib/navbar.svelte";
    import Navbarcolumn from "../../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
    let cta_title = "Want to see for yourself?";
    let cta_description = "Always cutting-edge security, for free.";
    let page_title = "Built-in Fortune 500 security so you don’t need to worry about compliance";
    let page_description = "Platform is secured for and used by some of the largest companies in the world. With built-in world class disaster recovery, encryption and identity solutions you can focus on monetization, rather than IT.";
    let screenshot = `/securityScreenshot.png`;
</script>

<title>Security</title>
<meta name="description" content="How Uneforce gives you the same security that Fortune 500 companies use.">
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<Productheader {page_title} {page_description}/>
<Productscreenshot {screenshot}/>
<Productctawithheader {cta_title} {cta_description}/>