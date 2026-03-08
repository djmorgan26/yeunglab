/**
 * sync-data.js
 *
 * Fetches every tab from the Yeung Lab Google Sheet and writes structured
 * JSON files to data/*.json. Run via `npm run data:sync`.
 *
 * Each JSON file is an array of objects whose keys come from the first
 * (header) row of the corresponding sheet tab.
 */

import 'dotenv/config';
import { google } from 'googleapis';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');

// Tabs to sync and the output filename for each
const TABS = [
  { tab: 'People',       file: 'people.json' },
  { tab: 'Alumni',       file: 'alumni.json' },
  { tab: 'Projects',     file: 'projects.json' },
  { tab: 'Publications', file: 'publications.json' },
  { tab: 'Studies',      file: 'studies.json' },
  { tab: 'News',         file: 'news.json' },
];

// ── Auth ──────────────────────────────────────────────────────────────────────
function getAuth() {
  const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.error(
      'ERROR: Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY in .env'
    );
    process.exit(1);
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Converts a 2-D array of values (rows × cols) into an array of objects
 * using the first row as keys. Skips fully empty rows. Coerces 'TRUE'/'FALSE'
 * strings to booleans.
 */
function rowsToObjects(rows) {
  if (!rows || rows.length < 2) return [];
  const [headers, ...dataRows] = rows;

  return dataRows
    .filter((row) => row.some((cell) => cell !== '' && cell !== undefined))
    .map((row) => {
      return headers.reduce((obj, key, i) => {
        let value = row[i] ?? '';
        // Coerce boolean strings
        if (value === 'TRUE') value = true;
        else if (value === 'FALSE') value = false;
        obj[key] = value;
        return obj;
      }, {});
    });
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const { GOOGLE_SHEET_ID } = process.env;

  if (!GOOGLE_SHEET_ID) {
    console.error(
      'ERROR: GOOGLE_SHEET_ID is not set in .env\n' +
        'Run `npm run data:create-sheet` first to create the sheet, then copy the ID into .env.'
    );
    process.exit(1);
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  mkdirSync(DATA_DIR, { recursive: true });

  console.log(`Syncing from sheet: ${GOOGLE_SHEET_ID}\n`);

  const results = await Promise.allSettled(
    TABS.map(async ({ tab, file }) => {
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: `${tab}`,
      });

      const records = rowsToObjects(res.data.values);
      const outPath = join(DATA_DIR, file);
      writeFileSync(outPath, JSON.stringify(records, null, 2), 'utf-8');

      console.log(`  ✓ ${tab.padEnd(14)} → data/${file}  (${records.length} records)`);
      return { tab, count: records.length };
    })
  );

  const errors = results.filter((r) => r.status === 'rejected');
  if (errors.length > 0) {
    console.error('\nErrors:');
    errors.forEach((e) => console.error(' ', e.reason?.message ?? e.reason));
    process.exit(1);
  }

  console.log('\nSync complete.');
}

main().catch((err) => {
  console.error('Sync failed:', err.message);
  process.exit(1);
});
