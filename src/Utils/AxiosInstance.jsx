import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://backend-klient-sheryl.vercel.app/", // alamat json-server
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
