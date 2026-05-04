const fs = require('fs');
const path = require('path');

const desktop = process.argv[2] || path.join(require('os').homedir(), 'OneDrive', 'Desktop');

// Embed logo as base64 so it works in Google Docs
const logoPath = path.join(__dirname, 'public', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

// ═══════════════════════════════════════════════════
//  INVOICE HTML (for Google Docs)
// ═══════════════════════════════════════════════════
const invoiceHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: Arial, sans-serif; color: #333333; margin: 40px; line-height: 1.5; }
  h1, h2, h3 { margin: 0; }
  table { border-collapse: collapse; width: 100%; }
  .gold { color: #C9A84C; }
  .navy { color: #1A1A2E; }
  .grey { color: #666666; }
  .divider { border-bottom: 3px solid #C9A84C; margin: 10px 0 20px 0; }
  .section-title { color: #C9A84C; font-size: 13px; font-weight: bold; letter-spacing: 1px; margin: 25px 0 8px 0; }
  .items-table th { background-color: #1A1A2E; color: #ffffff; font-size: 11px; padding: 10px 12px; text-align: left; }
  .items-table td { padding: 10px 12px; font-size: 12px; border-bottom: 1px solid #eeeeee; }
  .items-table tr:nth-child(even) td { background-color: #FAF8F0; }
  .totals-table td { padding: 6px 12px; font-size: 12px; text-align: right; }
  .total-row td { background-color: #1A1A2E; color: #ffffff; font-size: 16px; font-weight: bold; padding: 12px; }
  .total-row .amount { color: #C9A84C; }
  .footer { border-top: 2px solid #C9A84C; margin-top: 30px; padding-top: 10px; text-align: center; font-size: 11px; color: #999999; }
</style>
</head>
<body>

<!-- HEADER -->
<table style="margin-bottom: 5px;">
  <tr>
    <td style="width: 70%;">
      <img src="${logoSrc}" width="55" height="55" style="vertical-align: middle; margin-right: 12px;">
      <span style="font-size: 22px; font-weight: bold; color: #1A1A2E; vertical-align: middle;">Regal Signature Cleaning</span>
      <br>
      <span style="font-size: 10px; color: #C9A84C; font-weight: bold; letter-spacing: 2px; margin-left: 67px;">PREMIUM CLEANING SERVICES</span>
    </td>
    <td style="width: 30%; text-align: right; vertical-align: bottom;">
      <span style="font-size: 32px; font-weight: bold; color: #1A1A2E;">INVOICE</span><br>
      <span style="font-size: 13px; color: #666666;">INV-0001</span>
    </td>
  </tr>
</table>

<div class="divider"></div>

<!-- BILL TO / DETAILS / FROM -->
<table style="margin-bottom: 20px;">
  <tr>
    <td style="width: 33%; vertical-align: top;">
      <div class="section-title">BILL TO</div>
      <strong>Client Name</strong><br>
      <span class="grey">123 Client Street<br>
      Windsor, Berkshire, SL4 1AA<br>
      client@email.com<br>
      07XXX XXXXXX</span>
    </td>
    <td style="width: 33%; vertical-align: top;">
      <div class="section-title">INVOICE DETAILS</div>
      <strong>Invoice Date:</strong> <span class="grey">05/04/2026</span><br>
      <strong>Due Date:</strong> <span class="grey">19/04/2026</span><br>
      <strong>Payment Terms:</strong> <span class="grey">14 Days</span>
    </td>
    <td style="width: 33%; vertical-align: top;">
      <div class="section-title">FROM</div>
      <strong>Regal Signature Cleaning</strong><br>
      <span class="grey">Windsor, Berkshire<br>
      07544 886142<br>
      hello@regalsignaturecleaning.co.uk</span>
    </td>
  </tr>
</table>

<!-- SERVICES TABLE -->
<div class="section-title">SERVICES</div>
<table class="items-table" style="margin-bottom: 15px;">
  <thead>
    <tr>
      <th style="width: 45%;">Service</th>
      <th style="width: 10%; text-align: center;">Qty</th>
      <th style="width: 20%; text-align: right;">Unit Price</th>
      <th style="width: 25%; text-align: right;">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Signature Clean</strong></td>
      <td style="text-align: center;">1</td>
      <td style="text-align: right;">£120.00</td>
      <td style="text-align: right;"><strong class="gold">£120.00</strong></td>
    </tr>
    <tr>
      <td><strong>Oven Clean (Add-on)</strong></td>
      <td style="text-align: center;">1</td>
      <td style="text-align: right;">£45.00</td>
      <td style="text-align: right;"><strong class="gold">£45.00</strong></td>
    </tr>
    <tr>
      <td><strong>Interior Windows (Add-on)</strong></td>
      <td style="text-align: center;">1</td>
      <td style="text-align: right;">£30.00</td>
      <td style="text-align: right;"><strong class="gold">£30.00</strong></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<!-- TOTALS -->
<table class="totals-table" style="margin-bottom: 20px;">
  <tr>
    <td style="width: 75%;"><strong>Subtotal</strong></td>
    <td style="width: 25%;"><strong class="gold">£195.00</strong></td>
  </tr>
  <tr>
    <td style="background-color: #FAF8F0;">VAT (0%)</td>
    <td style="background-color: #FAF8F0;">£0.00</td>
  </tr>
  <tr>
    <td>Discount</td>
    <td>—</td>
  </tr>
  <tr class="total-row">
    <td>TOTAL DUE</td>
    <td class="amount">£195.00</td>
  </tr>
</table>

<!-- PAYMENT INFORMATION -->
<div class="section-title">PAYMENT INFORMATION</div>
<p style="font-size: 12px; margin: 0 0 3px 0;">
  <strong>Bank Transfer:</strong> <span class="grey">Sort Code: XX-XX-XX &nbsp;|&nbsp; Account No: XXXXXXXX</span>
</p>
<p style="font-size: 12px; margin: 0 0 3px 0;">
  <strong>Account Name:</strong> <span class="grey">Regal Signature Group Ltd</span>
</p>
<p style="font-size: 12px; margin: 0 0 3px 0;">
  <strong>Reference:</strong> <span class="grey">INV-0001</span>
</p>
<p style="font-size: 11px; color: #999999; font-style: italic; margin: 8px 0 0 0;">
  We also accept payment via bank transfer or cash. Please include the invoice number as a payment reference.
</p>

<!-- NOTES -->
<div class="section-title">NOTES</div>
<p style="font-size: 11px; color: #666666; margin: 0 0 5px 0;">
  Thank you for choosing Regal Signature Cleaning. If you have any questions, please contact us at 07544 886142 or hello@regalsignaturecleaning.co.uk.
</p>
<p style="font-size: 11px; color: #C9A84C; font-weight: bold; margin: 0;">
  100% Satisfaction Guaranteed &nbsp;•&nbsp; Fully Insured &amp; Bonded &nbsp;•&nbsp; Eco-Friendly Products
</p>

<!-- FOOTER -->
<div class="footer">
  <strong style="color: #C9A84C;">Regal Signature Cleaning</strong> &nbsp;|&nbsp; Windsor, Berkshire &nbsp;|&nbsp; 07544 886142 &nbsp;|&nbsp; regalsignaturecleaning.co.uk
</div>

</body>
</html>`;


// ═══════════════════════════════════════════════════
//  QUOTE HTML (for Google Docs)
// ═══════════════════════════════════════════════════
const quoteHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: Arial, sans-serif; color: #333333; margin: 40px; line-height: 1.5; }
  h1, h2, h3 { margin: 0; }
  table { border-collapse: collapse; width: 100%; }
  .gold { color: #C9A84C; }
  .navy { color: #1A1A2E; }
  .grey { color: #666666; }
  .divider { border-bottom: 3px solid #C9A84C; margin: 10px 0 20px 0; }
  .section-title { color: #C9A84C; font-size: 13px; font-weight: bold; letter-spacing: 1px; margin: 25px 0 8px 0; }
  .items-table th { background-color: #1A1A2E; color: #ffffff; font-size: 11px; padding: 10px 12px; text-align: left; }
  .items-table td { padding: 10px 12px; font-size: 12px; border-bottom: 1px solid #eeeeee; }
  .items-table tr:nth-child(even) td { background-color: #FAF8F0; }
  .totals-table td { padding: 6px 12px; font-size: 12px; text-align: right; }
  .total-row td { background-color: #1A1A2E; color: #ffffff; font-size: 16px; font-weight: bold; padding: 12px; }
  .total-row .amount { color: #C9A84C; }
  .footer { border-top: 2px solid #C9A84C; margin-top: 30px; padding-top: 10px; text-align: center; font-size: 11px; color: #999999; }
</style>
</head>
<body>

<!-- HEADER -->
<table style="margin-bottom: 5px;">
  <tr>
    <td style="width: 70%;">
      <img src="${logoSrc}" width="55" height="55" style="vertical-align: middle; margin-right: 12px;">
      <span style="font-size: 22px; font-weight: bold; color: #1A1A2E; vertical-align: middle;">Regal Signature Cleaning</span>
      <br>
      <span style="font-size: 10px; color: #C9A84C; font-weight: bold; letter-spacing: 2px; margin-left: 67px;">PREMIUM CLEANING SERVICES</span>
    </td>
    <td style="width: 30%; text-align: right; vertical-align: bottom;">
      <span style="font-size: 32px; font-weight: bold; color: #1A1A2E;">QUOTE</span><br>
      <span style="font-size: 13px; color: #666666;">QTE-0001</span><br>
      <span style="font-size: 10px; color: #C9A84C; font-weight: bold;">FREE &nbsp;•&nbsp; NO OBLIGATION</span>
    </td>
  </tr>
</table>

<div class="divider"></div>

<!-- WELCOME -->
<p style="font-size: 12px; color: #666666; margin-bottom: 20px;">
  Dear <strong style="color: #333;">Client Name</strong>, thank you for considering Regal Signature Cleaning. We are pleased to provide the following quote for your property, using only eco-friendly, premium-grade products.
</p>

<!-- PREPARED FOR / DETAILS / BY -->
<table style="margin-bottom: 20px;">
  <tr>
    <td style="width: 33%; vertical-align: top;">
      <div class="section-title">PREPARED FOR</div>
      <strong>Client Name</strong><br>
      <span class="grey">123 Client Street<br>
      Windsor, Berkshire, SL4 1AA<br>
      client@email.com<br>
      07XXX XXXXXX</span>
    </td>
    <td style="width: 33%; vertical-align: top;">
      <div class="section-title">QUOTE DETAILS</div>
      <strong>Quote Date:</strong> <span class="grey">05/04/2026</span><br>
      <strong>Valid Until:</strong> <span class="grey">05/05/2026</span><br>
      <strong>Property Type:</strong> <span class="grey">3 Bed Detached</span>
    </td>
    <td style="width: 33%; vertical-align: top;">
      <div class="section-title">PREPARED BY</div>
      <strong>Regal Signature Cleaning</strong><br>
      <span class="grey">Windsor, Berkshire<br>
      07544 886142<br>
      hello@regalsignaturecleaning.co.uk</span>
    </td>
  </tr>
</table>

<!-- SERVICES TABLE -->
<div class="section-title">SERVICES</div>
<table class="items-table" style="margin-bottom: 15px;">
  <thead>
    <tr>
      <th style="width: 45%;">Service</th>
      <th style="width: 10%; text-align: center;">Qty</th>
      <th style="width: 20%; text-align: right;">Unit Price</th>
      <th style="width: 25%; text-align: right;">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Signature Clean</strong></td>
      <td style="text-align: center;">1</td>
      <td style="text-align: right;">£120.00</td>
      <td style="text-align: right;"><strong class="gold">£120.00</strong></td>
    </tr>
    <tr>
      <td><strong>Oven Clean (Add-on)</strong></td>
      <td style="text-align: center;">1</td>
      <td style="text-align: right;">£45.00</td>
      <td style="text-align: right;"><strong class="gold">£45.00</strong></td>
    </tr>
    <tr>
      <td><strong>Interior Windows (Add-on)</strong></td>
      <td style="text-align: center;">1</td>
      <td style="text-align: right;">£30.00</td>
      <td style="text-align: right;"><strong class="gold">£30.00</strong></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<!-- TOTALS -->
<table class="totals-table" style="margin-bottom: 20px;">
  <tr>
    <td style="width: 75%;"><strong>Subtotal</strong></td>
    <td style="width: 25%;"><strong class="gold">£195.00</strong></td>
  </tr>
  <tr>
    <td style="background-color: #FAF8F0;">VAT (0%)</td>
    <td style="background-color: #FAF8F0;">£0.00</td>
  </tr>
  <tr>
    <td>Discount</td>
    <td>—</td>
  </tr>
  <tr class="total-row">
    <td>ESTIMATED TOTAL</td>
    <td class="amount">£195.00</td>
  </tr>
</table>

<!-- WHAT'S INCLUDED -->
<div class="section-title">WHAT'S INCLUDED</div>
<table style="margin-bottom: 15px; font-size: 12px; color: #666666;">
  <tr>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; Eco-friendly premium products</td>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; All equipment provided</td>
  </tr>
  <tr>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; Fully insured &amp; bonded team</td>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; Background-checked staff</td>
  </tr>
  <tr>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; 100% satisfaction guarantee</td>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; Flexible scheduling</td>
  </tr>
  <tr>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; Safe for families &amp; pets</td>
    <td style="padding: 3px 15px 3px 0;">✓&nbsp; No hidden fees</td>
  </tr>
</table>

<!-- TERMS -->
<div class="section-title">TERMS &amp; CONDITIONS</div>
<p style="font-size: 11px; color: #666666; margin: 0 0 3px 0;">• This quote is valid for 30 days from the date of issue.</p>
<p style="font-size: 11px; color: #666666; margin: 0 0 3px 0;">• Final pricing may vary based on property condition upon inspection.</p>
<p style="font-size: 11px; color: #666666; margin: 0 0 3px 0;">• Payment is due upon completion unless otherwise agreed.</p>
<p style="font-size: 11px; color: #666666; margin: 0 0 3px 0;">• 24 hours' notice required for cancellations or rescheduling.</p>
<p style="font-size: 11px; color: #666666; margin: 0 0 15px 0;">• All work carried out by fully insured and vetted professionals.</p>

<!-- ACCEPTANCE -->
<div class="section-title">QUOTE ACCEPTANCE</div>
<p style="font-size: 11px; color: #666666; margin: 0 0 15px 0;">
  By signing below, you agree to the services and terms outlined in this quote.
</p>
<p style="font-size: 12px; margin: 0 0 20px 0;">Signature: _________________________________________</p>
<p style="font-size: 12px; margin: 0 0 20px 0;">Print Name: ________________________________________</p>
<p style="font-size: 12px; margin: 0 0 10px 0;">Date: ______________________________________________</p>

<!-- FOOTER -->
<div class="footer">
  <strong style="color: #C9A84C;">Regal Signature Cleaning</strong> &nbsp;|&nbsp; Windsor, Berkshire &nbsp;|&nbsp; 07544 886142 &nbsp;|&nbsp; regalsignaturecleaning.co.uk
</div>

</body>
</html>`;

// Write both files
const invoicePath = path.join(desktop, 'Regal-Signature-Cleaning-Invoice.html');
const quotePath = path.join(desktop, 'Regal-Signature-Cleaning-Quote.html');

fs.writeFileSync(invoicePath, invoiceHTML, 'utf8');
console.log('Invoice saved:', invoicePath);

fs.writeFileSync(quotePath, quoteHTML, 'utf8');
console.log('Quote saved:', quotePath);

console.log('\nBoth HTML files saved to Desktop!');
console.log('To use in Google Docs:');
console.log('  1. Go to Google Drive (drive.google.com)');
console.log('  2. Click "+ New" > "File upload"');
console.log('  3. Upload the .html file');
console.log('  4. Right-click the uploaded file > "Open with" > "Google Docs"');
console.log('  Google Docs will convert it perfectly with all formatting preserved.');
