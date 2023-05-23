import { Router } from "express";

const viewRouter = Router()

viewRouter.get('/', (req, res) => {
    res.status(200).send("Tudo ok")
})

export default viewRouter