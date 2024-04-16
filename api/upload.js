import { IncomingForm } from 'formidable';
import fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new IncomingForm();
  form.uploadDir = "./uploads";
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing the files:', err);
      res.status(500).json({ error: 'Error parsing the files' });
      return;
    }
    // Assuming a single file upload, get the first file
    const file = files.file[0];
    const uploadPath = `./uploads/${file.newFilename}`;
    console.log('Attempting to save file to:', uploadPath);
    // TODO: Replace with actual Cloudflare R2 bucket upload logic
    // For now, we'll just save the file locally in the 'uploads' directory
    try {
      await writeFile(uploadPath, fs.readFileSync(file.filepath));
      console.log('File uploaded successfully');
      res.status(200).json({ message: 'File uploaded successfully' });
    } catch (writeError) {
      console.error('Error saving the file:', writeError);
      res.status(500).json({ error: 'Error saving the file' });
    }
  });
}
