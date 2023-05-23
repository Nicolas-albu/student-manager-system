import DeleteStudentUseCase from "../../domain/useCases/DeleteStudentUseCase";
import CreateStudentUseCase from "../../domain/useCases/CreateStudentUseCase";
import ListStudentsUseCase from "../../domain/useCases/ListStudentsUseCase";
import IStudentRepository from "../../domain/repositories/IStudentRepository";

import CreateStudentController from "../controllers/CreateStudentController";
import DeleteStudentController from "../controllers/DeleteStudentController";
import ListStudentsController from "../controllers/ListStudentsController";

import repositoryFactory from "../../infra/repositories/RepositoryFactory";


abstract class AbstractStudentUserCases {
    private studentRepository: IStudentRepository;

    constructor() {
        this.studentRepository = repositoryFactory();
    }

    protected get listStudent() {
        return new ListStudentsUseCase(this.studentRepository);
    }

    protected get deleteStudent() {
        return new DeleteStudentUseCase(this.studentRepository);
    }

    protected get createStudent() {
        return new CreateStudentUseCase(this.studentRepository);
    }
}


export default class StudentUseCases extends AbstractStudentUserCases {
    constructor() {
        super();
    }

    public get createStudentController() {
        return new CreateStudentController(super.createStudent);
    }

    public get deleteStudentController() {
        return new DeleteStudentController(super.deleteStudent);
    }

    public get listStudentController() {
        return new ListStudentsController(super.listStudent);
    }
}