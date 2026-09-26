import express from "express"
import aiRouter from "./routes/ai.routes.ts";
import "dotenv/config";
import cors from 'cors'; 

const app = express(); 

app.use(express.json()); 
app.use(cors({
    origin: process.env.FRONTEND_URL,
}))

app.use('/ai', aiRouter); 

export default app; 