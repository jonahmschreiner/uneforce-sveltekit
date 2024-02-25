<script>
    import BookDemoComponent from "../../lib/bookDemoComponent.svelte";
    import Navbar from "../../lib/navbar.svelte";
    import Navbarcolumn from "../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
</script>
<title>Book a demo</title>
<meta name="description" content="Set up a 30 minute demo of the platform">
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<BookDemoComponent />
