import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { createConnection } from 'typeorm'


const { HOST_PORT } = process.env;
const app = express();

const main = async () => {
  try {
    // Connection
    await createConnection();
    console.log('Connected to MYSQL');

    // Middlewares
    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));

    // Routes

    //Listener
    app.listen(HOST_PORT, () => {
      console.log(`Now running on port ${HOST_PORT}`);
    });

  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to db');
  }
};

main();
