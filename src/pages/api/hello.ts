import type { APIRoute } from 'astro';

// Rendered on request, not at build time.
export const prerender = false;

export const GET: APIRoute = () =>
  Response.json({ message: 'Hello from Eurobase', time: new Date().toISOString() });
