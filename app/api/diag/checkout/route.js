export const runtime = 'nodejs';

export async function GET() {
  try {
    // Import the server actions
    const { createCheckout } = await import('mdk-checkout/server');
    
    const result = await createCheckout({
      prompt: 'Test checkout from diagnostic',
      amount: 100,
      currency: 'USD',
      baseUrl: process.env.MDK_API_BASE_URL,
      nodeOptions: {
        vssUrl: 'https://vss.staging.moneydevkit.com/vss',
        esploraUrl: 'https://mutinynet.com/api',
        rgsUrl: 'https://rgs.mutinynet.com/snapshot',
        lspNodeId: '03fd9a377576df94cc7e458471c43c400630655083dee89df66c6ad38d1b7acffd',
        lspAddress: '3.21.138.98:9735',
        network: 'signet',
      },
    });
    
    return Response.json({
      success: true,
      checkoutId: result.id,
      status: result.status,
    });
  } catch (e) {
    return Response.json({
      success: false,
      error: e.message,
      code: e.code,
      stack: e.stack,
    }, { status: 500 });
  }
}

