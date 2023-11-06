import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'temp/index.html'));
});
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'temp/page2.html'))
});
app.listen(3000, () => {
    console.log('Listening to port 3000...');
});
