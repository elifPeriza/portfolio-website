import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const database = mysql.createPool(process.env.DATABASE_URL as string);

export default database;
