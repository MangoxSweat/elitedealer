// src/routes/api/media/[filename].js
export async function get({ params }) {
	const { filename } = params;
	const url = `https://elitedealerus-production.up.railway.app/_app/immutable/assets/${filename}`;

	const response = await fetch(url);
	const headers = new Headers(response.headers);
	headers.set('Access-Control-Allow-Origin', '*'); // Adjust domain as needed

	return new Response(response.body, { headers });
}
