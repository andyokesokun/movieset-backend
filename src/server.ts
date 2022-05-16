import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import routes  from './routes'
import swaggerOptions from './configs/swagger-config'

dotenv.config();

const swaggerDoc = swaggerJsdoc(swaggerOptions);


const app: Express = express();
const port = process.env.PORT;

app.use("/api",routes)
app.use("/swagger-docs",swaggerUI.serve, swaggerUI.setup(swaggerDoc) )



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});