export async function POST({ request }) {
    let data = await request.json();
    let { firstname, lastname, email, phone, organization, title } = data;
    //do salesforce callout here


    return new Response(JSON.stringify({status: 200}));
};