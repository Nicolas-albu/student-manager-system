import Student from "../../domain/entities/Student";
import { Request, Response } from 'express'
import GetStudentsUserCase from "../../domain/useCases/GetStudentUseCase";

export default class GetStudentController {
    constructor(
        private getStudentsUseCase: GetStudentsUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Student> {
        const { registration } = req.params;
        let students: Student

        try {
            students = await this.getStudentsUseCase.execute(Number(registration))

            return students
        } catch (err) {
            // return res.status(404).json({
            //     message: err.message || "Ocorreu um erro na listagem de estudantes.",
            // });
        }
    }
}
