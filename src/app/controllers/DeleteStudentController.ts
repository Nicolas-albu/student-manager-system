import DeleteStudentUserCase from "../../domain/useCases/DeleteStudentUseCase";
import { Request, Response } from "express";

export default class DeleteStudentController {
    constructor(
        private deleteStudentUserCase: DeleteStudentUserCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { registration } = req.body;

        try {
            this.deleteStudentUserCase.execute(registration);

            return res.status(200).send({
                message: `Remoção do estudante ${registration} com sucesso.`,
            });
        } catch (err) {
            return res.status(404).json({
                message: err.message || `Ocorreu um erro na remoção do estudante ${registration}.`,
            });
        }
    }
}
