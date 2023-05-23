import useCasesRouter from "./app/routes/useCasesRouter";
import viewRouter from "./app/routes/viewRouter";
import express from "express";

const app = express()

app.use(express.json())
app.use(useCasesRouter)
app.use(viewRouter)


export default app