export async function POST({ request }) {
    let data = await request.json();
    let { firstname, lastname, email, phone, organization, title } = data;
    //do salesforce callout here
    sendEmail();
 <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script type="text/javascript">
        function sendEmail() {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "schreinerconsulting@gmail.com",
                Password: "Enter your password",
                To: 'contactuneforce@p-v94t07w6a70adwik6zol2fyrffiqzilliav10v209hgosbgbh.36-k4qxeac.na234.apex.salesforce.com',
                From: "schreinerconsulting@gmail.com",
                Subject: "Website Demo Request",
                Body: "Well that was easy!!",
            })
                .then(function (message) {
                    alert("Mail has been sent successfully")
                });
        }
    </script>

    return new Response(JSON.stringify({status: 200}));
};
