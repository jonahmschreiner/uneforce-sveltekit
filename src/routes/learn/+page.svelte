<script>
    import Learntemporary from "../../lib/learntemporary.svelte";
    import Navbar from "../../lib/navbar.svelte";
    import Navbarcolumn from "../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
</script>

<title>Learn</title>
<meta name="description" content="Learn how to use Uneforce and the platform it is built on">
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<Learntemporary />
