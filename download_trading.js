const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const API_KEY = '57871561-32866468d5bb1033c55dddc22';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'images', 'trading-learning.webp');

async function download() {
  const query = 'stock market trading analysis';
  console.log(`Searching for: ${query}`);
  try {
    const res = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&per_page=10`);
    if (res.data.hits && res.data.hits.length > 0) {
      console.log('Hits found:', res.data.hits.length);
      for (const hit of res.data.hits) {
        console.log('ID:', hit.id, 'Tags:', hit.tags, 'URL:', hit.largeImageURL);
      }
      // Choose first or best matching trading screen/learning image
      const photo = res.data.hits[0];
      console.log(`Downloading photo: ${photo.largeImageURL}`);
      const imgRes = await axios.get(photo.largeImageURL, { responseType: 'arraybuffer' });
      await sharp(imgRes.data)
        .resize(1400, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(OUTPUT_PATH);
      console.log('Saved image to', OUTPUT_PATH);
    }
  } catch (err) {
    console.error('Error downloading:', err);
  }
}

download();
