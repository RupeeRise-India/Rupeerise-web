const fs = require('fs');
const https = require('https');

const API_KEY = '57871561-32866468d5bb1033c55dddc22';
const cities = [
  { name: 'Kochi', query: 'kochi india' },
  { name: 'Trivandrum', query: 'kerala backwaters' }, 
  { name: 'Hyderabad', query: 'hyderabad charminar' },
  { name: 'Bangalore', query: 'bangalore city' },
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', reject);
  });
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function fetchCityImages() {
  for (const city of cities) {
    // Only fetch if file doesn't exist
    if (fs.existsSync(`public/images/${city.name.toLowerCase()}.jpg`)) {
      console.log(`Skipping ${city.name}, already exists.`);
      continue;
    }
    
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(city.query)}&image_type=photo&orientation=horizontal&per_page=3`;
    
    try {
      const responseText = await new Promise((resolve, reject) => {
        https.get(url, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(data));
        }).on('error', reject);
      });

      if (responseText.includes('Rate limit exceeded')) {
         console.log(`Rate limit hit for ${city.name}, waiting 10 seconds...`);
         await delay(10000);
         // Push it back to retry
         cities.push(city);
         continue;
      }

      const response = JSON.parse(responseText);

      if (response.hits && response.hits.length > 0) {
        const hit = response.hits[0];
        const imageUrl = hit.largeImageURL || hit.webformatURL;
        
        console.log(`Downloading ${city.name} from ${imageUrl}`);
        await downloadImage(imageUrl, `public/images/${city.name.toLowerCase()}.jpg`);
        await delay(2000); // polite delay
      } else {
        console.log(`No images found for ${city.name} with query ${city.query}.`);
      }
    } catch (err) {
      console.error(`Error for ${city.name}:`, err.message);
    }
  }
}

fetchCityImages();
