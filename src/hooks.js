// src/hooks.js

export async function handle({ event, resolve }) {
	const response = await resolve(event);

	// Read the CORS_ORIGIN environment variable
	const corsOrigin = process.env.CORS_ORIGIN || '*'; // Default to '*' if not set

	// Set CORS headers
	response.headers.set('Access-Control-Allow-Origin', corsOrigin);
	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	return response;
}
