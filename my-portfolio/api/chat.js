import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ message: "Gemini API key is missing. Check your environment variables." });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are a helpful and friendly chatbot assistant on Pasan Pramuditha's portfolio website. 
Your goal is to answer questions about Pasan, his skills, experience, and projects. 
You can respond in English or Sinhala (Singlish or Unicode Sinhala) depending on how the user asks the question.
If the user asks in Sinhala, respond in Sinhala.

Here is the information about Pasan:
- Name: Pasan Pramuditha
- Profession: Full-Stack Developer & Software Engineering Undergraduate.
- Current Role: Intern Software Engineer at Sri Lanka Telecom PLC (SLTMobitel) in the Talent Development Section.
- Tech Stack/Skills: .NET, Flutter, React, Next.js, Java, Python, MySQL.
- Education: BSc (Hons) in Computer Science (Software Engineering) from University of Wolverhampton (Cinec Campus). Higher Diploma in Software Engineering (BTEC HND level 5) from Pearson College London (Esoft Metro Campus).
- Projects: 
  1. A digital system for SLT Internal Solutions Management.
  2. SmartFin: An AI-powered personal finance and expense tracker.
- Interests: AI, Cloud Deployment, Architecture.
- Contact info: LinkedIn (Pasan-Pramuditha-31b2b2286), GitHub (Pasan-Pramuditha), WhatsApp (+94 77 813 6626), Email (pasanpr58@gmail.com).

Guidelines:
- Keep your answers concise, friendly, and professional.
- Do not make up information that is not in the context above. If you don't know, say you don't know and ask them to contact Pasan directly.
- Use a polite and enthusiastic tone.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.status(200).json({ text: response.text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ message: "Something went wrong while generating the response.", error: error.message });
  }
}
