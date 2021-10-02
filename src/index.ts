import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { createConnection } from 'typeorm'


const app = express();

// Connection
createConnection()
  .then(async (connection: any) => {
    app.listen(3000);
  })
  .catch((error: any) => {
    console.log(error)
  });

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes


console.log('Server on port', 3000);
