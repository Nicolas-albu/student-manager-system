import ListStudentsUserCase from "../../domain/useCases/ListStudentsUseCase";
import Student from "../../domain/entities/Student";
import { Request, Response } from 'express'

export default class CreateStudentController {
    constructor(
        private listStudentsUseCase: ListStudentsUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let students: Student[]

        try {
            students = await this.listStudentsUseCase.execute()

            return res.status(200).send(students || {
                message: "Listagem dos estudantes com sucesso."
            });
        } catch (err) {
            return res.status(404).json({
                message: err.message || "Ocorreu um erro na listagem de estudantes.",
            });
        }
    }
}
