import viewFactory from '../utils/factories'
import { Request, Response } from 'express'

class StudentListController implements IController {
    private _viewType: string = 'list'
    private _view: string

    constructor(private _req: Request, private _res: Response) {
        this._view = viewFactory(this._viewType)
    }

    public run(): void {
        this._res.render('pages/studentListView', {})
    }

    public get view(): string {
        return this._view
    }
}

export default StudentListController
