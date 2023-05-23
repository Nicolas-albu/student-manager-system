import CreateStudentUserCase from '../../domain/useCases/CreateStudentUseCase';
import Student from '../../domain/entities/Student';
import { Request, Response } from 'express'

export default class CreateStudentController {
    constructor(
        private createStudentUseCase: CreateStudentUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { registration, name, dateOfBirth, status, email }: Student = req.body;

        try {
            await this.createStudentUseCase.execute({
                registration,
                name,
                dateOfBirth: new Date(dateOfBirth),
                email,
                status,
            });

            return res.status(201).send({
                message: "Estudante criado com sucesso."
            });
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Ocorreu um erro na criação do estudante.",
            });
        }
    }
}
