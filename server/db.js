import dotenv from 'dotenv';
import mongoose from 'mongoose';

import config from './config'
import seed from "./seeders/seed-cheats";
dotenv.config();

mongoose.Promise = global.Promise;
if (config.use_env_variable) {
  mongoose.connect(process.env[config.use_env_variable],
    { useNewUrlParser: true });
} else {
  const { prefix, host, port, database } = config;
  const mongoUri = `${prefix}://${host}:${port}/${database}`;
  console.log(mongoUri, 'jujuj')
  mongoose.connect(mongoUri, { useNewUrlParser: true }, () => {
    dropDatabase();
    process.env.NODE_ENV === 'development' ? seed() : ''
  });
}

export const disconnect = () => new Promise(resolve => mongoose.disconnect().then(() => resolve()));

export const dropDatabase = async () => {
  await mongoose.connection.db.dropDatabase();
};

export default mongoose;
