import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import routes  from './routes'
import swaggerOptions from './configs/swagger-config'
import db from './db/models';
import {resetDB, runSeeds}  from  './db/seeders'


dotenv.config();

const swaggerDoc = swaggerJsdoc(swaggerOptions);


const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",routes)
app.use("/swagger-docs",swaggerUI.serve, swaggerUI.setup(swaggerDoc) )

db.sequelize.sync().then(() => console.log(`databasePort: ${port}`))



// if(process.env.env == 'test'){
//    runSeeds();
// }
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// process.on('exit', function () {
//   resetDB();
//   console.log('Appication Terminated.');
// });