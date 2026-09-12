// ⚡ THE CORS BYPASS CONFIGURATION:
export const URL = window.location.hostname.includes('localhost')
  ? import.meta.env.VITE_GEMINI_API_URL
  : `/api-gemini/v1beta/models/gemini-flash-latest:generateContent?key=AQ.Ab8RN6JBXM_2OLYIJt8FXNwD9YPH7XootUSitEzQ_5jNzjfBEQ`;
