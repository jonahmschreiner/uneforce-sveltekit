import { Resend } from 'resend';
import leademail from '$lib/leademail.svelte';
export async function POST({ request }) {
    let data = await request.json();
    let { firstname, lastname, email, phone, organization, title } = data;
    
    //send email code
    const resend = new Resend('re_6dK2R2na_2RRpdoG4ERkrFsREcCo35sWB');
    const result = (leademail).render({firstname, lastname, email, phone, organization, title, type: 'demo'});
    resend.emails.send({
      from: 'Uneforce Website Lead Form <leadform@uneforce.com>',
      to: 'schreinerconsulting@gmail.com',
      subject: 'New Uneforce Lead (Website)',
      html: result.html
    });

    return new Response(JSON.stringify({status: 200}));
};
