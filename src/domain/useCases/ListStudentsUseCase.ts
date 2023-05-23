import IStudentRepository from "../repositories/IStudentRepository";
import { Student } from "@prisma/client";

export default class ListStudentsUseCase {
    constructor(
        private studentRepository: IStudentRepository,
    ) { }

    async execute(): Promise<Student[]> {
        const student = await this.studentRepository.list();

        if (!student) {
            throw new Error("Estudante não encontrado.");
        }

        return student;
    }
}