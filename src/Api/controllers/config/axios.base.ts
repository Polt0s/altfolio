import axios from "axios";

const axiosBase = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'dead031960mshd1176f27fe89c80p19d8ffjsnfbdf37fb6712'
  }
});

export default axiosBase;
