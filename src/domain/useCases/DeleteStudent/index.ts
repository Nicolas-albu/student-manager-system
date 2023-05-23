import DeleteStudentController from "../../../app/controllers/DeleteStudentController";
import repositoryFactory from "../../../infra/repositories/RepositoryFactory";
import DeleteStudentUserCase from "./DeleteStudentUserCase";

const studentRepository = repositoryFactory();

const deleteStudentsUserCase = new DeleteStudentUserCase(
    studentRepository
);

const deleteStudentController = new DeleteStudentController(
    deleteStudentsUserCase
)

export default deleteStudentController