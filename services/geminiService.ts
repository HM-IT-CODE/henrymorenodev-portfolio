
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Eres el Asistente IA de Henry Moreno, Arquitecto de Software Senior.
Tu objetivo es ayudar a los visitantes a entender el portafolio de Henry y cómo sus servicios pueden ayudarles.

Información sobre Henry:
- Especialista en Arquitecturas Modernas, Microservicios y SaaS.
- Proyectos destacados: Visor DICOM para salud, Hotel Manager (ERP hotelero), y Sistemas de Garantías.
- Tecnologías principales: Next.js, Node.js, NestJS, Docker, SQL, PostgreSQL, DICOM.
- Ofrece: Migraciones de sistemas legacy (.NET a Node), consultoría técnica, automatización con IA.

Directrices de respuesta:
- Sé profesional, conciso y útil.
- Responde siempre en español.
- Si te preguntan sobre precios, indica que deben contactar a Henry directamente a través del formulario de contacto para una cotización personalizada.
- Menciona su enfoque en escalabilidad y seguridad.
`;

export const chatWithAssistant = async (message: string, history: {role: 'user' | 'model', parts: {text: string}[]}[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocurrió un error al conectar con el asistente. Por favor, intenta de nuevo.";
  }
};
