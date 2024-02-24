<style>

</style>

<script>
    import Productheader from "../../../lib/productheader.svelte";
    import Productscreenshot from "../../../lib/productscreenshot.svelte";
    import Productctawithheader from "../../../lib/productctawithheader.svelte";
    let screenshot = "cloudLoginScreenshot.png"
    let page_title = "Work securely from anywhere"
    let page_description = "Cloud-based technology enables flexible work locations and device usage, allowing for greater productivity without compromising compliance."
    let cta_title = "Want to try it out?"
    let cta_description = "Convenient access, without the risk."
</script>

<title>Operate TTO from anywhere</title>
<meta name="description" content="How Uneforce enables you to have access from anywhere.">

<Productheader {page_title} {page_description}/>
<Productscreenshot {screenshot}/>
<Productctawithheader {cta_title} {cta_description}/>