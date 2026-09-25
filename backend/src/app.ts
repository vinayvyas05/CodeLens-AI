import express from "express"
import aiRouter from "./routes/ai.routes.ts";
import "dotenv/config";

const app = express(); 

app.use(express.json()); 

app.use('/ai', aiRouter); 

export default app; 