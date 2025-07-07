import { Handler } from "@netlify/functions";
import { neon } from '@neondatabase/serverless';


const sql = neon(); // automatically uses NETLIFY_DATABASE_URL

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, phone, message } = JSON.parse(event.body || '{}');

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT,
        phone TEXT,
        message TEXT,
        submitted_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO contacts (name, email, phone, message)
      VALUES (${name}, ${email}, ${phone}, ${message})
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Database insert failed" }),
    };
  }
};
