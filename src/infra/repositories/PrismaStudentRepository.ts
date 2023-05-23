import IStudentRepository from "../../domain/repositories/IStudentRepository";
import { PrismaClient } from "@prisma/client";
import Student from "../../domain/entities/Student";

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

    async list(): Promise<Student[]> {
        return await this.prisma.student.findMany();
    }
}