import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);


export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();


    const result =
      await resend.emails.send({

        from:
          "ZLI Property Inquiry <onboarding@resend.dev>",

        to:
          "va.stevencristobal@gmail.com",

        subject:
          `New Property Inquiry - ${body.property}`,

        html: `

          <h2>New Property Inquiry</h2>

          <p>
          <b>Property:</b>
          ${body.property}
          </p>

          <p>
          <b>Name:</b>
          ${body.name}
          </p>

          <p>
          <b>Phone:</b>
          ${body.phone}
          </p>

          <p>
          <b>Email:</b>
          ${body.email}
          </p>

          <p>
          <b>Message:</b>
          ${body.message}
          </p>

        `,

      });


    console.log(
      "EMAIL SENT:",
      result
    );


    return NextResponse.json({
      success: true,
    });


  } catch (error) {


    console.log(
      "EMAIL ERROR:",
      error
    );


    return NextResponse.json(
      {
        success:false,
        error:error,
      },
      {
        status:500,
      }
    );

  }

}