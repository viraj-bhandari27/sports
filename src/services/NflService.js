import axios from "axios"
import { API_BASE_URL } from "./ApiConfig"

/** Base URL for the Ingredient API - Correspond to methods in Backend's Ingredient Controller. */
const REST_API_BASE_URL = API_BASE_URL + "/api/ingredients"

/** GET Ingredients - lists all recipes */
export const listIngredients = () => axios.get(REST_API_BASE_URL)

/** POST Ingredient - creates a new ingredient */
export const createIngredient = (ingredient) => axios.post(REST_API_BASE_URL, ingredient)

/** GET Ingredient - gets a single ingredient by id */
export const getIngredient = (id) => axios.get(REST_API_BASE_URL + "/" + id)