import { openAI, altGPTClient } from "../helpers/openai";
import parseResponse from "../libs/symp_response_parser";

export default class AskService {
    async askWhomToConsult(suspectedSymptoms: string) {
        const response = await openAI.createChatCompletion({
            messages: [{
                role: "user",
                content: "You are helping a physician generate a differential diagnosis on a patient who is presenting with the following symptoms " + suspectedSymptoms + ". The answer should be in bullet points. List the differential diagnosis with the percentage of likelihood. Include only the top 5 conditions. Answer in a bullet point format. And also show which field of doctor shall I consult for each likelyhood"
            }],
            model: "gpt-3.5-turbo"
        })
        //  response.data.choices[0].message?.content
        return parseResponse(response.data.choices[0].message?.content as string);
    }

    async askWhomToConsult2(suspectedSymptoms: string) {
        const response = await altGPTClient({
            method: "post",
            data: {
                env: "form",
                session: "N/A",
                prompt: "You are helping a physician generate a differential diagnosis on a patient who is presenting with the following symptoms " + suspectedSymptoms + ". The answer should be in bullet points. List the differential diagnosis with the percentage of likelihood. Include only the top 5 conditions. Answer in a bullet point format. And also show which field of doctor shall I consult for each likelyhood",
                model: "gpt-3.5-turbo",
                embeddingsIndex: "",
                temperature: "0.8",
                maxTokens: "4096"
            }
        })
        console.log(response.data.reply)
        return parseResponse(response.data.reply)
    }

    async tempAskCons(suspectedSymptoms: string) {
        const response = await altGPTClient({
            method: "post",
            data: {
                env: "form",
                session: "N/A",
                prompt: "You are helping a physician generate a differential diagnosis on a patient who is presenting with the following symptoms " + suspectedSymptoms + ". The answer should be in bullet points. List the differential diagnosis with the percentage of likelihood. Include only the top 5 conditions. Answer in a bullet point format. And also show which field of doctor shall I consult for each likelyhood",
                model: "gpt-3.5-turbo",
                embeddingsIndex: "",
                temperature: "0.8",
                maxTokens: "4096"
            }
        })
        return (response.data.reply)
    }
}