import { GoogleGenerativeAI } from "@google/generative-ai";

const secret = process.env.API_SECRET_KEY;
const genAI= new GoogleGenerativeAI(secret)

export async function POST(req) {
    const body= await req.json()
    const userPremise= body.prompt;

    if (!userPremise) {
        return new Response(JSON.stringify({ error: "Prompt is required." }), {
        status: 400,
        headers: {
            "Content-Type": "application/json",
        },
        });
    }

    try {
        const fullPrompt = `You are an expert Hollywood screenwriter. 
        Write a 2-page movie scene based on the following premise. 
        Format the entire output correctly as a professional screenplay, including scene headings (INT./EXT.), character names in all caps, dialogue, and parentheticals for actions or tone.
        
        Premise: "${userPremise}"`;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const screenplayText = response.text();

        return new Response(JSON.stringify({ screenplay: screenplayText }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
        });        

    } catch (error) {
        console.error("Error calling Gemini API:", error);

        return new Response(JSON.stringify({ error: "Failed to generate screenplay. Please try again." }), {
        status: 500,
        headers: {
            "Content-Type": "application/json",
        },
        });        
    }
}