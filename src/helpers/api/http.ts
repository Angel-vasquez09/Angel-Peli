import axios from "axios";


const api = "https://api.themoviedb.org/3/";
const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWMwMTUwNmM3MmI3OTNhNGFlMGNkMzNlMzFlZGFmYiIsInN1YiI6IjVmZTZiNmYwNjY1NjVhMDAzZGQ4NDliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tt-bRg7D6nXZX5WQ6yrdBW3Usr0NEcLClCHCcE1UHU8";

const apiInstancia = axios.create({ baseURL: api });

export const get = async(url: string) => {

    const response = await apiInstancia.get(url,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${apiKey}`
        }
    });

    return response.data;

}
export const urlImg = "https://image.tmdb.org/t/p/"