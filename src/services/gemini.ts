import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateStudyGuide(subjectTitle: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Você é um tutor especializado em tecnologia. Crie um guia de estudos conciso e prático para a unidade curricular: "${subjectTitle}". 
      O guia deve conter:
      1. Principais tópicos para focar.
      2. Uma breve explicação de por que este assunto é importante no mercado atual.
      3. Uma sugestão de mini-projeto ou exercício prático.
      
      Responda em Markdown formatado de forma elegante.`,
    });

    return response.text || "Não foi possível gerar o guia no momento.";
  } catch (error) {
    console.error("Error generating study guide:", error);
    return "Erro ao conectar com o tutor de IA. Verifique sua chave de API.";
  }
}
