import DeleteStudentUserCase from "../../domain/useCases/DeleteStudentUserCase";
import CreateStudentUserCase from "../../domain/useCases/CreateStudentUserCase";
import ListStudentsUserCase from "../../domain/useCases/ListStudentsUserCase";
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
        return new ListStudentsUserCase(this.studentRepository);
    }

    protected get deleteStudent() {
        return new DeleteStudentUserCase(this.studentRepository);
    }

    protected get createStudent() {
        return new CreateStudentUserCase(this.studentRepository);
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