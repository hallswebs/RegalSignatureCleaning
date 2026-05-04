const ExcelJS = require('exceljs');
const path = require('path');

const desktop = process.argv[2] || path.join(require('os').homedir(), 'OneDrive', 'Desktop');

// Brand colours
const NAVY = 'FF1A1A2E';
const GOLD = 'FFC9A84C';
const LIGHT_GOLD = 'FFFAF8F0';
const WHITE = 'FFFFFFFF';
const LIGHT_GREY = 'FFF5F5F5';

const headerFont = { name: 'Calibri', size: 12, bold: true, color: { argb: WHITE } };
const subHeaderFont = { name: 'Calibri', size: 10, bold: true, color: { argb: NAVY } };
const bodyFont = { name: 'Calibri', size: 10, color: { argb: 'FF444444' } };
const goldFont = { name: 'Calibri', size: 10, bold: true, color: { argb: GOLD } };
const thinBorder = {
  top: { style: 'thin', color: { argb: 'FFE0E0E0' } },
  bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } },
  left: { style: 'thin', color: { argb: 'FFE0E0E0' } },
  right: { style: 'thin', color: { argb: 'FFE0E0E0' } }
};

// ═══════════════════════════════════════════════
//  1. CLIENT DATABASE
// ═══════════════════════════════════════════════
async function createClientDatabase() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Regal Signature Cleaning';
  wb.created = new Date();

  // --- CLIENTS sheet ---
  const ws = wb.addWorksheet('Clients', {
    properties: { tabColor: { argb: GOLD } },
    views: [{ state: 'frozen', ySplit: 3 }]
  });

  // Title row
  ws.mergeCells('A1:N1');
  const titleCell = ws.getCell('A1');
  titleCell.value = 'REGAL SIGNATURE CLEANING — CLIENT DATABASE';
  titleCell.font = { name: 'Calibri', size: 16, bold: true, color: { argb: WHITE } };
  titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  ws.getRow(1).height = 36;

  // Subtitle
  ws.mergeCells('A2:N2');
  const subCell = ws.getCell('A2');
  subCell.value = 'Windsor, Berkshire & Surrounding Areas  |  07544 886142  |  hello@regalsignaturecleaning.co.uk';
  subCell.font = { name: 'Calibri', size: 9, color: { argb: GOLD } };
  subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  subCell.alignment = { horizontal: 'center', vertical: 'middle' };
  ws.getRow(2).height = 22;

  // Column headers
  const columns = [
    { header: 'Client ID', key: 'id', width: 10 },
    { header: 'First Name', key: 'firstName', width: 14 },
    { header: 'Last Name', key: 'lastName', width: 14 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Phone', key: 'phone', width: 16 },
    { header: 'Address', key: 'address', width: 30 },
    { header: 'Postcode', key: 'postcode', width: 10 },
    { header: 'Property Type', key: 'propertyType', width: 16 },
    { header: 'Service Package', key: 'servicePackage', width: 18 },
    { header: 'Frequency', key: 'frequency', width: 14 },
    { header: 'Last Clean Date', key: 'lastClean', width: 16 },
    { header: 'Next Clean Date', key: 'nextClean', width: 16 },
    { header: 'Total Spent (£)', key: 'totalSpent', width: 16 },
    { header: 'Notes', key: 'notes', width: 30 }
  ];

  // Set columns (but skip rows 1-2 which are title)
  ws.columns = columns.map(c => ({ key: c.key, width: c.width }));

  // Header row (row 3)
  const headerRow = ws.getRow(3);
  columns.forEach((col, i) => {
    const cell = headerRow.getCell(i + 1);
    cell.value = col.header;
    cell.font = headerFont;
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.border = thinBorder;
  });
  headerRow.height = 28;

  // Data validations
  const serviceOptions = '"Essential Clean,Signature Clean,Deep Clean"';
  const frequencyOptions = '"Weekly,Fortnightly,Monthly,One-off,Ad-hoc"';
  const propertyOptions = '"1 Bed Flat,2 Bed Flat,2 Bed House,3 Bed House,4 Bed House,5+ Bed House,Studio,Other"';

  // Add 50 blank formatted rows for data entry
  for (let r = 4; r <= 53; r++) {
    const row = ws.getRow(r);
    const isEven = (r - 4) % 2 === 0;
    const bgColor = isEven ? WHITE : LIGHT_GOLD;

    // Client ID auto-fill
    row.getCell(1).value = `RSC-${String(r - 3).padStart(4, '0')}`;
    row.getCell(1).font = { ...bodyFont, bold: true };

    columns.forEach((col, i) => {
      const cell = row.getCell(i + 1);
      if (!cell.value) cell.value = '';
      cell.font = bodyFont;
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };
      cell.border = thinBorder;
      cell.alignment = { vertical: 'middle', wrapText: i === columns.length - 1 };
    });

    // Date formatting
    row.getCell(11).numFmt = 'DD/MM/YYYY';
    row.getCell(12).numFmt = 'DD/MM/YYYY';
    // Currency formatting
    row.getCell(13).numFmt = '[$£]#,##0.00';

    row.height = 22;
  }

  // Data validations for the range
  for (let r = 4; r <= 53; r++) {
    ws.getCell(`I${r}`).dataValidation = {
      type: 'list', allowBlank: true, formulae: [serviceOptions],
      showErrorMessage: true, errorTitle: 'Invalid', error: 'Pick from the list'
    };
    ws.getCell(`J${r}`).dataValidation = {
      type: 'list', allowBlank: true, formulae: [frequencyOptions],
      showErrorMessage: true, errorTitle: 'Invalid', error: 'Pick from the list'
    };
    ws.getCell(`H${r}`).dataValidation = {
      type: 'list', allowBlank: true, formulae: [propertyOptions],
      showErrorMessage: true, errorTitle: 'Invalid', error: 'Pick from the list'
    };
  }

  // --- SUMMARY sheet ---
  const sumWs = wb.addWorksheet('Dashboard', {
    properties: { tabColor: { argb: NAVY } }
  });

  sumWs.mergeCells('A1:E1');
  const sumTitle = sumWs.getCell('A1');
  sumTitle.value = 'CLIENT DASHBOARD';
  sumTitle.font = { name: 'Calibri', size: 16, bold: true, color: { argb: WHITE } };
  sumTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  sumTitle.alignment = { horizontal: 'center', vertical: 'middle' };
  sumWs.getRow(1).height = 36;

  const stats = [
    ['Total Clients', 'COUNTA(Clients!B4:B53)'],
    ['Essential Clean Clients', 'COUNTIF(Clients!I4:I53,"Essential Clean")'],
    ['Signature Clean Clients', 'COUNTIF(Clients!I4:I53,"Signature Clean")'],
    ['Deep Clean Clients', 'COUNTIF(Clients!I4:I53,"Deep Clean")'],
    ['Weekly Clients', 'COUNTIF(Clients!J4:J53,"Weekly")'],
    ['Fortnightly Clients', 'COUNTIF(Clients!J4:J53,"Fortnightly")'],
    ['Monthly Clients', 'COUNTIF(Clients!J4:J53,"Monthly")'],
    ['Total Revenue (£)', 'SUM(Clients!M4:M53)'],
    ['Average Spend per Client (£)', 'IFERROR(AVERAGE(Clients!M4:M53),0)'],
  ];

  sumWs.getColumn(1).width = 30;
  sumWs.getColumn(2).width = 20;

  stats.forEach((s, i) => {
    const row = sumWs.getRow(i + 3);
    const labelCell = row.getCell(1);
    const valCell = row.getCell(2);
    labelCell.value = s[0];
    labelCell.font = subHeaderFont;
    labelCell.border = thinBorder;
    labelCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? LIGHT_GOLD : WHITE } };
    valCell.value = { formula: s[1] };
    valCell.font = goldFont;
    valCell.alignment = { horizontal: 'center' };
    valCell.border = thinBorder;
    valCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? LIGHT_GOLD : WHITE } };
    if (s[0].includes('£')) valCell.numFmt = '[$£]#,##0.00';
    row.height = 26;
  });

  const filePath = path.join(desktop, 'Regal-Signature-Client-Database.xlsx');
  await wb.xlsx.writeFile(filePath);
  console.log('Client Database saved: ' + filePath);
}

