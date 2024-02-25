<script>
    import Migrationsection from "../../lib/migrationsection.svelte";
    import Navbar from "../../lib/navbar.svelte";
    import Navbarcolumn from "../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
    let migration_title = "Migration on your mind? We've got you."
    let migration_description = "Switching platforms is time consuming. We help by providing data mapping and migration guides that simplify the process or doing it for you."
 
</script>

<title>Migration</title>
<meta name="description" content="How we help with migration">
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<div style="margin-top: 100px; height: 50px;"></div>
<Migrationsection {migration_title} {migration_description}/>