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

.hidden {
    display: none;
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
    import { onMount } from "svelte";

    onMount(() => {
        const questionText1 = document.querySelector("#q1");
        const questionIcon1 = document.querySelector("#Q1");
        const questionText2 = document.querySelector("#q2");
        const questionIcon2 = document.querySelector("#Q2");
        const questionText3 = document.querySelector("#q3");
        const questionIcon3 = document.querySelector("#Q3");
        const questionText4 = document.querySelector("#q4");
        const questionIcon4 = document.querySelector("#Q4");
        const questionText5 = document.querySelector("#q5");
        const questionIcon5 = document.querySelector("#Q5");
        const questionText6 = document.querySelector("#q6");
        const questionIcon6 = document.querySelector("#Q6");
        const questionText7 = document.querySelector("#q7");
        const questionIcon7 = document.querySelector("#Q7");
        const questionText8 = document.querySelector("#q8");
        const questionIcon8 = document.querySelector("#Q8");
        const answerText1 = document.querySelector("#a1");
        const answerIcon1 = document.querySelector("#A1");
        const answerText2 = document.querySelector("#a2");
        const answerIcon2 = document.querySelector("#A2");
        const answerText3 = document.querySelector("#a3");
        const answerIcon3 = document.querySelector("#A3");
        const answerText4 = document.querySelector("#a4");
        const answerIcon4 = document.querySelector("#A4");
        const answerText5 = document.querySelector("#a5");
        const answerIcon5 = document.querySelector("#A5");
        const answerText6 = document.querySelector("#a6");
        const answerIcon6 = document.querySelector("#A6");
        const answerText7 = document.querySelector("#a7");
        const answerIcon7 = document.querySelector("#A7");
        const answerText8 = document.querySelector("#a8");
        const answerIcon8 = document.querySelector("#A8");

        questionText1.addEventListener("click", function() {
            if (answerText1.classList.contains("hidden")){
                questionIcon1.classList.add("rotate180");
                answerText1.classList.remove("hidden");
                answerIcon1.classList.remove("hidden");
            } else {
                questionIcon1.classList.remove("rotate180");
                answerText1.classList.add("hidden");
                answerIcon1.classList.add("hidden");
            }
        });
        

        questionIcon1.addEventListener("click", function() {
            if (answerText1.classList.contains("hidden")){
                questionIcon1.classList.add("rotate180");
                answerText1.classList.remove("hidden");
                answerIcon1.classList.remove("hidden");
            } else {
                questionIcon1.classList.remove("rotate180");
                answerText1.classList.add("hidden");
                answerIcon1.classList.add("hidden");
            }
        });

        questionText2.addEventListener("click", function() {
            if (answerText2.classList.contains("hidden")){
                questionIcon2.classList.add("rotate180");
                answerText2.classList.remove("hidden");
                answerIcon2.classList.remove("hidden");
            } else {
                questionIcon2.classList.remove("rotate180");
                answerText2.classList.add("hidden");
                answerIcon2.classList.add("hidden");
            }
        });

        questionIcon2.addEventListener("click", function() {
            if (answerText2.classList.contains("hidden")){
                questionIcon2.classList.add("rotate180");
                answerText2.classList.remove("hidden");
                answerIcon2.classList.remove("hidden");
            } else {
                questionIcon2.classList.remove("rotate180");
                answerText2.classList.add("hidden");
                answerIcon2.classList.add("hidden");
            }
        });

        questionText3.addEventListener("click", function() {
            if (answerText3.classList.contains("hidden")){
                questionIcon3.classList.add("rotate180");
                answerText3.classList.remove("hidden");
                answerIcon3.classList.remove("hidden");
            } else {
                questionIcon3.classList.remove("rotate180");
                answerText3.classList.add("hidden");
                answerIcon3.classList.add("hidden");
            }
        });

        questionIcon3.addEventListener("click", function() {
            if (answerText3.classList.contains("hidden")){
                questionIcon3.classList.add("rotate180");
                answerText3.classList.remove("hidden");
                answerIcon3.classList.remove("hidden");
            } else {
                questionIcon3.classList.remove("rotate180");
                answerText3.classList.add("hidden");
                answerIcon3.classList.add("hidden");
            }
        });

        questionText4.addEventListener("click", function() {
            if (answerText4.classList.contains("hidden")){
                questionIcon4.classList.add("rotate180");
                answerText4.classList.remove("hidden");
                answerIcon4.classList.remove("hidden");
            } else {
                questionIcon4.classList.remove("rotate180");
                answerText4.classList.add("hidden");
                answerIcon4.classList.add("hidden");
            }
        });

        questionIcon4.addEventListener("click", function() {
            if (answerText4.classList.contains("hidden")){
                questionIcon4.classList.add("rotate180");
                answerText4.classList.remove("hidden");
                answerIcon4.classList.remove("hidden");
            } else {
                questionIcon4.classList.remove("rotate180");
                answerText4.classList.add("hidden");
                answerIcon4.classList.add("hidden");
            }
        });

        questionText5.addEventListener("click", function() {
            if (answerText5.classList.contains("hidden")){
                questionIcon5.classList.add("rotate180");
                answerText5.classList.remove("hidden");
                answerIcon5.classList.remove("hidden");
            } else {
                questionIcon5.classList.remove("rotate180");
                answerText5.classList.add("hidden");
                answerIcon5.classList.add("hidden");
            }
        });

        questionIcon5.addEventListener("click", function() {
            if (answerText5.classList.contains("hidden")){
                questionIcon5.classList.add("rotate180");
                answerText5.classList.remove("hidden");
                answerIcon5.classList.remove("hidden");
            } else {
                questionIcon5.classList.remove("rotate180");
                answerText5.classList.add("hidden");
                answerIcon5.classList.add("hidden");
            }
        });

        questionText6.addEventListener("click", function() {
            if (answerText6.classList.contains("hidden")){
                questionIcon6.classList.add("rotate180");
                answerText6.classList.remove("hidden");
                answerIcon6.classList.remove("hidden");
            } else {
                questionIcon6.classList.remove("rotate180");
                answerText6.classList.add("hidden");
                answerIcon6.classList.add("hidden");
            }
        });

        questionIcon6.addEventListener("click", function() {
            if (answerText6.classList.contains("hidden")){
                questionIcon6.classList.add("rotate180");
                answerText6.classList.remove("hidden");
                answerIcon6.classList.remove("hidden");
            } else {
                questionIcon6.classList.remove("rotate180");
                answerText6.classList.add("hidden");
                answerIcon6.classList.add("hidden");
            }
        });

        questionText7.addEventListener("click", function() {
            if (answerText7.classList.contains("hidden")){
                questionIcon7.classList.add("rotate180");
                answerText7.classList.remove("hidden");
                answerIcon7.classList.remove("hidden");
            } else {
                questionIcon7.classList.remove("rotate180");
                answerText7.classList.add("hidden");
                answerIcon7.classList.add("hidden");
            }
        });

        questionIcon7.addEventListener("click", function() {
            if (answerText7.classList.contains("hidden")){
                questionIcon7.classList.add("rotate180");
                answerText7.classList.remove("hidden");
                answerIcon7.classList.remove("hidden");
            } else {
                questionIcon7.classList.remove("rotate180");
                answerText7.classList.add("hidden");
                answerIcon7.classList.add("hidden");
            }
        });

        questionText8.addEventListener("click", function() {
            if (answerText8.classList.contains("hidden")){
                questionIcon8.classList.add("rotate180");
                answerText8.classList.remove("hidden");
                answerIcon8.classList.remove("hidden");
            } else {
                questionIcon8.classList.remove("rotate180");
                answerText8.classList.add("hidden");
                answerIcon8.classList.add("hidden");
            }
        });

        questionIcon8.addEventListener("click", function() {
            if (answerText8.classList.contains("hidden")){
                questionIcon8.classList.add("rotate180");
                answerText8.classList.remove("hidden");
                answerIcon8.classList.remove("hidden");
            } else {
                questionIcon8.classList.remove("rotate180");
                answerText8.classList.add("hidden");
                answerIcon8.classList.add("hidden");
            }
        });
    });
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