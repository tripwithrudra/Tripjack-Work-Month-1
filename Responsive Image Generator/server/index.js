import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cors from 'cors';



// Use `fileURLToPath` and `import.meta.url` to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });

// Output folder for resized images
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const imageSizes = [320, 640, 1280];
const imageFormats = ['jpeg', 'webp', 'png'];

app.use(express.static(outputDir));
app.use(cors())

// POST route for image upload and processing
app.post('/upload', upload.single('image'), async (req, res) => {
  const filePath = req.file.path;
  const originalFilename = path.parse(req.file.originalname).name;

  const generatedImages = [];

  try {
    for (let size of imageSizes) {
      for (let format of imageFormats) {
        const outputFilename = `${originalFilename}-${size}.${format}`;
        const outputFilePath = path.join(outputDir, outputFilename);

        await sharp(filePath)
          .resize({ width: size })
          .toFormat(format)
          .toFile(outputFilePath);

        generatedImages.push({
          size,
          format,
          url: `/${outputFilename}`,
        });
      }
    }

    const htmlOutput = generateResponsiveHTML(originalFilename, generatedImages);

    res.json({ images: generatedImages, html: htmlOutput });
  } catch (error) {
    res.status(500).send('Error processing image');
  } finally {
    fs.unlinkSync(filePath);
  }
});

function generateResponsiveHTML(imageName, images) {
  let html = `<picture>\n`;

  for (let format of imageFormats) {
    html += `  <source type="image/${format}" srcset="\n`;
    images
      .filter(img => img.format === format)
      .forEach(img => {
        html += `    ${img.url} ${img.size}w,\n`;
      });
    html = html.trimEnd().slice(0, -1); // Remove last comma
    html += `\n  ">\n`;
  }

  const fallbackImage = images.find(img => img.format === 'jpeg').url;
  html += `  <img src="${fallbackImage}" alt="${imageName}">\n</picture>`;

  return html;
}

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
