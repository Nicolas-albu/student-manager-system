import Student from "../entities/Student";

export default interface IStudentRepository {
    findByEmail(email: string): Promise<Student>;
    create(student: Student): Promise<void>;
    list(): Promise<Student[]>;
}
