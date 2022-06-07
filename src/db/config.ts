import { Dialect } from "sequelize/types"
import dotenv from 'dotenv';
dotenv.config()

const dbconst = {
    dialect: process.env.DB_DIALECT as Dialect,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD  as string,
    host: process.env.DB_HOST as string,
    database: process.env.DB_NAME as string,
    useDbURL : process.env.USEDBURL as unknown as boolean,
    dbURL : process.env.DB_URL as string
  }
  
  export default dbconst




