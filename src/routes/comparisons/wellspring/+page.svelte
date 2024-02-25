<style>

</style>

<script>
    import Cta from "../../../lib/cta.svelte";
    import Comparisonheader from "../../../lib/comparisonheader.svelte";
    import Comparisonlist from "../../../lib/comparisonlist.svelte";
    import Reasonslist from "../../../lib/reasonslist.svelte";
    import Navbar from "../../../lib/navbar.svelte";
    import Navbarcolumn from "../../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
    let comparisonvstext = "Uneforce vs. Wellspring";
    let comparisontitle = "How is Uneforce better than Wellspring?";
    let comparisonname = "Wellspring";
    let comparisonreason1 = "You’ve got the spare budget for large annual fees and don’t mind if it has limited use";
    let comparisonreason2 = "You don’t have special use cases and only need to customize fields";
    let comparisonreason3 = "You don’t mind having to use third-party tools to be reminded of upcoming deadlines";
    let comparisonreason4 = "You only need standard reports and won’t need to change them at any point";
    let comparisonreason5 = "You prefer the early 2010s look, and having the same interface for each type of user";
    let comparisonreason6 = "You’d rather install the platform on office machines and be limited to them";
    let comparisonreason7 = "Being at the cutting edge of security isn’t a priority for your office";
</script>

<title>Compared to Wellspring</title>
<meta name="description" content="How Uneforce compares to Wellspring.">

<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<Comparisonheader {comparisonvstext} {comparisontitle}/>
<Comparisonlist {comparisonname} {comparisonreason1} {comparisonreason2} {comparisonreason3} {comparisonreason4} {comparisonreason5} {comparisonreason6} {comparisonreason7}/>
<Reasonslist />
<Cta />