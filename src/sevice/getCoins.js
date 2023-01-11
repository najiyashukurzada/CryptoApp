import axios from "axios"
import { BASE_URL } from "../const"

export const getCoins = () => {
    return axios.get(`${BASE_URL}`)
}