import { Router } from "express";

const viewRouter = Router()

viewRouter.get('/', (req, res) => {
    res.status(200).render('pages/createStudentView')
})

export default viewRouter