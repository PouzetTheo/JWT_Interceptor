import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");


  if (config.url === "/auth/login") {
    return config;
  }

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});
  //si url == /auth/login
  //  ne pas ajouter Authorization
  //sinon
  // ajouter Authorization
  
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
        const status = error.response?.status;
        if (status === 401) {
  console.log("erreur mauvais identifiants");
}
     else if  (status === 403) {
  console.log("accès interdit");
}
else 
console.log ("erreur générique")


    return Promise.reject(error);
  }
);