import type { Resource, MedicalTip } from "./types";

export const RESOURCES: Resource[] = [
  {
    title: "Guía Completa sobre el Parto",
    category: "Parto",
    type: "PDF",
    fileUrl: "#",
  },
  {
    title: "Manejo y Diagnóstico de Preeclampsia",
    category: "Preeclampsia",
    type: "PDF",
    fileUrl: "#",
  },
  {
    title: "Protocolos de Actuación en Obstetricia",
    category: "Protocolos",
    type: "PowerPoint",
    fileUrl: "#",
    embedUrl:
      "https://view.officeapps.live.com/op/embed.aspx?src=https://file-examples.com/storage/fe235142b26330b165ce5c9/2017/02/file_example_PPT_250kB.ppt",
  },
  {
    title: "Cuidados Prenatales Esenciales",
    category: "Control Prenatal",
    type: "PDF",
    fileUrl: "#",
  },
  {
    title: "Lactancia Materna: Mitos y Realidades",
    category: "Lactancia",
    type: "PowerPoint",
    fileUrl: "#",
    embedUrl:
      "https://view.officeapps.live.com/op/embed.aspx?src=https://file-examples.com/storage/fe235142b26330b165ce5c9/2017/02/file_example_PPT_250kB.ppt",
  },
  {
    title: "Salud Ginecológica Preventiva",
    category: "Ginecología",
    type: "PDF",
    fileUrl: "#",
  },
];

export const MEDICAL_TIPS: MedicalTip[] = [
  {
    title: "Interpretación de Cardiotocografía Fetal",
    category: "Diagnóstico",
    content:
      "Tip: Al analizar un registro cardiotocográfico, evalúa siempre la línea de base, variabilidad, aceleraciones y desaceleraciones. La variabilidad es el indicador más importante de bienestar fetal.",
    imageUrl: "https://picsum.photos/seed/cardio/600/400",
  },
  {
    title: "Manejo Activo del Tercer Período del Parto",
    category: "Parto",
    content:
      "Tip: La administración de oxitocina profiláctica, la tracción controlada del cordón y el masaje uterino reducen significativamente el riesgo de hemorragia postparto.",
    imageUrl: "https://picsum.photos/seed/parto/600/400",
  },
  {
    title: "Criterios Diagnósticos de Preeclampsia Severa",
    category: "Preeclampsia",
    content:
      "Tip: No te limites a la presión arterial y proteinuria. Busca signos de severidad como trombocitopenia (<100,000/μL), disfunción hepática o síntomas visuales.",
    imageUrl: "https://picsum.photos/seed/preeclampsia/600/400",
  },
  {
    title: "Cálculo de la Fecha Probable de Parto (FPP)",
    category: "Control Prenatal",
    content:
      "Tip: La ecografía del primer trimestre (semana 8 a 13.6) basada en la longitud cráneo-caudal (LCC) es el método más preciso para datar una gestación.",
    imageUrl: "https://picsum.photos/seed/fpp/600/400",
  },
];

// URL público de un Web App de Google Apps Script que reciba POSTs y añada filas en una hoja de cálculo.
// Crea y despliega tu script como "Web app" (acceso: Anyone) y pega la URL aquí.
export const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbw1UHh3cF1Z_w2d150Bym3X3OPn0Yq0nGBZ209aQgRUHCG-i43LiAlJ1hQTKgbbR-0f/exec";

// Si Sheet.best requiere API Key, pega aquí la key y Contact.tsx la enviará en X-Api-Key
export const SHEETBEST_API_KEY =
  "q7JaKRKBSGz%Q58LHAuqw@bI3grUky@fCeLHb!zZB3vk#zROrSXvN6KenHiTeb@N";
