import axios from "axios"
import { API_BASE_URL } from "./ApiConfig"

/** Base URL for team lookup */
const REST_API_BASE_URL = `${API_BASE_URL}/searchteams.php?t=`

/** GET {Team} - lists desired team */
export const findTeam = (teamName) => axios.get(`${REST_API_BASE_URL}${encodeURIComponent(teamName)}`)