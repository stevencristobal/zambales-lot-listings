export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxFXSh4abhiDBJ1QrJhL-w_mqNiNY-tYMVE16nreXVr1wrEuExFbD3U0-9md0FHdlz5tw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.text();

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}