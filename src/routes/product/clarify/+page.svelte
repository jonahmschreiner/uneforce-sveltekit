<style>

</style>

<script>
    import Productheader from "../../../lib/productheader.svelte";
    import Productscreenshot from "../../../lib/productscreenshot.svelte";
    import Productctawithoutheader from "../../../lib/productctawithoutheader.svelte";
    import Productanimationshowcaseblue1 from "../../../lib/productanimationshowcaseblue1.svelte";
    import Migrationsection from "../../../lib/migrationsection.svelte";
    const baseURL = import.meta.env.VITE_APP_BASE_URL;
    let screenshot = `${baseURL}interfaceScreenshot.png`;
    let page_title = "Ensure the data you need is at your fingertips";
    let page_description = "Record layouts prioritize fields by frequency of use for most TTOs, but you can drag and drop to re-arrange them or add custom components to provide whatever else you’d want to see while looking at that type of record.";
    let cta_description = "See all necessary info in one place, as it should be.";
    let animation_heading_1 = "Get personal with record layout customization";
    let animation_description_1 = "With a couple clicks you can adjust record pages to match your unique requirements, or have us do it for you.";
    let animation_video_1 = `${baseURL}RecordLayoutAdjustingVideo.mp4`;
    let migration_title = "Migration on your mind? We've got you.";
    let migration_description = "Switching platforms is time consuming. We help by providing data mapping and migration guides that simplify the process or doing it for you.";
</script>

<title>Clarify</title>
<meta name="description" content="How Uneforce makes your team\'s jobs easier">

<Productheader {page_title} {page_description}/>
<Productscreenshot {screenshot}/>
<Productctawithoutheader {cta_description}/>
<Productanimationshowcaseblue1 {animation_heading_1} {animation_description_1} {animation_video_1}/>
<Migrationsection {migration_title} {migration_description}/>