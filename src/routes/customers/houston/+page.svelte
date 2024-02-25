<style>
    
</style>

<script>
    import Cta from "../../../lib/cta.svelte";
    import Customerheader from "../../../lib/customerheader.svelte";
    import Customerstory from "../../../lib/customerstory.svelte";
    import Navbar from "../../../lib/navbar.svelte";
    import Navbarcolumn from "../../../lib/navbarcolumn.svelte";
    import { navbarColumnVisible } from '$lib/stores/mainstores';
    let customer_logo = "/universityHoustonCaseStudyLogo.png";
    let customer_logo_description = "UH Logo with the university's name written to the side.";
    let customer_image = "/houstonCaseStudyImageCroppedToSquare.png";
    let customer_image_description = "Building on UH campus with the UH logo on the front.";
    let customer_title = "How UH easily adapted reporting to meet AUTM requirement changes";
    let customer_description = "Find out how they made the adjustments in ten minutes using Uneforce’s customization tools";
    let metric_column_1_metric = "3 Months";
    let metric_column_1_description = "Time Saved";
    let metric_column_2_metric = "$20,000";
    let metric_column_2_description = "Dollars Saved";
    let metric_column_3_metric = "100%";
    let metric_column_3_description = "Requirements Met";
    let story_introduction = "The University of Houston’s Office of Technology Transfer and Innovation manages patents, copyrights and trademarks, and works with faculty and the Intellectual Property Committee to file patents for inventions.<br><br>UH maintains a strong intellectual property portfolio that continues to gain momentum every year. For several years now, UH has led the nation in royalty earnings among public universities without medical schools.<br><br>Here’s how they used Uneforce to accelerate that momentum.";
    let why_uneforce = "The University of Houston originally used Wellspring Sofia to manage their office, but became frustrated that it lacked support for other office activities such as leasing space to startups and that adapting to requirement changes either didn't happen or took months.";
    let quote_1 = "“Uneforce was exactly what we were looking for: being able to manage all of our activities in one place and quickly adjust to track new initiatives.”<br>- Tanushree Chatterji, Assistant Director of Tech Transfer and Innovation";
    let reason_1 = "Unlimited customization";
    let reason_1_story = "The main problem they wanted resolved was not being able to manage all of their activities in one place. Their office was limited to the capabilities of the management platform, rather than having it adapt to them.<br><br> Uneforce allows for quick customization by design and proved useful when UH wanted to track women and minority inventor metrics for AUTM. All it took was a couple clicks to add a checkbox field to the IP object and include it in several reports rather than pay a fortune for a customized solution on their previous platform.";
    let quote_2 = "“The customization has been extremely helpful. Rather than being required to track unsupported activities in spreadsheets and other methods that management software is supposed to replace, we were able to make customization requests and receive them within a couple days, sometimes even quicker.”<br>- Tanushree Chatterji, Assistant Director of Tech Transfer and Innovation";
    let advice = "If you're looking for an open-ended platform that can adapt to support all of your use cases, get Uneforce, says Tanushree.";
    let advice_quote = "“I highly recommend Uneforce, it makes managing our office significantly easier”<br>- Tanushree Chatterji, Assistant Director of Tech Transfer and Innovation";
</script>

<title>Houston Success Story</title>
<meta name="description" content="The University of Houston\'s story with Uneforce">
<Navbar />
{#if $navbarColumnVisible}
    <Navbarcolumn />
{/if}
<Customerheader {customer_logo} {customer_logo_description} {customer_title} {customer_description} {metric_column_1_metric} {metric_column_2_metric} {metric_column_3_metric} {metric_column_1_description} {metric_column_2_description} {metric_column_3_description} {customer_image} {customer_image_description}/>
<Customerstory {story_introduction} {why_uneforce} {quote_1} {reason_1} {reason_1_story} {quote_2} {advice} {advice_quote}/>
<Cta />