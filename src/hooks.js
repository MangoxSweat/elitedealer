// src/hooks.js
export async function handle({ event, resolve }) {
	console.log('Incoming request:', event.request.method, event.request.url);

	const response = await resolve(event);

	// Log the response status and headers
	console.log('Response status:', response.status);
	console.log('Response headers:', response.headers.get('Access-Control-Allow-Origin'));

	// Set CORS headers
	response.headers.set(
		'Access-Control-Allow-Origin',
		'https://elitedealerus-production.up.railway.app'
	);
	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Specify allowed methods
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // Specify allowed headers
	return response;
}
