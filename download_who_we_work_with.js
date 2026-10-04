const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const API_KEY = '57871561-32866468d5bb1033c55dddc22';
const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'capitals', 'who');
const CREDITS_FILE = path.join(__dirname, 'public', 'images', 'credits.json');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const GLOBAL_REJECT = ['fashion', 'model', 'beauty', 'woman portrait', 'girl', 'selfie', 'smartphone', 'phone', 'party', 'lifestyle', 'render', '3d', 'illustration', 'cartoon', 'money', 'cash', 'coins', 'dollar', 'stock market', 'chart', 'bitcoin', 'handshake'];

const cards = [
  {
    id: 'who_01',
    queries: ["entrepreneur working office", "businessman desk planning", "indian businessman laptop"],
    mustTags: ['entrepreneur', 'businessman', 'business', 'office', 'work'],
  },
  {
    id: 'who_02',
    queries: ["startup team meeting", "team brainstorming office", "coworking team laptop"],
    mustTags: ['startup', 'team', 'teamwork', 'meeting', 'office'],
  },
  {
    id: 'who_03',
    queries: ["corporate building glass", "office tower architecture", "skyscraper business"],
    mustTags: ['building', 'architecture', 'office', 'skyscraper', 'corporate'],
  },
  {
    id: 'who_04',
    queries: ["business meeting discussion", "business people conference table", "business negotiation"],
    mustTags: ['meeting', 'business', 'conference', 'discussion', 'partnership'],
  },
  {
    id: 'who_05',
    queries: ["businessman reading documents", "financial analysis paperwork", "executive reviewing report"],
    mustTags: ['business', 'documents', 'finance', 'analysis', 'executive', 'paperwork'],
  }
];

function hasMustTag(itemTags, mustTags) {
  return mustTags.some(tag => itemTags.includes(tag.toLowerCase()));
}

function hasRejectTag(itemTags) {
  return GLOBAL_REJECT.some(tag => itemTags.includes(tag.toLowerCase()));
}

async function run() {
  const credits = [];
  try {
    if (fs.existsSync(CREDITS_FILE)) {
      const existing = JSON.parse(fs.readFileSync(CREDITS_FILE, 'utf-8'));
      credits.push(...existing);
    }
  } catch(e) {}

  for (const card of cards) {
    let bestPhoto = null;
    let usedQuery = '';

    for (const query of card.queries) {
      console.log(`Searching for: ${query}`);
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=vertical&category=business&safesearch=true&min_width=1200&order=popular&per_page=50`;
      
      try {
        const res = await axios.get(url);
        if (res.data.hits) {
          // Filter hits
          const validHits = res.data.hits.filter(hit => {
            const tags = hit.tags.split(',').map(t => t.trim().toLowerCase());
            return hasMustTag(tags, card.mustTags) && !hasRejectTag(tags);
          });
          
          if (validHits.length > 0) {
            // Take the top one (since it's ordered by popular)
            bestPhoto = validHits[0];
            usedQuery = query;
            break; // Found one, break out of queries loop
          }
        }
      } catch (e) {
        console.error(`Error with query ${query}:`, e.message);
      }
    }

    if (bestPhoto) {
      console.log(`Found for ${card.id}:`);
      console.log(`URL: ${bestPhoto.pageURL}`);
      console.log(`Tags: ${bestPhoto.tags}`);
      
      const imgRes = await axios.get(bestPhoto.largeImageURL, { responseType: 'arraybuffer' });
      const outputPath = path.join(OUTPUT_DIR, `${card.id}.webp`);
      
      await sharp(imgRes.data)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      credits.push({
        id: card.id,
        photographer: bestPhoto.user,
        url: bestPhoto.pageURL,
        filename: `who/${card.id}.webp`,
        query: usedQuery
      });
    } else {
      console.log(`No photo found for ${card.id} that passed filters.`);
    }
  }

  fs.writeFileSync(CREDITS_FILE, JSON.stringify(credits, null, 2));
  console.log('Finished processing.');
}

run();
