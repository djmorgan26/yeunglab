/**
 * create-sheet.js
 *
 * Populates an existing Google Sheet with the Yeung Lab tabs, headers, and
 * sample rows. The sheet must already exist in YOUR Google Drive and be shared
 * with the service account (Editor).
 *
 * Usage:
 *   1. Go to drive.google.com → New → Google Sheets → rename "Yeung Lab Content"
 *   2. Share it with your service account email (Editor)
 *   3. Copy the Sheet ID from the URL:
 *      https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
 *   4. Add GOOGLE_SHEET_ID=<that id> to your .env
 *   5. Run: npm run data:create-sheet
 */

import 'dotenv/config';
import { google } from 'googleapis';

// ── Schema definitions ────────────────────────────────────────────────────────
const TABS = [
  {
    tab: 'People',
    headers: [
      'name', 'pronouns', 'role', 'degrees', 'institution', 'grad_year',
      'research_interests', 'fun_fact', 'highlight_summary',
      'headshot_url', 'vision_quote', 'email', 'linkedin', 'active',
    ],
    sampleRow: [
      'Howa Yeung', 'she/her', 'PI', 'MD, MSc', 'Emory University', '2015',
      'SGM dermatology, health disparities, clinical trials', '',
      'Dr. Yeung leads research at the intersection of dermatology and LGBTQ+ health.',
      '', '', 'howa.yeung@emory.edu', '', 'TRUE',
    ],
  },
  {
    tab: 'Alumni',
    headers: [
      'name', 'pronouns', 'role', 'degrees', 'institution', 'grad_year',
      'research_interests', 'headshot_url', 'vision_quote',
      'current_position', 'current_employer', 'linkedin',
    ],
    sampleRow: [
      'Example Alumni', 'they/them', 'Former PhD Student', 'PhD',
      'Emory University', '2023', '', '', '', 'Assistant Professor',
      'Example University', '',
    ],
  },
  {
    tab: 'Projects',
    headers: [
      'title', 'description', 'status', 'collaborators', 'funding_source',
      'start_date', 'end_date', 'tags', 'image_url', 'featured',
    ],
    sampleRow: [
      'SGM Skin Health Study',
      'A multi-site study examining skin health outcomes in SGM populations.',
      'Active', 'Emory, Johns Hopkins', 'NIH R01',
      '2023-01-01', '', 'SGM, skin health, disparities', '', 'TRUE',
    ],
  },
  {
    tab: 'Publications',
    headers: [
      'title', 'authors', 'journal', 'year', 'volume', 'issue', 'pages',
      'doi', 'link', 'tags', 'featured',
    ],
    sampleRow: [
      'Example Publication Title', 'Yeung H, Doe J', 'JAMA Dermatology',
      '2024', '160', '3', '301-310',
      '10.1001/jamadermatol.2024.0001',
      'https://doi.org/10.1001/jamadermatol.2024.0001',
      'SGM, dermatology', 'TRUE',
    ],
  },
  {
    tab: 'Studies',
    headers: [
      'title', 'description', 'status', 'irb_number', 'eligibility',
      'contact_name', 'contact_email', 'link', 'image_url', 'featured',
    ],
    sampleRow: [
      'Example Clinical Study',
      'Brief IRB-approved description of this study.',
      'Recruiting', 'IRB00000000', 'Adults 18+, SGM-identified',
      'Research Coordinator Name', 'research@emory.edu', '', '', 'TRUE',
    ],
  },
  {
    tab: 'News',
    headers: [
      'title', 'date', 'category', 'summary', 'content',
      'image_url', 'external_link', 'published',
    ],
    sampleRow: [
      'Example News Item', '2024-01-15', 'Award',
      'Short teaser for the news item.', 'Full content goes here.',
      '', '', 'TRUE',
    ],
  },
];

// ── Auth ──────────────────────────────────────────────────────────────────────
function getAuth() {
  const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.error('ERROR: Missing credentials in .env — see .env.example');
    process.exit(1);
  }
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const { GOOGLE_SHEET_ID } = process.env;
  if (!GOOGLE_SHEET_ID) {
    console.error(
      'ERROR: GOOGLE_SHEET_ID is not set in .env\n\n' +
      'Steps to get it:\n' +
      '  1. Go to drive.google.com → New → Google Sheets\n' +
      '  2. Rename the sheet "Yeung Lab Content"\n' +
      '  3. Share it with the service account (Editor):\n' +
      `     ${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '<your service account email>'}\n` +
      '  4. Copy the ID from the URL:\n' +
      '     https://docs.google.com/spreadsheets/d/SHEET_ID/edit\n' +
      '  5. Add GOOGLE_SHEET_ID=<id> to .env and re-run'
    );
    process.exit(1);
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  // Get existing sheet names
  console.log(`Connecting to sheet ${GOOGLE_SHEET_ID}…`);
  const meta = await sheets.spreadsheets.get({ spreadsheetId: GOOGLE_SHEET_ID });
  const existingTabs = meta.data.sheets.map((s) => s.properties.title);
  console.log('Existing tabs:', existingTabs.join(', ') || '(none)');

  // Add missing tabs
  const tabsToAdd = TABS.filter(({ tab }) => !existingTabs.includes(tab));
  if (tabsToAdd.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: GOOGLE_SHEET_ID,
      requestBody: {
        requests: tabsToAdd.map(({ tab }) => ({
          addSheet: { properties: { title: tab } },
        })),
      },
    });
    console.log('Added tabs:', tabsToAdd.map((t) => t.tab).join(', '));
  }

  // Write headers + sample rows to each tab
  const data = TABS.map(({ tab, headers, sampleRow }) => ({
    range: `${tab}!A1`,
    values: [headers, sampleRow],
  }));

  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: GOOGLE_SHEET_ID,
    requestBody: { valueInputOption: 'USER_ENTERED', data },
  });

  // Bold + color header rows
  const updatedMeta = await sheets.spreadsheets.get({ spreadsheetId: GOOGLE_SHEET_ID });
  const sheetIdMap = Object.fromEntries(
    updatedMeta.data.sheets.map((s) => [s.properties.title, s.properties.sheetId])
  );

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: GOOGLE_SHEET_ID,
    requestBody: {
      requests: TABS.map(({ tab }) => ({
        repeatCell: {
          range: { sheetId: sheetIdMap[tab], startRowIndex: 0, endRowIndex: 1 },
          cell: {
            userEnteredFormat: {
              textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
              backgroundColor: { red: 0.0, green: 0.28, blue: 0.67 }, // Emory Blue
            },
          },
          fields: 'userEnteredFormat(textFormat,backgroundColor)',
        },
      })),
    },
  });

  console.log('\n✓ Sheet populated successfully!');
  console.log(`  https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit`);
  console.log('\nNext: run `npm run data:sync` to pull the sheet into data/*.json\n');
}

main().catch((err) => {
  console.error('Failed:', err.message);
  if (err.status === 403) {
    console.error(
      '\nPermission denied. Make sure you:\n' +
      '  1. Created the sheet in YOUR Google Drive (not via this script)\n' +
      '  2. Shared it with the service account as Editor:\n' +
      `     ${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '<service account email>'}`
    );
  }
  process.exit(1);
});
