import axios from "axios";

const instance = axios.create({
  baseURL: "https://65ce2c89c715428e8b4020f3.mockapi.io/",
});

const fetchCars = async () => {
  const { data } = await instance.get("adverts");
  return data;
};

export default fetchCars;
