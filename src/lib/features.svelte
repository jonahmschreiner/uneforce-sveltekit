<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.features-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 64px;
    text-align: center;
    max-width: 800px;
}

.features-container-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    margin-bottom: 150px;
}

.features-feature {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.features-feature-video {
    display: flex;
    width: 50%;
    flex: 1;
    padding: 50px;
    justify-content: center;
}

.features-parent-container {
    margin-bottom: 20px;
}

.features-video {
    border-style: solid;
    border-color: black;
    border-width: 4px;
    width: 90%;
}

.features-feature-text {
    width: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.features-h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    max-width: 500px;

}

.features-p {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    line-height: 200%;
    max-width: 900px;
    color: #555555;
}

@media (max-width: 1640px) {
    .features-p {
        font-size: 24px;
    }
}

@media (max-width: 1575px) {
    .features-h2 {
        font-size: 45px;
        max-width: 450px;
    }

    .features-p {
        font-size: 20px;
    }
}

@media (max-width: 1385px) {
    .features-h2 {
        font-size: 38px;
        max-width: 350px;
    }
    .features-p {
        font-size: 18px;
    }
}

@media (max-width: 1215px) {
    .features-h2 {
        font-size: 38px;
        max-width: 300px;
    }

    .features-p {
        font-size: 16px;
    }

    .features-feature-video {
        padding-left: 20px;
    }
}

@media (max-width: 770px) {
    .features-feature-text {
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
    .features-feature {
        flex-direction: column-reverse;
    }
    .features-h1 {
        font-size: 42px;
        max-width: 600px;
    }
    .features-h2 {
        font-size: 36px;
        max-width: 400px;
        text-align: center;
        margin: 0px;
        margin-bottom: 20px;
    }
    .features-container-heading {
        margin-top: 100px;
    }
    .features-p {
        font-size: 20px;
        text-align: center;
        max-width: 700px;
        line-height: 180%;
    }

    .features-feature-video {
        padding-left: 0px;
        padding: 0px;
        width: 80%;
    }
}

@media (max-width: 520px) {
    .features-h1 {
        font-size: 28px;
        max-width: 450px;
    }

    .features-h2 {
        font-size: 32px;
        max-width: 450px;
        margin-bottom: 20px;
    }

    .features-p {
        font-size: 16px;
        max-width: 450px;
        line-height: 160%;
    }

    .features-container-heading {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .features-feature {
        margin-top: 70px;
    }
}

@media (max-width: 330px) {
    .features-h1 {
        font-size: 22px;
        max-width: 300px;
    }

    .features-container-heading {
        margin-top: 40px;
    }

    .features-h2 {
        font-size: 30px;
        max-width: 300px;
        margin-bottom: 15px;
    }

    .features-p {
        font-size: 14px;
        max-width: 300px;
        line-height: 160%;
    }

    .features-feature-text {
        margin-bottom: 20px;
    }
}
</style>

<div class="features-parent-container">
    <div class="features-container-heading">
        <h1 class="features-h1">Let’s level the playing field</h1>
    </div>

    <div class="features-feature">
        <div class="features-feature-video">
            <video src="/IPManagementVideo.mp4" autoplay loop muted playsinline class="features-video">
        </div>
        <div class="features-feature-text">
            <h2 class="features-h2">IP Management</h2>
            <p class="features-p">Track inventors, disclosures, and funding<br><br>Manage agreements, office actions and more<br><br>Individualized record layouts<br><br>Ability to completely customize data structures and  their relationships<br><br>Create completely custom workflows to automate repetitive tasks</p>
        </div>
    </div>

    <div class="features-feature">
        <div class="features-feature-video">
            <video src="/MarketingVideo.mp4" autoplay loop muted playsinline class="features-video"></video>
        </div>
        <div class="features-feature-text">
            <h2 class="features-h2">Marketing</h2>
            <p class="features-p">Manage leads, contacts and accounts<br><br>Plan, execute and manage campaigns<br><br>One-button agreement creation<br><br>Track interactions through opportunities</p>
        </div>
    </div>

    <div class="features-feature">
        <div class="features-feature-video">
            <video src="/ReportingVideo.mp4" autoplay loop muted playsinline class="features-video"></video>
        </div>
        <div class="features-feature-text">
            <h2 class="features-h2">Reporting</h2>
            <p class="features-p">Office action/workflow notifications<br><br>Custom reporting across all data objects<br><br>Display, export to pdf or email reports<br><br>Custom dashboards for every type of user (including managers)<br><br>Calculate financial projections based on obligations<br><br>Automatically notify inventors of events related to their IP</p>
        </div>
    </div>
</div>