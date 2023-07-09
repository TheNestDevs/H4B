import axios from "axios";

import { Configuration ,OpenAIApi } from "openai";

const openAIConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

export const openAI = new OpenAIApi(openAIConfig);

export const altGPTClient = axios.create({
    baseURL: "https://leny.ai/wp-json/mwai-ui/v1/forms/submit",
})