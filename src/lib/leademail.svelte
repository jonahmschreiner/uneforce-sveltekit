<script>
    export let firstname, lastname, organization, title, phone, email, type;
</script>

<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Uneforce Trial Credentials</title>
        <style type="text/css">
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
            body {
                margin: 0;
                background-color: #FFFFFF;
            }

            table {
                border-spacing: 0;
            }

            td {
                padding: 0;
            }

            img {
                border: 0;
            }

            .wrapper {
                width: 100%;
                table-layout: fixed;
                background-color: #FFFFFF;
                padding-bottom: 60px;
            }

            .main {
                background-color: #FFFFFF;
                margin: 0 auto;
                width: 100%;
                max-width: 600px;
                border-spacing: 0;
                font-family: 'Lato' Arial, Helvetica, sans-serif;
                place-items: center;
            }

        </style>
    </head>
    <body>
        <div class="wrapper">
            <table class="main">
                <tr>
                    <td><h2 style="font-family: 'Lato' 'Arial'; font-weight: 900; font-size: 38px; color: #000000;">Uneforce {#if type == 'demo'}Demo Request{:else}Free Trial Request{/if}</h2></td>
                </tr>
                <tr>
                    <td><p style="font-family: 'Lato' 'Arial'; font-weight: 500; font-size: 20px; color: #555555;">{firstname}&nbsp;{lastname}, {title} @ {organization}<br><br>Contact Info:<br>{email}<br>{phone}<br><br></p></td>
                </tr>
                <tr>
                    <td><p style="font-family: 'Lato' 'Arial'; font-weight: 700; font-size: 12px; text-align: center; color: #555555; padding-top: 20px;">© 2024 Schreiner Consulting, LLC.</p></td>
                </tr>
            </table>
        </div>
    </body>
   
</html>