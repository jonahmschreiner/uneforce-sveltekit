export async function POST({ request }) {
    let data = await request.json();
    let { firstname, lastname, email, phone, organization, title } = data;
    //do salesforce callout here
const LOGIN_URL = 'https://login.salesforce.com/services/oauth2/token';
    const API_BASE_URL = 'https://your-salesforce-instance-url/services/data/vXX.X/';

    const clientId = 'your_client_id';
    const clientSecret = 'your_client_secret';
    const username = 'your_salesforce_username';
    const password = 'your_salesforce_password';
    const securityToken = 'your_salesforce_security_token';

    const params = new URLSearchParams({
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      username: username,
      password: password + securityToken,
    });

    try {
      const loginResponse = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      if (!loginResponse.ok) {
        throw new Error('Failed to authenticate with Salesforce');
      }

      const { access_token } = await loginResponse.json();

      const leadData = {
        FirstName: firstname,
        LastName: lastname,
        Company: organization,
        LeadSource: 'Web Lead-Demo-Request', 
        // Add more fields as needed
      };

      const createLeadResponse = await fetch('${API_BASE_URL}/sobjects/Lead', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ${access_token}',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!createLeadResponse.ok) {
        throw new Error('Failed to create lead in Salesforce');
      }

      const createdLead = await createLeadResponse.json();
      return {
        status: 200,
        body: {
          success: true,
          message: 'Lead created successfully',
          lead: createdLead,
        },
      };
    } catch (error) {
      return {
        status: 500,
        body: {
          success: false,
          message: error.message,
        },
      };
    }

    return new Response(JSON.stringify({status: 200}));
};
