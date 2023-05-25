import StudentUseCases from "../useCases/StudentUseCases";
import { Router } from "express";

const viewRouter = Router()
const studentUserCases = new StudentUseCases();

viewRouter.get('/', async (req, res) => {
    const students = await studentUserCases.listStudentController.handle(req, res)

    return res.status(200).render('pages/listStudentView', { students })

    // res.status(200).render('pages/listStudentView')

})

viewRouter.get('/createStudent', async (req, res) => {
    return res.status(200).render('pages/createStudentView')

    // res.status(200).render('pages/listStudentView')

})


export default viewRouter