const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const API_KEY = '57871561-32866468d5bb1033c55dddc22';
const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'capitals');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const queries = [
  { id: 'hero', width: 1920, query: 'modern glass office building dusk' },
  { id: 'strategy_intro', width: 1200, query: 'business team reviewing documents boardroom' },
  { id: 'focus_01', width: 1200, query: 'investment meeting conference table' },
  { id: 'focus_02', width: 1200, query: 'growing company team office india' },
  { id: 'focus_03', width: 1200, query: 'financial planning documents desk' },
  { id: 'focus_04', width: 1200, query: 'business partners meeting city view' },
  { id: 'focus_05', width: 1200, query: 'construction modern building' },
  { id: 'focus_06', width: 1200, query: 'analyst laptop data review' },
  { id: 'eval_01', width: 1200, query: 'factory production line' },
  { id: 'eval_02', width: 1200, query: 'executive leading meeting' },
  { id: 'eval_03', width: 1200, query: 'busy city street aerial india' },
  { id: 'eval_04', width: 1200, query: 'financial report desk' },
  { id: 'eval_05', width: 1200, query: 'city skyline sunrise' },
  { id: 'eval_06', width: 1200, query: 'chess strategy close up' },
  { id: 'approach_01', width: 1200, query: 'person looking at city skyline' },
  { id: 'approach_02', width: 1200, query: 'team analysing whiteboard' },
  { id: 'approach_03', width: 1200, query: 'architect blueprint' },
  { id: 'approach_04', width: 1200, query: 'team working office' },
  { id: 'approach_05', width: 1200, query: 'young tree sunlight' },
  { id: 'quote_band', width: 1920, query: 'aerial view city at night' },
  { id: 'why_01', width: 1200, query: 'chess board strategy' },
  { id: 'why_02', width: 1200, query: 'magnifying glass documents' },
  { id: 'why_03', width: 1200, query: 'long road horizon' },
  { id: 'why_04', width: 1200, query: 'city network lights aerial' },
  { id: 'who_01', width: 1200, query: 'indian entrepreneur laptop' },
  { id: 'who_02', width: 1200, query: 'startup team office' },
  { id: 'who_03', width: 1200, query: 'corporate office lobby' },
  { id: 'who_04', width: 1200, query: 'business meeting two people' },
  { id: 'who_05', width: 1200, query: 'investor reviewing portfolio' },
  { id: 'cta_bg', width: 1920, query: 'modern office night city view' },
];

const credits = [];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function downloadAndProcess() {
  for (const q of queries) {
    try {
      console.log(`Searching Pixabay for: ${q.query}`);
      const res = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(q.query)}&image_type=photo&orientation=horizontal&per_page=3`);

      if (res.data.hits && res.data.hits.length > 0) {
        // pick the first hit that has a largeImageURL
        const photo = res.data.hits[0];
        console.log(`Found photo: ${photo.largeImageURL}`);
        
        const imgRes = await axios.get(photo.largeImageURL, { responseType: 'arraybuffer' });
        
        const outputPath = path.join(OUTPUT_DIR, `${q.id}.webp`);
        await sharp(imgRes.data)
          .resize(q.width, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        credits.push({
          id: q.id,
          photographer: photo.user,
          url: photo.pageURL,
          filename: `${q.id}.webp`
        });
      } else {
        console.log(`No results for ${q.query}`);
      }
      
      await sleep(1000); // Respect rate limits (Pixabay allows 100/min)
    } catch (error) {
      console.error(`Error processing ${q.query}:`, error.message);
    }
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, '..', 'credits.json'), JSON.stringify(credits, null, 2));
  console.log('Done!');
}

downloadAndProcess();
