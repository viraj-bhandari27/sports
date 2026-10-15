import axios from "axios"
import { API_BASE_URL } from "./ApiConfig"

/** Base URL for team lookup */
const REST_API_BASE_URL = `${API_BASE_URL}/searchplayers.php?p=`

/** GET {Player} - lists desired player info */
export const findPlayer = (playerName) => axios.get(`${REST_API_BASE_URL}${encodeURIComponent(playerName)}`)