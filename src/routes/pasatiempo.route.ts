import { Router } from "express"

import { pasatiempoController } from "../controllers"

const router = Router()

router.get("/lista-pasatiempos", pasatiempoController.getAllPasatiempo)

router.post("/insertar-pasatiempos", pasatiempoController.create)

export default router
