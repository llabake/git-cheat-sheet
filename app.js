import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import mongoose from './server/db';
import config from './server/config';
import router from './server/routes';

const app = express();
const PORT = process.env.PORT || 7777;

let db = mongoose.connection;
db.once('open', () => console.log(`Connected to the database: ${config.database}`));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/')));
app.use(cors());
app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to the coolest API on earth!' });
});
app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.all('*', (req, res) => res.status(404).json({
  status: 'error',
  message: 'Route not found',
}));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
}

export default app;
