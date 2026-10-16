import axios from "axios"
import { API_BASE_URL } from "./ApiConfig"

/** GET leagues for a sport, for example Basketball or Baseball. */
const REST_API_BASE_URL = `${API_BASE_URL}/search_all_leagues.php?s=`

export const findLeagues = (sport) =>
	axios.get(`${REST_API_BASE_URL}${encodeURIComponent(sport)}`)