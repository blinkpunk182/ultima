import dotenv from "dotenv"
import path from "path"

// Obtén la ruta completa al archivo mongo.env
const envPath = path.resolve(__dirname, "../../env", "mongodb.env")

// Carga las variables de entorno desde el archivo mongo.env
dotenv.config({ path: envPath })

// Exporta las variables de entorno
export const MONGO_HOST = process.env.MONGO_HOST
export const MONGO_PORT = process.env.MONGO_PORT
export const MONGO_DB = process.env.MONGO_DB
export const MONGO_USER = process.env.MONGO_USER
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD
