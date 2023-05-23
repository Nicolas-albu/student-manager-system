import createStudentController from "../../domain/useCases/createStudent";
import { Router } from "express";

const useCasesRouter = Router()

useCasesRouter.post('/student/', (req, res) => {
    return createStudentController.handle(req, res);
})

export default useCasesRouter