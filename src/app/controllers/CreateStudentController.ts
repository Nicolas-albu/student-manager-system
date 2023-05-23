import CreateStudentUserCase from '../../domain/useCases/createStudent/CreateStudentUserCase';
import Student from '../../domain/entities/Student';
import { Request, Response } from 'express'

export default class CreateStudentController {
    constructor(
        private createStudentUseCase: CreateStudentUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { registration, name, dateOfBirth, status, email }: Student = req.body;

        const newStudent = {
            registration,
            name,
            dateOfBirth: new Date(dateOfBirth),
            email,
            status,
        };

        console.log(newStudent);

        try {
            await this.createStudentUseCase.execute(newStudent);
        } catch (err) {
            res.status(400).json({
                message: err.message || "Ocorreu um erro na criação do estudante.",
            });
        }

        return res.status(201).send({
            message: "Estudante criado com sucesso."
        });
    }
}
