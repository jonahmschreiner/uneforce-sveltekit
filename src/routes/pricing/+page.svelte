<title>Pricing</title>
<meta name="description" content="Installation cost of $15k, free forever afterward.">

<script>
    import Cta from "../../lib/cta.svelte";
    import Pricingheader from "../../lib/pricingheader.svelte";
    import Pricingprices from "../../lib/pricingprices.svelte";
    import Pricingfaq from "../../lib/pricingfaq.svelte";
    import Navbar from "../../lib/navbar.svelte";
    import Navbarcolumn from "../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
</script>
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<Pricingheader />
<Pricingprices />
<Pricingfaq />
<Cta />