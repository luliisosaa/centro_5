// api.js

const API_URL = "https://centro-de-estudiantes-api.vercel.app";

const AUTH = "Basic " + btoa("grupo5:PassGrupo5");

async function apiRequest(endpoint, method = "GET", data = null) {
  const options = {
    method: method,
    headers: {
      "accept": "application/json",
      "Authorization": AUTH
    }
  };

  if (data !== null) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const url = `${API_URL}${endpoint}`;
console.log("URL consultada:", url);

const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error en la API: ${response.status}`);
  }

  return await response.json();
}

async function obtenerUsuariosAPI() {
  return await apiRequest("/usuarios");
}
async function crearUsuarioAPI(nuevoUsuario) {
  return await apiRequest("/usuarios", "POST", nuevoUsuario);
}
async function obtenerNotificacionesAPI() {
  return await apiRequest("/notificaciones");
}

async function crearNotificacionAPI(notificacion) {
  return await apiRequest("/notificaciones", "POST", notificacion);
}

async function actualizarNotificacionAPI(id, datos) {
  return await apiRequest(`/notificaciones/${id}`, "PUT", datos);
}

async function eliminarNotificacionAPI(id) {
  return await apiRequest(`/notificaciones/${id}`, "DELETE");
}
async function obtenerNovedadesAPI() {
  return await apiRequest("/novedades");
}

async function crearNovedadAPI(novedad) {
  return await apiRequest("/novedades", "POST", novedad);
}
async function obtenerReglamentacionAPI() {
  return await apiRequest("/reglamentacion");
}

async function crearReglamentacionAPI(documento) {
  return await apiRequest("/reglamentacion", "POST", documento);
}
async function eliminarReglamentacionAPI(id) {
  return await apiRequest(`/reglamentacion/${id}`, "DELETE");
}
async function obtenerCalendarioAPI() {
  return await apiRequest("/calendario");
}

async function crearCalendarioAPI(fechaCalendario) {
  return await apiRequest("/calendario", "POST", fechaCalendario);
}

async function eliminarCalendarioAPI(id) {
  return await apiRequest(`/calendario/${id}`, "DELETE");
}