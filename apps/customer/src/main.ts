/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';
import v1CustomerRouter from './v1/routes/customerRoutes';
import { connectToDatabase } from './database/database.service';

const app = express();

//Connect to Atlas MongoDB Databse
connectToDatabase();

// create application/json parser
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/customers', v1CustomerRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
