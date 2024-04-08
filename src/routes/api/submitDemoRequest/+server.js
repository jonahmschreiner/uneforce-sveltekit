export async function POST({ request }) {
    let data = await request.json();
    let { firstname, lastname, email, phone, organization, title } = data;
    //do salesforce callout here
const LOGIN_URL = 'https://login.salesforce.com/services/oauth2/token';
    const API_BASE_URL = 'https://schreinerconsulting-dev-ed/services/data/vXX.X/';

    const clientId = '3MVG9uudbyLbNPZN2bFaoCoXDvR93n5px86XTSaRdZNOb6gkxfCN6JVuVhElcgtkpGKW.NgmpWMFAqMmGVHrc
    const clientSecret = 'C0974536CD956C8D5E61E24CB4D01F07D65D39283DCF710F963D4E283719070C';
    const username = 'schreinerconsulting@gmail.com';
    const password = 'BookYearCatY0Y0!';
    const securityToken = 'AFUrhaVgtb3uUyNnWlDcbKgJ';

    const params = new URLSearchParams({
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      username: username,
      password: password + securityToken,
    });
console.log('params' + params);
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
            Access-Control-Allow-Origin: *,
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
