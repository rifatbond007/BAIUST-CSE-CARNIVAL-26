import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      full_name,
      email,
      phone,
      university,
      event,
      team_name,
      team_members,
      t_shirt_size,
      additional_info,
    } = body;

    if (!full_name || !email || !phone || !university || !event) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO carnival_registrations 
        (full_name, email, phone, university, event, team_name, team_members, t_shirt_size, additional_info)
      VALUES 
        (${full_name}, ${email}, ${phone}, ${university}, ${event}, ${team_name || null}, ${team_members || null}, ${t_shirt_size || null}, ${additional_info || null})
      RETURNING id, full_name, email, event, created_at
    `;

    return Response.json({ success: true, registration: result[0] });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { error: "Failed to submit registration" },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    const registrations = await sql`
      SELECT * FROM carnival_registrations ORDER BY created_at DESC
    `;
    return Response.json({ registrations });
  } catch (error) {
    console.error("Fetch error:", error);
    return Response.json(
      { error: "Failed to fetch registrations" },
      { status: 500 },
    );
  }
}