// ═══════════════════════════════════════════════
//  2. PRICE CALCULATOR
// ═══════════════════════════════════════════════
async function createPriceCalculator() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Regal Signature Cleaning';
  wb.created = new Date();

  // --- CALCULATOR sheet ---
  const ws = wb.addWorksheet('Price Calculator', {
    properties: { tabColor: { argb: GOLD } },
    views: [{ showGridLines: false }]
  });

  // Column widths
  ws.getColumn(1).width = 3;
  ws.getColumn(2).width = 32;
  ws.getColumn(3).width = 16;
  ws.getColumn(4).width = 14;
  ws.getColumn(5).width = 16;
  ws.getColumn(6).width = 3;
  ws.getColumn(7).width = 28;
  ws.getColumn(8).width = 16;

  // Title
  ws.mergeCells('B1:H1');
  const t = ws.getCell('B1');
  t.value = 'REGAL SIGNATURE CLEANING — PRICE CALCULATOR';
  t.font = { name: 'Calibri', size: 16, bold: true, color: { argb: WHITE } };
  t.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  t.alignment = { horizontal: 'center', vertical: 'middle' };
  ws.getRow(1).height = 38;

  // Subtitle
  ws.mergeCells('B2:H2');
  const st = ws.getCell('B2');
  st.value = 'Enter service selections below — the total will calculate automatically';
  st.font = { name: 'Calibri', size: 9, italic: true, color: { argb: GOLD } };
  st.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  st.alignment = { horizontal: 'center', vertical: 'middle' };
  ws.getRow(2).height = 22;

  // ----- CLIENT INFO SECTION -----
  const clientSection = [
    [4, 'CLIENT INFORMATION', true],
    [5, 'Client Name:', ''],
    [6, 'Address:', ''],
    [7, 'Postcode:', ''],
    [8, 'Phone:', ''],
    [9, 'Email:', ''],
    [10, 'Property Type:', ''],
    [11, 'Date:', ''],
  ];

  clientSection.forEach(([row, label, isHeader]) => {
    const r = ws.getRow(row);
    if (isHeader) {
      ws.mergeCells(`B${row}:E${row}`);
      const c = ws.getCell(`B${row}`);
      c.value = label;
      c.font = { ...headerFont, size: 11 };
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
      c.alignment = { vertical: 'middle' };
      r.height = 26;
    } else {
      const lc = ws.getCell(`B${row}`);
      lc.value = label;
      lc.font = subHeaderFont;
      lc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT_GOLD } };
      lc.border = thinBorder;

      ws.mergeCells(`C${row}:E${row}`);
      const vc = ws.getCell(`C${row}`);
      vc.value = '';
      vc.font = bodyFont;
      vc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: WHITE } };
      vc.border = thinBorder;
      r.height = 24;
    }
  });

  // Date formatting
  ws.getCell('C11').numFmt = 'DD/MM/YYYY';

  // Property type validation
  ws.getCell('C10').dataValidation = {
    type: 'list', allowBlank: true,
    formulae: ['"1 Bed Flat,2 Bed Flat,2 Bed House,3 Bed House,4 Bed House,5+ Bed House,Studio,Other"']
  };

  // ----- PRICE LIST (right side) -----
  ws.mergeCells('G4:H4');
  const plTitle = ws.getCell('G4');
  plTitle.value = 'PRICE GUIDE';
  plTitle.font = { ...headerFont, size: 11 };
  plTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
  plTitle.alignment = { vertical: 'middle' };
  ws.getRow(4).height = 26;

  const priceGuide = [
    ['Essential Clean', '£80 – £120'],
    ['Signature Clean', '£120 – £180'],
    ['Deep Clean', '£180 – £300'],
    ['Oven Clean', '£45'],
    ['Fridge Clean', '£30'],
    ['Interior Windows', '£30'],
    ['Ironing & Laundry', '£25'],
  ];

  priceGuide.forEach((item, i) => {
    const row = 5 + i;
    const lc = ws.getCell(`G${row}`);
    lc.value = item[0];
    lc.font = bodyFont;
    lc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? LIGHT_GOLD : WHITE } };
    lc.border = thinBorder;

    const vc = ws.getCell(`H${row}`);
    vc.value = item[1];
    vc.font = goldFont;
    vc.alignment = { horizontal: 'center' };
    vc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? LIGHT_GOLD : WHITE } };
    vc.border = thinBorder;
  });

  // ----- MAIN SERVICE SELECTION -----
  const svcStart = 13;
  ws.mergeCells(`B${svcStart}:E${svcStart}`);
  const svcTitle = ws.getCell(`B${svcStart}`);
  svcTitle.value = 'MAIN SERVICE';
  svcTitle.font = { ...headerFont, size: 11 };
  svcTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
  svcTitle.alignment = { vertical: 'middle' };
  ws.getRow(svcStart).height = 26;

  // Headers
  const svcHeaders = ['Service', 'Qty', 'Unit Price (£)', 'Line Total (£)'];
  const svcHRow = ws.getRow(svcStart + 1);
  svcHeaders.forEach((h, i) => {
    const c = svcHRow.getCell(i + 2);
    c.value = h;
    c.font = { ...subHeaderFont, color: { argb: WHITE } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
    c.border = thinBorder;
  });
  svcHRow.height = 24;

  // Service rows
  const services = [
    ['Essential Clean', 1, 100],
    ['Signature Clean', 1, 150],
    ['Deep Clean', 1, 240],
  ];

  services.forEach((svc, i) => {
    const row = svcStart + 2 + i;
    const r = ws.getRow(row);
    const bg = i % 2 === 0 ? LIGHT_GOLD : WHITE;

    const nameCell = r.getCell(2);
    nameCell.value = svc[0];
    nameCell.font = bodyFont;
    nameCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
    nameCell.border = thinBorder;

    const qtyCell = r.getCell(3);
    qtyCell.value = 0;
    qtyCell.font = bodyFont;
    qtyCell.alignment = { horizontal: 'center' };
    qtyCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: WHITE } };
    qtyCell.border = thinBorder;

    const priceCell = r.getCell(4);
    priceCell.value = svc[2];
    priceCell.numFmt = '[$£]#,##0.00';
    priceCell.font = bodyFont;
    priceCell.alignment = { horizontal: 'center' };
    priceCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: WHITE } };
    priceCell.border = thinBorder;

    const totalCell = r.getCell(5);
    totalCell.value = { formula: `C${row}*D${row}` };
    totalCell.numFmt = '[$£]#,##0.00';
    totalCell.font = goldFont;
    totalCell.alignment = { horizontal: 'center' };
    totalCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
    totalCell.border = thinBorder;

    r.height = 24;
  });

  // ----- ADD-ONS -----
  const addStart = svcStart + 6;
  ws.mergeCells(`B${addStart}:E${addStart}`);
  const addTitle = ws.getCell(`B${addStart}`);
  addTitle.value = 'ADD-ON SERVICES';
  addTitle.font = { ...headerFont, size: 11 };
  addTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
  addTitle.alignment = { vertical: 'middle' };
  ws.getRow(addStart).height = 26;

  const addHRow = ws.getRow(addStart + 1);
  svcHeaders.forEach((h, i) => {
    const c = addHRow.getCell(i + 2);
    c.value = h;
    c.font = { ...subHeaderFont, color: { argb: WHITE } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
    c.border = thinBorder;
  });
  addHRow.height = 24;

  const addOns = [
    ['Oven Clean', 45],
    ['Fridge Clean', 30],
    ['Interior Windows', 30],
    ['Ironing & Laundry', 25],
  ];

  addOns.forEach((addon, i) => {
    const row = addStart + 2 + i;
    const r = ws.getRow(row);
    const bg = i % 2 === 0 ? LIGHT_GOLD : WHITE;

    r.getCell(2).value = addon[0];
    r.getCell(2).font = bodyFont;
    r.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
    r.getCell(2).border = thinBorder;

    r.getCell(3).value = 0;
    r.getCell(3).font = bodyFont;
    r.getCell(3).alignment = { horizontal: 'center' };
    r.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: WHITE } };
    r.getCell(3).border = thinBorder;

    r.getCell(4).value = addon[1];
    r.getCell(4).numFmt = '[$£]#,##0.00';
    r.getCell(4).font = bodyFont;
    r.getCell(4).alignment = { horizontal: 'center' };
    r.getCell(4).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: WHITE } };
    r.getCell(4).border = thinBorder;

    r.getCell(5).value = { formula: `C${row}*D${row}` };
    r.getCell(5).numFmt = '[$£]#,##0.00';
    r.getCell(5).font = goldFont;
    r.getCell(5).alignment = { horizontal: 'center' };
    r.getCell(5).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
    r.getCell(5).border = thinBorder;

    r.height = 24;
  });

  // ----- DISCOUNT & TOTALS -----
  const totStart = addStart + 2 + addOns.length + 1;
  const lastServiceRow = svcStart + 2 + services.length - 1;
  const lastAddonRow = addStart + 2 + addOns.length - 1;

  ws.mergeCells(`B${totStart}:E${totStart}`);
  const totTitle = ws.getCell(`B${totStart}`);
  totTitle.value = 'TOTALS';
  totTitle.font = { ...headerFont, size: 11 };
  totTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
  totTitle.alignment = { vertical: 'middle' };
  ws.getRow(totStart).height = 26;

  const totals = [
    [`Services Subtotal`, `SUM(E${svcStart + 2}:E${lastServiceRow})`],
    [`Add-ons Subtotal`, `SUM(E${addStart + 2}:E${lastAddonRow})`],
    [`Subtotal`, `E${totStart + 1}+E${totStart + 2}`],
    [`Discount (%)`, null, true],
    [`Discount Amount (£)`, `0-E${totStart + 3}*E${totStart + 4}/100`],
    [`VAT (%)`, null, true],
    [`VAT Amount (£)`, `(E${totStart + 3}+E${totStart + 5})*E${totStart + 6}/100`],
  ];

  totals.forEach((item, i) => {
    const row = totStart + 1 + i;
    const r = ws.getRow(row);

    // Label in col B (no merge — Google Sheets compatible)
    const lc = ws.getCell(`B${row}`);
    lc.value = item[0];
    lc.font = subHeaderFont;
    lc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? LIGHT_GOLD : WHITE } };
    lc.border = thinBorder;
    lc.alignment = { horizontal: 'left', vertical: 'middle' };

    // Style cols C & D to match
    [3, 4].forEach(col => {
      const fc = r.getCell(col);
      fc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? LIGHT_GOLD : WHITE } };
      fc.border = thinBorder;
    });

    const vc = ws.getCell(`E${row}`);
    if (item[2]) {
      vc.value = 0;
      vc.numFmt = '0';
    } else {
      vc.value = { formula: item[1] };
      vc.numFmt = '[$£]#,##0.00';
    }
    vc.font = goldFont;
    vc.alignment = { horizontal: 'center', vertical: 'middle' };
    vc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: i % 2 === 0 ? LIGHT_GOLD : WHITE } };
    vc.border = thinBorder;
    r.height = 26;
  });

  // Grand total
  const grandRow = totStart + 1 + totals.length;
  const gtLabel = ws.getCell(`B${grandRow}`);
  gtLabel.value = 'TOTAL DUE';
  gtLabel.font = { name: 'Calibri', size: 14, bold: true, color: { argb: WHITE } };
  gtLabel.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  gtLabel.alignment = { horizontal: 'left', vertical: 'middle' };
  gtLabel.border = thinBorder;

  // Style cols C & D on grand total row
  [3, 4].forEach(col => {
    const fc = ws.getRow(grandRow).getCell(col);
    fc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
    fc.border = thinBorder;
  });

  const gtVal = ws.getCell(`E${grandRow}`);
  gtVal.value = { formula: `E${totStart + 3}+E${totStart + 5}+E${totStart + 7}` };
  gtVal.numFmt = '[$£]#,##0.00';
  gtVal.font = { name: 'Calibri', size: 14, bold: true, color: { argb: GOLD } };
  gtVal.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  gtVal.alignment = { horizontal: 'center', vertical: 'middle' };
  gtVal.border = thinBorder;
  ws.getRow(grandRow).height = 34;

  // ----- FREQUENCY CALCULATOR (right side) -----
  const fStart = 13;
  ws.mergeCells(`G${fStart}:H${fStart}`);
  const fTitle = ws.getCell(`G${fStart}`);
  fTitle.value = 'RECURRING COST CALCULATOR';
  fTitle.font = { ...headerFont, size: 11 };
  fTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
  fTitle.alignment = { vertical: 'middle' };

  const costPerVisitRow = fStart + 2;
  const freqData = [
    ['Frequency', ''],
    ['Cost per Visit (£)', `E${grandRow}`],
    ['Weekly Cost (£)', `H${costPerVisitRow}`],
    ['Monthly Cost — 4 weeks (£)', `H${costPerVisitRow}*4`],
    ['Fortnightly Cost per month (£)', `H${costPerVisitRow}*2`],
    ['Annual Cost — Weekly (£)', `H${costPerVisitRow}*52`],
    ['Annual Cost — Fortnightly (£)', `H${costPerVisitRow}*26`],
    ['Annual Cost — Monthly (£)', `H${costPerVisitRow}*12`],
  ];

  freqData.forEach((item, i) => {
    const row = fStart + 1 + i;
    const r = ws.getRow(row);
    const bg = i % 2 === 0 ? LIGHT_GOLD : WHITE;

    const lc = ws.getCell(`G${row}`);
    lc.value = item[0];
    lc.font = subHeaderFont;
    lc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
    lc.border = thinBorder;

    const vc = ws.getCell(`H${row}`);
    if (i === 0) {
      vc.value = 'Weekly';
      vc.dataValidation = {
        type: 'list', allowBlank: true,
        formulae: ['"Weekly,Fortnightly,Monthly,One-off"']
      };
      vc.font = bodyFont;
    } else {
      vc.value = { formula: item[1] };
      vc.numFmt = '[$£]#,##0.00';
      vc.font = goldFont;
    }
    vc.alignment = { horizontal: 'center', vertical: 'middle' };
    vc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
    vc.border = thinBorder;
    r.height = 24;
  });

  // ----- INSTRUCTIONS -----
  const instrRow = grandRow + 2;
  ws.mergeCells(`B${instrRow}:H${instrRow}`);
  const instrCell = ws.getCell(`B${instrRow}`);
  instrCell.value = 'HOW TO USE:  1. Enter client details  →  2. Set Qty to 1 for chosen services  →  3. Adjust discount/VAT if needed  →  Total calculates automatically';
  instrCell.font = { name: 'Calibri', size: 9, italic: true, color: { argb: 'FF888888' } };
  instrCell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  ws.getRow(instrRow).height = 28;

  const filePath = path.join(desktop, 'Regal-Signature-Price-Calculator.xlsx');
  await wb.xlsx.writeFile(filePath);
  console.log('Price Calculator saved: ' + filePath);
}

// ═══════════════════════════════════════════════
//  RUN BOTH
// ═══════════════════════════════════════════════
(async () => {
  await createClientDatabase();
  await createPriceCalculator();
  console.log('Both files saved to Desktop!');
})();
