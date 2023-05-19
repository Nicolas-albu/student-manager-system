import StudentListController from '../controllers/studentListController'
import express, { Router } from 'express'

const primaryPagesRoutes: Router = express.Router()

primaryPagesRoutes.get('/', async (req, res) => {
    let student: IController = new StudentListController(req, res)
    student.run()
})

export default primaryPagesRoutes
