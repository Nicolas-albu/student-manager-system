import primaryPagesRoutes from './routes/primaryPagesRoutes'
import expressLayouts from 'express-ejs-layouts'
import express, { Application } from 'express'
import bodyParser from 'body-parser'

const app: Application = express()

app.use(bodyParser.urlencoded())
app.use(primaryPagesRoutes)
app.use(expressLayouts)

app.set('view engine', 'ejs')
app.set('views', './views')

export default app
