import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/reply", async (req, res) => {
  const keys = Object.keys(req.body);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: keys[0],
    temperature: 1,
    max_tokens: 256,
  });
  res.send(completion.data.choices[0].text);
});

app.listen(3000, () => {
  console.log("Server is running");
});
