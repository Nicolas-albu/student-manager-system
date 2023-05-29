import UpdateStudentUseCase from "../../domain/useCases/UpdateStudentUseCase";
import { Request, Response } from "express";

export default class UpdateStudentController {
    constructor(
        private updateStudentUseCase: UpdateStudentUseCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { registration, name, dateOfBirth, status, email } = req.body;

        try {
            await this.updateStudentUseCase.execute({
                registration,
                name,
                dateOfBirth: new Date(dateOfBirth),
                email,
                status,
            });

            return res.status(200).send({
                message: `Atualização do estudante ${registration} com sucesso.`,
            });
        } catch (err) {
            return res.status(400).json({
                message: err.message || `Ocorreu um erro na atualização do estudante ${registration}.`,
            });
        }
    }
}