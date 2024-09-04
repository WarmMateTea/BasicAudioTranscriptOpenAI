import fs from "fs";
import OpenAi from "openai";
import path from "path";
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
config()
const openai = new OpenAi();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
    const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(path.join(__dirname, 'audio\\Musk x Moraes_ entenda decisão do STF contra rede social.mp3')),
        model: 'whisper-1',
        language: 'pt',
    });

    console.log(transcription);
}

main();