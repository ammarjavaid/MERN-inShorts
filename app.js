import express from 'express';
import { Connection } from './db/db.js';
import DefaultData from './DefaultData.js';
import router from './routes/routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config();


app.use(cors());

app.use('/', router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);


DefaultData();
app.listen(8000, ()=>{
    console.log('server is running...');
})
