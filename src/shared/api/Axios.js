import axios from "axios";
import i18n from "../../i18n/i18n";

const instance = axios.create({
  baseURL: `http://127.0.0.1:8000/${i18n.language}/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const lang = i18n.language;
  config.baseURL = `http://127.0.0.1:8000/${lang}/`;
  return config;
});

export default instance;
