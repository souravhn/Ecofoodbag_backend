import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);
router
  .route("/make-vendor")
  .post(jwtCheck, jwtParse, MyUserController.makeVendor);

export default router;
