import DeleteStudentUserCase from "../../domain/useCases/DeleteStudent/DeleteStudentUserCase";
import { Request, Response } from "express";

export default class DeleteStudentController {
    constructor(
        private deleteStudentUserCase: DeleteStudentUserCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { registration } = req.body;

        try {
            this.deleteStudentUserCase.execute(registration);
        } catch (err) {
            res.status(404).json({
                message: err.message || `Ocorreu um erro na remoção do estudante ${registration}.`,
            });
        }

        return res.status(200).send({
            message: `Remoção do estudante ${registration} com sucesso.`,
        })
    }
}
