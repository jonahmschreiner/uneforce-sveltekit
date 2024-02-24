<style>
    
</style>

<script>
    import Cta from "../../../lib/cta.svelte";
    import Customerheader from "../../../lib/customerheader.svelte";
    import Customerstory from "../../../lib/customerstory.svelte";
    let customer_logo = "/unemedCaseStudyLogo.png";
    let customer_logo_description = "UNEMED name written out underneath the UNEMED logo.";
    let customer_title = "How UNEMED had a 10x Improvement With Uneforce";
    let customer_description = "Find out how they went from Word docs and a “next-to-useless platform” to “silky smooth operations that made it easy to win”";
    let metric_column_1_metric = "-90%";
    let metric_column_2_metric = "40%";
    let metric_column_3_metric = "0";
    let metric_column_1_description = "Report Creation Delay<br>(weeks to seconds)";
    let metric_column_2_description = "More time available for revenue-driving tasks";
    let metric_column_3_description = "Deadlines missed";
    let customer_image = "/unemedCaseStudyImageCroppedToSquare.png";
    let customer_image_description = "UNEMED logo pins sitting on mock disclosure documents.";
    let story_introduction = "UNEMED is the technology transfer & commercialization office for the University of Nebraska Medical Center and the University of Nebraska at Omaha.<br><br>Their goal is to create a better world by working with faculty, staff and students to bring their life-changing innovations and discoveries to the marketplace.<br><br>Here’s how they used Uneforce to streamline that process.";
    let why_uneforce = "UNEMED originally used Inteum for IP management and a series of Word and Excel documents to store marketing and agreement compliance information.<br><br>These separate storage locations and lack of customized automation made it take weeks to build reports for university management, required a lot of tedious task completion, and made it almost impossible to make data-driven business decisions.<br><br>They needed a tool that could store and use all of their data in one place, as well as give them the freedom to customize it for their office’s specific use cases.<br><br>Director of Marketing and Licensing Dr. Steven Schreiner joined the company in 2006, identified that their needs were similar to those solved by enterprise software, and came across Salesforce. He spent the next 12 years customizing the platform for the office in his spare time, creating what became known later as Uneforce.";
    let quote_1 = "“Uneforce is by far the best tool I’ve found for managing our office. We tried the mainstream platforms but felt like we had to constrict our operations to fit the product’s limitations rather than use one that adapted to us.”<br>- Michael Dixon, PhD, President & CEO";
    let reason_1 = "Powerful automation";
    let reason_1_story = "The main problem they wanted resolved was a lack of speed for administrative tasks and a lack of transparency around business operations. To know what stage a disclosure was at, you’d have to ask the person working with that account and if they left the company it’d take an afternoon searching through their documents to know.<br><br>To solve this, Steve built custom objects on the Salesforce platform and migrated their data into them so everyone could quickly access the information they needed. Over the next ten years, he created automated workflows that executed tasks, either completely behind-the-scenes or after receiving the bare-minimum input from the user, which their team previously did by hand.";
    let quote_2 = "“Automation changed the game for us. We were able to spend more time monetizing and less time doing administrative tasks.”<br>- Michael Dixon, PhD, President & CEO";
    let advice = "If you’re looking for an intuitive, attractive platform that makes use of all your office’s data and can be easily customized for your unique use case, get Uneforce, says Dixon.";
    let advice_quote = "“Just get Uneforce. It makes everyone’s job easier.”<br>- Michael Dixon, PhD, President & CEO";
</script>

<title>UNEMED Success Story</title>
<meta name="description" content="UNEMED\'s experience with Uneforce.">
<Customerheader {customer_logo} {customer_logo_description} {customer_title} {customer_description} {metric_column_1_metric} {metric_column_2_metric} {metric_column_3_metric} {metric_column_1_description} {metric_column_2_description} {metric_column_3_description} {customer_image} {customer_image_description}/>
<Customerstory {story_introduction} {why_uneforce} {quote_1} {reason_1} {reason_1_story} {quote_2} {advice} {advice_quote}/>
<Cta />