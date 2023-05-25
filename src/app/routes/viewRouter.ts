import StudentUseCases from "../useCases/StudentUseCases";
import { Router } from "express";

const viewRouter = Router()
const studentUserCases = new StudentUseCases();

viewRouter.get('/', (req, res) => {
    const students = studentUserCases.listStudentController.handle(req, res);
    console.log(students)
    res.status(200).render('pages/createStudentView', { students })

})

export default viewRouter