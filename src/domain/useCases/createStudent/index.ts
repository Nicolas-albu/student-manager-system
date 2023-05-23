import CreateStudentController from "../../../app/controllers/CreateStudentController";
import repositoryFactory from "../../../infra/repositories/RepositoryFactory";
import CreateStudentUserCase from "./CreateStudentUserCase";

const studentRepository = repositoryFactory();

const createStudentUseCase = new CreateStudentUserCase(
    studentRepository
)

const createStudentController = new CreateStudentController(
    createStudentUseCase
)


export default createStudentController