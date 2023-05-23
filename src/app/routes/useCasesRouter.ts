import StudentUseCases from "../useCases/StudentUseCases";
import { Router } from "express";

const useCasesRouter = Router()
const studentUserCases = new StudentUseCases();

useCasesRouter.get('/student', (req, res) => {
    return studentUserCases.listStudentController.handle(req, res);
})

useCasesRouter.post('/student', (req, res) => {
    return studentUserCases.createStudentController.handle(req, res);
})

useCasesRouter.put('/student', (req, res) => {
    return studentUserCases.updateStudentController.handle(req, res);
})

useCasesRouter.delete('/student', (req, res) => {
    return studentUserCases.deleteStudentController.handle(req, res);
})

export default useCasesRouter