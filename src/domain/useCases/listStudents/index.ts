import ListStudentsController from "../../../app/controllers/ListStudentsController";
import repositoryFactory from "../../../infra/repositories/RepositoryFactory";
import ListStudentsUserCase from "./ListStudentsUserCase";

const studentRepository = repositoryFactory();

const listStudentsUserCase = new ListStudentsUserCase(
    studentRepository
);

const listStudentsController = new ListStudentsController(
    listStudentsUserCase
)

export default listStudentsController