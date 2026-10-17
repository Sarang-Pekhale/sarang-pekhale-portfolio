// Keep the page empty until the configured resume is available as a PDF.
(async () => {
  const configured = window.PORTFOLIO?.cvUrl;
  if (!configured) return;
  try {
    const pdf = new URL(configured, document.baseURI);
    if (!/^https?:$/.test(pdf.protocol)) return;
    const response = await fetch(pdf, {
      headers: { Range: 'bytes=0-1023' },
      cache: 'no-store'
    });
    const type = (response.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    if (!response.ok || (type && type !== 'application/pdf' && type !== 'application/octet-stream')) return;
    const reader = response.body?.getReader();
    if (!reader) return;
    let signature = '';
    try {
      while (signature.length < 5) {
        const { value, done } = await reader.read();
        if (done) break;
        signature += String.fromCharCode(...value.subarray(0, 5 - signature.length));
      }
    } finally {
      await reader.cancel();
    }
    if (signature === '%PDF-') location.replace(pdf.href);
  } catch {
    // A missing file or offline connection leaves this intentionally blank page.
  }
})();
