import PrismaStudentRepository from "./PrismaStudentRepository"

const repositoryFactory = () => {
    return new PrismaStudentRepository();
}

export default repositoryFactory