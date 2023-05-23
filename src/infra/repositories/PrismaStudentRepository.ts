import IStudentRepository from "../../domain/repositories/IStudentRepository";
import Student from "../../domain/entities/Student";
import { PrismaClient } from "@prisma/client";

export default class PrismaStudentRepository implements IStudentRepository {
    protected prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findByEmail(email: string): Promise<Student> {
        return await this.prisma.student.findUnique({
            where: { email },
        })
    }

    async create(student: Student): Promise<void> {
        await this.prisma.student.create({
            data: student,
        })
    }
}