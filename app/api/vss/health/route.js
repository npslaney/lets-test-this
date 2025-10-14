const HEALTH_ENDPOINT = 'https://vss.staging.moneydevkit.com/vss/health';

export async function GET() {
  try {
    const upstreamResponse = await fetch(HEALTH_ENDPOINT, { cache: 'no-store' });
    const contentType = upstreamResponse.headers.get('content-type') ?? '';

    if (contentType.includes('application/json')) {
      const data = await upstreamResponse.json();
      return Response.json(data, {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
      });
    }

    const payload = await upstreamResponse.text();
    return new Response(payload, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: {
        'content-type': contentType || 'text/plain',
      },
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch VSS health status' },
      { status: 502 }
    );
  }
}
