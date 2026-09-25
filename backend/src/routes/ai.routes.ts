import express from "express"; 
import { aiController } from "../controllers/ai.controller.ts";

const aiRouter = express.Router(); 


aiRouter.post("/get-response", aiController)

export default aiRouter