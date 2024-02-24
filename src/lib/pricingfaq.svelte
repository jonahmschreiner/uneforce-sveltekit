<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.pricing-faq-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0px;
}

.pricing-faq-header {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 50px;
    text-align: center;
    max-width: 80%;
}

.pricing-faq-question-text {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 27px;
    display: flex;
    line-height: 200%;
    color: #000000;
    margin: 0px;
}

.pricing-faq-question-answer-text {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 200%;
    color: #555555;
    margin: 0px;
    padding-bottom: 20px;

    opacity: 0;
    animation: fade-in 0.4s ease-in forwards;
}

@keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

.pricing-faq-question-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 50px;
    margin-left: 120px;
    margin-bottom: 30px;
}

.pricing-faq-question-column {
    display: grid;
    grid-template-columns: 80% 5%;
    grid-template-rows: repeat(4, 100px);
    grid-auto-rows: minmax(0, 100px);
    align-items: center;
    width: 50%;
    height: 100%;
}

.pricing-faq-question-icon {
    width: 30px;
    height: 30px;
    transition: transform 0.5s;
}

.rotate180 {
    transform: rotate(180deg);
}


@media (max-width: 1575px) {
    .pricing-faq-question-text {
        font-size: 22px;
    }

    .pricing-faq-question-answer-text {
        font-size: 19px;
    }

    .pricing-faq-question-icon {
        width: 25px;
        height: 25px;
    }

    .pricing-faq-header {
        font-size: 45px;
    }

    .pricing-faq-question-container {
        margin-left: 50px;
    }
}

@media (max-width: 1385px) {
    .pricing-faq-question-text {
        font-size: 20px;
    }

    .pricing-faq-question-answer-text {
        font-size: 18px;
    }

    .pricing-faq-question-icon {
        width: 22px;
        height: 22px;
    }

    .pricing-faq-header {
        font-size: 40px;
    }

    .pricing-faq-question-container {
        margin-left: 50px;
    }
}

@media (max-width: 1215px) {

    .pricing-faq-question-container {
        width: 90%;
    }

    .pricing-faq-question-text {
        font-size: 18px;
    }

    .pricing-faq-header {
        font-size: 35px;
    }

    .pricing-faq-question-container {
        margin-left: 25px;
    }
}

@media (max-width: 970px) {
    .pricing-faq-question-column {
        width: 100%;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }

    .pricing-faq-question-container {
        flex-direction: column;
        margin-left: 50px;
    }
}

@media (max-width: 770px) {
    .pricing-faq-question-container {
        margin-left: 60px;
    }

    .pricing-faq-question-answer-text {
        font-size: 16px;
    }

    .pricing-faq-header {
        font-size: 30px;
    }
}

@media (max-width: 520px) {
    .pricing-faq-question-container {
        margin-left: 35px;
    }

    .pricing-faq-question-text {
        font-size: 16px;
    }

    .pricing-faq-question-container {
        width: 100%;
    }

    .pricing-faq-question-icon {
        width: 18px;
        height: 18px;
    }

    .pricing-faq-header {
        font-size: 25px;
        margin-bottom: 0px;
    }

    .pricing-faq-question-answer-text {
        font-size: 14px;
    }
}
</style>

<script>

</script>


<div class="pricing-faq-container">
    <h2 class="pricing-faq-header">Frequently Asked Questions</h2>
    <div class="pricing-faq-question-container">
        <div class="pricing-faq-question-column">
                <p class="pricing-faq-question-text" id="q1">What is Uneforce?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q1">
                <p class="pricing-faq-question-answer-text hidden" id="a1">UNeForce is an application installed into an active Salesforce organization that provides Technology Transfer Offices with customized functionality.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A1">
                <p class="pricing-faq-question-text" id="q2">What is Salesforce?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q2">
                <p class="pricing-faq-question-answer-text hidden" id="a2">Salesforce CRM is an international customer relations management platform that provides leading edge management for sales and marketing efforts.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A2">
                <p class="pricing-faq-question-text" id="q3">How do I access Uneforce?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q3">
                <p class="pricing-faq-question-answer-text hidden" id="a3">By logging into your Salesforce organization wherever internet service is available.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A3">
                <p class="pricing-faq-question-text" id="q4">How do I get our old data into Uneforce?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q4">
                <p class="pricing-faq-question-answer-text hidden" id="a4">You or your IT department can use a number of recommended tools to perform the migration, or we can for you through a separate consulting agreement.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A4">
        </div>

        <div class="pricing-faq-question-column">
                <p class="pricing-faq-question-text" id="q5">How is Uneforce installed?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q5">
                <p class="pricing-faq-question-answer-text hidden" id="a5">After providing us access to your Salesforce organization, the application is installed remotely over the internet. There is no software to install.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A5">
                <p class="pricing-faq-question-text" id="q6">How can I customize Uneforce?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q6">
                <p class="pricing-faq-question-answer-text hidden" id="a6">See the learn tab for details.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A6">
                <p class="pricing-faq-question-text" id="q7">Does our Uneforce license expire?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q7">
                <p class="pricing-faq-question-answer-text hidden" id="a7">No. The license for the UNeForce application is in force once the entire licensing fee has been paid.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A7">
                <p class="pricing-faq-question-text" id="q8">Are incubators supported?</p>
                <img src="faqDropdownIcon.png" alt="Dropdown icon for a faq question." class="pricing-faq-question-icon" id="Q8">
                <p class="pricing-faq-question-answer-text hidden" id="a8">UNeForce will support any program required by the TTO, but it might take a little customization for your particular program.</p>
                <img src="blank.png" alt="test" class="pricing-faq-question-icon hidden" id="A8">
        </div>
    </div>
</div>