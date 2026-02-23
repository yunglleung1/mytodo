import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mytodo-backend-production-a51e.up.railway.app',  // ← live Railway URL
  headers: {
    'Content-Type': 'application/json',
    // Later for password: 'X-API-Key': 'secret-key'
  }
});

export default api;