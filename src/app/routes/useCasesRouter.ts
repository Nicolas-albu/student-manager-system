import createStudentController from "../../domain/useCases/createStudent";
import listStudentsController from "../../domain/useCases/listStudents";
import { Router } from "express";

const useCasesRouter = Router()

useCasesRouter.get('/student/', (req, res) => {
    return listStudentsController.handle(req, res);
})

useCasesRouter.post('/student/', (req, res) => {
    return createStudentController.handle(req, res);
})

export default useCasesRouter