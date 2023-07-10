import { Router } from "express";

import { userController } from "../controllers";

const router = Router();

router.post("/registro/user", userController.create);

export default router;
