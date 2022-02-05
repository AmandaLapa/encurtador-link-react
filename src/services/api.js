import axios from "axios";
export const key = "4bb8cb4d5d41f7c398bd1787e16cd78daf6a160a";

const api = axios.create({
 baseURL: 'https://api-ssl.bitly.com/v4/',
 headers:{
  'Authorization': `Bearer ${key}`
 }
});

export default api;

//minha chave: 4bb8cb4d5d41f7c398bd1787e16cd78daf6a160a
