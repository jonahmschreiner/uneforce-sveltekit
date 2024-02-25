<style>

</style>

<script>
    import Productheader from "../../../lib/productheader.svelte";
    import Productscreenshot from "../../../lib/productscreenshot.svelte";
    import Productctawithoutheader from "../../../lib/productctawithoutheader.svelte";
    import Productanimationshowcaseblue1 from "../../../lib/productanimationshowcaseblue1.svelte";
    import Productanimationshowcasewhite2 from "../../../lib/productanimationshowcasewhite2.svelte";
    import Productctawithheader2 from "../../../lib/productctawithheader2.svelte";
    import Navbar from "../../../lib/navbar.svelte";
    import Navbarcolumn from "../../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
    const baseURL = import.meta.env.VITE_APP_BASE_URL;
    let screenshot = `${baseURL}MetricsDashboardScreenshot.png`;
    let page_title = "Receive a clear view of your portfolio"
    let page_description = "Automatic reporting compiles your data into comprehensive dashboards and shareable documents."
    let cta_description = "Deeply understand your portfolio. Effortlessly communicate results and next steps."
    let animation_heading_1 = "Help your people know exactly what to prioritize"
    let animation_description_1 = "Office actions can be quickly created and users can easily view and complete those with upcoming deadlines through personalized dashboards on their home screen."
    let animation_video_1 = `${baseURL}OfficeActionCreationVideo.mp4`
    let animation_heading_2 = "Get a bird’s eye view into your office and portfolio"
    let animation_description_2 = "KPIs and warnings are generated and then compiled into comprehensive, customizable dashboards for managers."
    let animation_video_2 = `${baseURL}DashboardVideo.mp4`
    let cta_title_2 = "Migration on your mind?"
    let cta_description_2 = "Switching platforms is time consuming. We help by providing data mapping and migration guides that simplify the process or can do it for you."
</script>

<title>Insights</title>
<meta name="description" content="Easily know and communicate TTO activity and performance.">
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<Productheader {page_title} {page_description}/>
<Productscreenshot {screenshot}/>
<Productctawithoutheader {cta_description}/>
<Productanimationshowcaseblue1 {animation_heading_1} {animation_description_1} {animation_video_1}/>
<Productanimationshowcasewhite2 {animation_heading_2} {animation_description_2} {animation_video_2}/>
<Productctawithheader2 {cta_title_2} {cta_description_2}/>