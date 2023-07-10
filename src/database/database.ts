import mongoose from "mongoose"
require("dotenv").config()

//import { MONGO_DB, MONGO_HOST, MONGO_PORT} from '../config/index'
//import { MONGO_URL } from '../config/index'

//const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`

//const MONGO_URI = MONGO_URL

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI
    if (!mongoURI) {
      throw new Error("La variable de entorno MONGO_URI no está definida")
    }

    await mongoose.connect(mongoURI)
    console.log("Conexión exitosa a MongoDB Atlas")
  } catch (error) {
    console.error("Error al conectar a MongoDB", error)
  }
}
