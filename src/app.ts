import useCasesRouter from "./app/routes/useCasesRouter";
import viewRouter from "./app/routes/viewRouter";
import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import express from "express";
import methodOverride from 'method-override';

const app = express()
// __dirname = path.resolve()


app.use(methodOverride('_method', { methods: ['GET', 'POST'] }));
app.use(express.json())
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'app', 'views', 'static')))


app.use(useCasesRouter)
app.use(viewRouter)

app.set('view engine', 'ejs')
app.set('views', './src/app/views')

export default app