<style>

</style>

<script>
    import Productheader from "../../../lib/productheader.svelte";
    import Productscreenshot from "../../../lib/productscreenshot.svelte";
    import Productctawithoutheader from "../../../lib/productctawithoutheader.svelte";
    import Productanimationshowcaseblue1 from "../../../lib/productanimationshowcaseblue1.svelte";
    import Productanimationshowcasewhite2 from "../../../lib/productanimationshowcasewhite2.svelte";
    import Migrationsection from "../../../lib/migrationsection.svelte";
    const baseURL = import.meta.env.VITE_APP_BASE_URL;
    let screenshot = `${baseURL}automationScreenshot.png`;
    let page_title = "Tremendously increase throughput using fully-customizable automation"
    let page_description = "Tedious administrative tasks are automated, letting your office do what you do best, monetization. Unlimited customization allows processes to be created and tailored to your specific use case."
    let cta_description = "Customize workflows for free with drag and drop tools. Set them into motion and increase your team’s efficiency on autopilot."
    let animation_heading_1 = "Effortlessly manage inventions"
    let animation_description_1 = "Upon creating a disclosure, other related records can quickly be created."
    let animation_video_1 = `${baseURL}DisclosureRelatedRecordCreationVideo.mp4`
    let animation_heading_2 = "Simplify office actions"
    let animation_description_2 = "Office actions can be easily created and automatically display on user dashboards, link to related records and send notifications based on upcoming deadlines."
    let animation_video_2 = `${baseURL}OfficeActionCreationVideo.mp4`
    let animation_heading_3 = "Fortune 500 Marketing"
    let animation_description_3 = "Manage your accounts and campaigns using the same tools as some of the largest companies in the world. Link campaign efforts and opportunities in order to accurately determine their effectiveness."
    let animation_video_3 = `${baseURL}CreateCampaignVideo.mp4`
    let migration_title = "Migration on your mind? We've got you."
    let migration_description = "Switching platforms is time consuming. We help by providing data mapping and migration guides that simplify the process or can do it for you."
</script>

<title>Unlimited Automation for TTOs</title>
<meta name="description" content="How Uneforce enables you to automate any office activity.">

<Productheader {page_title} {page_description}/>
<Productscreenshot {screenshot}/>
<Productctawithoutheader {cta_description}/>
<Productanimationshowcaseblue1 {animation_heading_1} {animation_description_1} {animation_video_1}/>
<Productanimationshowcasewhite2 {animation_heading_2} {animation_description_2} {animation_video_2}/>
<Productanimationshowcaseblue1 animation_heading_1={animation_heading_3} animation_description_1={animation_description_3} animation_video_1={animation_video_3}/>
<Migrationsection {migration_title} {migration_description} />