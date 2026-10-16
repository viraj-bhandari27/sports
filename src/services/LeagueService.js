import axios from "axios"
import { API_BASE_URL } from "./ApiConfig"

/** Base URL for team lookup */
const REST_API_BASE_URL = `${API_BASE_URL}/search_all_leagues.php?s=`

/** GET {League} - lists desired league info */
export const findPlayer = () => axios.get(`${REST_API_BASE_URL}${encodeURIComponent("all_leagues.php")}`)