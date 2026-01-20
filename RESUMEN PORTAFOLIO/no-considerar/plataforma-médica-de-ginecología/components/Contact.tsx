
import React, { useState } from 'react';
import { GOOGLE_SHEETS_WEBHOOK_URL, SHEETBEST_API_KEY } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Consulta General',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // --- INSTRUCTIONS FOR GOOGLE APPS SCRIPT ---
    // 1. Go to script.google.com and create a new project.
    // 2. Paste the following code into the script editor:
    /*
      function doPost(e) {
        try {
          var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Contactos");
          if (!sheet) {
            sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Contactos");
            sheet.appendRow(["Timestamp", "Name", "Email", "Topic", "Message"]);
          }
          var params = e.parameter;
          var newRow = [new Date(), params.name, params.email, params.topic, params.message];
          sheet.appendRow(newRow);
          
          return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);
        } catch (error) {
          return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    */
    // 3. Save the project.
    // 4. Click "Deploy" > "New deployment".
    // 5. Select "Web app" as the type.
    // 6. Under "Who has access", select "Anyone".
    // 7. Click "Deploy". Authorize the script.
    // 8. Copy the "Web app URL" and paste it below, replacing the placeholder.
    const SCRIPT_URL = GOOGLE_SHEETS_WEBHOOK_URL;
    if (!SCRIPT_URL) {
      console.error('Google Sheets webhook URL not configured. Set GOOGLE_SHEETS_WEBHOOK_URL in constants.ts');
      setStatus('error');
      return;
    }

    // Enviar como formulario URL-encoded para Google Apps Script (evita preflight y 411)
    const isAppsScript = SCRIPT_URL.includes('script.google.com') || SCRIPT_URL.includes('script.googleusercontent.com');
    if (isAppsScript) {
      const params = new URLSearchParams();
      params.set('name', formData.name);
      params.set('email', formData.email);
      params.set('topic', formData.topic);
      params.set('message', formData.message);

      try {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: params.toString(),
          redirect: 'follow',
        });

        const text = await response.text();
        try {
          const json = JSON.parse(text);
          setServerResponse(JSON.stringify(json));
        } catch (_) {
          setServerResponse(text);
        }

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', topic: 'Consulta General', message: '' });
          return;
        } else {
          console.error('Server error:', response.status, text);
          setStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setServerResponse(String(error));
        setStatus('error');
      }
    } else {
      // Default: enviar JSON (Sheet.best u otros endpoints)
      const payload = {
        Timestamp: new Date().toISOString(),
        Name: formData.name,
        Email: formData.email,
        Topic: formData.topic,
        Message: formData.message,
      };

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (SHEETBEST_API_KEY && SCRIPT_URL.includes('sheetbest.com')) {
        headers['X-Api-Key'] = SHEETBEST_API_KEY;
      }

      try {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
        });

        const text = await response.text();
        try {
          const json = JSON.parse(text);
          setServerResponse(JSON.stringify(json));
        } catch (_) {
          setServerResponse(text);
        }

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', topic: 'Consulta General', message: '' });
          return;
        } else {
          console.error('Server error:', response.status, text);
          setStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setServerResponse(String(error));
        setStatus('error');
      }
    }

  };
  const topics = [
    "Consulta General",
    "Control Prenatal",
    "Planificación Familiar",
    "Asesoría en Lactancia",
    "Dudas sobre Resultados",
    "Otro",
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading text-text-primary sm:text-4xl">Contacto y Asesorías</h2>
        <p className="mt-4 text-lg text-text-secondary">¿Tienes alguna duda o deseas agendar una asesoría? Envíame un mensaje.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Nombre Completo</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Correo Electrónico</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-text-secondary">Tema de Asesoramiento</label>
            <select id="topic" name="topic" required value={formData.topic} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-soft-teal focus:border-soft-teal sm:text-sm rounded-md">
              {topics.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Mensaje</label>
            <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
          </div>
          <div>
            <button type="submit" disabled={status === 'loading'} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-soft-teal hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-teal disabled:bg-gray-400">
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
        </form>
        {status === 'success' && <p className="mt-4 text-center text-green-600">¡Mensaje enviado con éxito! Te contactaré pronto.</p>}
        {status === 'error' && <p className="mt-4 text-center text-red-600">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame por WhatsApp.</p>}
        {serverResponse && (
          <pre className="mt-4 p-3 bg-gray-100 rounded text-sm overflow-auto">{serverResponse}</pre>
        )}
      </div>
    </section>
  );
};

export default Contact;
