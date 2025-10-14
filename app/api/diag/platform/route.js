export const runtime = 'nodejs';

export async function GET() {
  const diagnostics = {
    platform: process.platform,
    arch: process.arch,
    nodeVersion: process.version,
    cwd: process.cwd(),
    tmpWritable: false,
    env: {
      MDK_ACCESS_TOKEN_len: (process.env.MDK_ACCESS_TOKEN || '').length,
      MDK_MNEMONIC_words: (process.env.MDK_MNEMONIC || '').trim().split(/\s+/).length,
      MDK_API_BASE_URL: process.env.MDK_API_BASE_URL || 'not set',
    },
  };

  // Test /tmp write
  try {
    const fs = await import('node:fs');
    fs.writeFileSync('/tmp/test.txt', 'test');
    fs.unlinkSync('/tmp/test.txt');
    diagnostics.tmpWritable = true;
  } catch (e) {
    diagnostics.tmpError = e.message;
  }

  // Try to load the lightning module
  try {
    const lightningModule = await import('@moneydevkit/lightning-js');
    diagnostics.lightningModuleLoaded = true;
    diagnostics.lightningModuleExports = Object.keys(lightningModule);
    
    // Try to instantiate a node
    try {
      const node = new lightningModule.MdkNode({
        network: 'signet',
        mdkApiKey: process.env.MDK_ACCESS_TOKEN || 'test',
        vssUrl: 'https://vss.staging.moneydevkit.com/vss',
        esploraUrl: 'https://mutinynet.com/api',
        rgsUrl: 'https://rgs.mutinynet.com/snapshot',
        mnemonic: process.env.MDK_MNEMONIC || 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
        lspNodeId: '03fd9a377576df94cc7e458471c43c400630655083dee89df66c6ad38d1b7acffd',
        lspAddress: '3.21.138.98:9735',
      });
      diagnostics.nodeCreated = true;
      diagnostics.nodeId = node.getNodeId();
    } catch (e) {
      diagnostics.nodeCreationError = e.message;
      diagnostics.nodeCreationStack = e.stack;
    }
  } catch (e) {
    diagnostics.lightningModuleError = e.message;
    diagnostics.lightningModuleStack = e.stack;
  }

  return Response.json(diagnostics, {
    headers: { 'content-type': 'application/json' },
  });
}

