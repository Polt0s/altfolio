import axios from "axios";

const axiosBase = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a4a616c3d9msh972e47e902b5e4cp153a98jsna9b058eac578'
  }
});

export default axiosBase;
