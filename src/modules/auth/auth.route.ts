import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { loginHandler } from "./auth.controller";
import { loginInputSchema } from "./auth.schema";

const router = express.Router();

router.post("/login", processRequestBody(loginInputSchema.body), loginHandler);

export default router;
