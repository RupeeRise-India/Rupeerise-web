const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const API_KEY = '57871561-32866468d5bb1033c55dddc22';
const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'capitals');

async function downloadNewImage() {
  const query = 'indian startup team working';
  console.log(`Searching Pixabay for: ${query}`);
  try {
    const res = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&per_page=10`);

    if (res.data.hits && res.data.hits.length > 0) {
      // Let's pick the 3rd one to avoid the first result which might be weird
      const photo = res.data.hits[2] || res.data.hits[0];
      console.log(`Found photo: ${photo.largeImageURL}`);
      
      const imgRes = await axios.get(photo.largeImageURL, { responseType: 'arraybuffer' });
      
      const outputPath = path.join(OUTPUT_DIR, 'focus_04_v2.webp');
      await sharp(imgRes.data)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      console.log('Successfully saved to', outputPath);
    } else {
      console.log(`No results for ${query}`);
    }
  } catch (error) {
    console.error(error);
  }
}

downloadNewImage();
